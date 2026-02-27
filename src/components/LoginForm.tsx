import { Form, Formik, FormikErrors, FormikHelpers } from 'formik'
import CustomInput from './CustomInput'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../hooks/useUserContext'

type LoginFormValues = {
    email: string,
    password: string
}

type LoginResponse = {
    data: {
        token: string;
    }
}

export default function LoginForm() {

    const initialValues = {
        email: "",
        password: ""
    }
    
    const navigate = useNavigate()
    const { token, setToken } = useUserContext();

    useEffect(()=>{
        if(token){
            navigate("/");
        }
    })

    const validate = (values: LoginFormValues) => {
        const errors: FormikErrors<LoginFormValues> = {}   

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

    const onSubmit = async (values: LoginFormValues, { setErrors }: FormikHelpers<LoginFormValues>) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const payload = {
                email: values.email,
                password: values.password
            }
            const response = await axios.post<LoginResponse>(`${apiUrl}/auth/login`, payload);

            const token = response.data.data.token;
            localStorage.setItem("token", token);
            console.log(response);

            setToken(token);
                navigate("/");
            } catch (error) {
                console.error("Error submitting the form data: " + error);
                if(axios.isAxiosError(error) && error.response?.status === 401) {
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
                    className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer hover:bg-amber-300'
                    disabled={isSubmitting}
                >
                    Login
                </button>
            </Form>
        )}
        </Formik>
    )
}