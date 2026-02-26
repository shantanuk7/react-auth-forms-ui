import { Form, Formik } from 'formik'
import CustomInput from '../components/CustomInput'
import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginForm() {

    const initialValues = {
        email: "",
        password: ""
    }
    
    const navigate = useNavigate()
    const { token, setToken } = useContext(UserContext);

    useEffect(()=>{
        if(token){
            navigate("/");
        }
    })

    const validate = (values) => {
        const errors = {}   

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.password) {
            errors.password = 'Required'
        }

        return errors
    }

    const onSubmit = async (values, { setErrors }) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const payload = {
                email: values.email,
                password: values.password
            }
            const response = await axios.post(`${apiUrl}/auth/login`, payload);

            const token = response.data.data.token;
            localStorage.setItem("token", token);
            console.log(response);

            setToken(token);
                navigate("/");
        } catch (error) {
            console.error("Error submitting the form data: " + error);
            if(error?.response?.status === 401) {
                setErrors({password: "Invalid email or password"});
            }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
        {({ isSubmitting }) => (
            <Form>
                <CustomInput type="email" label="Email" name="email" />
                <CustomInput type="password" label="Password" name="password" />
                <button
                    type='submit'
                    className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer'
                    disabled={isSubmitting}
                >
                    Login
                </button>
            </Form>
        )}
        </Formik>
    )
}