import { Form, Formik } from 'formik'
import CustomInput from '../components/CustomInput'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {

    const initialValues = {
        email: "",
        password: ""
    }

    const { user } = useContext(UserContext)
    const navigate = useNavigate()

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

        if (user) {
            if (values.email !== user.email) {
                errors.email = 'Email not found'
            }
            if (values.password !== user.password) {
                errors.password = 'Incorrect password'
            }
        }

        return errors
    }

    const onSubmit = () => {
        navigate("/")
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Form>
                <CustomInput type="email" label="Email" name="email" />
                <CustomInput type="password" label="Password" name="password" />
                <button
                    type='submit'
                    className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer'
                >
                    Login
                </button>
            </Form>
        </Formik>
    )
}