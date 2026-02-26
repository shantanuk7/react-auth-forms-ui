import { ErrorMessage, Form, Formik} from 'formik'
import CustomInput from '../components/CustomInput'
import axios from 'axios';
import { useState } from 'react';

export default function CreateTicketForm() {

    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

    const initialValues = {
        title: "",
        description: "",
    }

    const validate = (values) => {
        const errors = {};
        const maxTitleLength = 100;
        const minTitleLength = 1;
        const maxDescriptionLength = 1000;
        const minDescriptionLength = 1;

        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length > maxTitleLength) {
            errors.title = `Title must be less than ${maxTitleLength} characters`;
        } else if (values.title.length < minTitleLength){
            errors.title = `Title must be greater than ${minTitleLength} character`
        }

        if (!values.description) {
            errors.description = 'Required';
        } else if (values.description.length > maxDescriptionLength) {
            errors.description = `Description must be less than ${maxDescriptionLength} characters`;
        } else if (values.description.length < minDescriptionLength){
            errors.description = `Description must be greater than ${minDescriptionLength} character`
        }

        return errors;
    };

    const onSubmit = async (values, {resetForm}) => {
        try {
            const token = localStorage.getItem("token");
            
            const request = {
                method: 'POST',
                url: `${import.meta.env.VITE_API_URL}/tickets`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: values
            }
            const response = await axios(request);
            
            if(response.status === 201) {
                setIsSubmittedSuccessfully(true);
                resetForm();
            }
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
                <CustomInput type="text" label="Title" name="title" />
                <CustomInput type="textarea" label="Description" name="description" />
                <button type='submit' className='bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer' disabled={isSubmitting}>Submit</button>
                {isSubmittedSuccessfully && <p className='text-green-600 mt-2 text-center'>Ticket created successfully!</p>}
            </Form>)}
        </Formik>
    )
}