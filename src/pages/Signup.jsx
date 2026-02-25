import { Form, Formik, } from 'formik'
import CustomInput from '../components/CustomInput'
import signUpValidationSchema from '../schemas/signup-validation-schema';

export default function Signup() {

  const initialValues = {
    email: "",
    password: "",
  }

  const onSubmit = values => { console.log('form data', values) }
  return (
    <div className='w-96 mx-auto bg-gray-50 p-8 rounded-2xl shadow-2xs'>
        <Formik initialValues={initialValues} validationSchema={signUpValidationSchema} onSubmit={onSubmit} >
            <Form>
                <CustomInput type="name" label="Name" name="name" />
                <CustomInput type="email" label="Email" name="email" />
                <CustomInput type="password" label="Password" name="password" />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}