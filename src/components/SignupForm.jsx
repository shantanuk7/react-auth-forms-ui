import { Form, Formik, } from 'formik'
import CustomInput from '../components/CustomInput'
import signUpValidationSchema from '../schemas/signup-validation-schema';

export default function SignupForm() {

  const initialValues = {
    username:"",
    email: "",
    password: "",
    confirmPassword:""
  }

  const onSubmit = values => { console.log('form data', values) }
  return (
        <Formik initialValues={initialValues} validationSchema={signUpValidationSchema} onSubmit={onSubmit} validateOnBlur={false}>
            <Form>
                <CustomInput type="name" label="Name" name="name" />
                <CustomInput type="email" label="Email" name="email" />
                <CustomInput type="password" label="Password" name="password" />
                <CustomInput type="password" label="Confirm Password" name="confirmPassword" />
                <button type='submit' className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer'>Submit</button>
            </Form>
        </Formik>
    )
}