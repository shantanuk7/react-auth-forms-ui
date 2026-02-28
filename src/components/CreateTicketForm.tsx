import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { CreateTicketFormValues } from "../types/ticket.types";
import { validateCreateTicket } from "../utils/ticket.validations";
import { createTicket } from "../services/ticket.services";

const CreateTicketForm: React.FC = () => {
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] =
        useState(false);

    const initialValues: CreateTicketFormValues = {
        title: "",
        description: "",
    };

    const onSubmit = async (
        values: CreateTicketFormValues,
        { resetForm }: FormikHelpers<CreateTicketFormValues>
    ) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) return;

            const response = await createTicket(values, token);

            if (response.status === 201) {
                setIsSubmittedSuccessfully(true);
                resetForm();
            }
        } catch (error) {
            console.error("Error submitting the form data:", error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validateCreateTicket}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ isSubmitting }) => (
                <Form>
                    <CustomInput
                        type="text"
                        label="Title"
                        name="title"
                    />
                    <CustomInput
                        type="textarea"
                        label="Description"
                        name="description"
                    />
                    <button
                        type="submit"
                        className="bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                    {isSubmittedSuccessfully && (
                        <p className="text-green-600 mt-2 text-center">
                            Ticket created successfully!
                        </p>
                    )}
                </Form>
            )}
        </Formik>
    );
}

export default CreateTicketForm;