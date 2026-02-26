import { ErrorMessage, Form, Formik, } from 'formik'
import CustomInput from '../components/CustomInput'
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {

    const initialValues = {
        name:"",
        email: "",
        password: "",
        confirmPassword:""
    }

    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        const maxNameLength = 100;
        const minNameLength = 3;

        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > maxNameLength) {
            errors.name = `Name must be less than ${maxNameLength} characters`;
        } else if (values.name.length < minNameLength){
            errors.name = `Name must be greater than ${minNameLength} characters`
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(values.password)) {
            errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, a number and a special character';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password must match';
        }

        return errors;
    };

    const onSubmit = async (values) => {        
        setUser(values);
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            await axios.post(`${apiUrl}/auth/register`, values);
            navigate("/login");
        } catch (error) {
            console.error("Error submitting the form data: " + error);
        }

    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >{({ isSubmitting }) => ( 
            <Form>
                <CustomInput type="name" label="Name" name="name" />
                <CustomInput type="email" label="Email" name="email" />
                <CustomInput type="password" label="Password" name="password" />
                <CustomInput type="password" label="Confirm Password" name="confirmPassword" />
                <button type='submit' className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer' disabled={isSubmitting}>Submit</button>
            </Form>)}
        </Formik>
    )
}