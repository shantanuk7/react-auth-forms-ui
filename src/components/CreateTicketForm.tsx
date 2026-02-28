import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { CreateTicketFormValues } from "../types/ticket.types";
import { validateCreateTicket } from "../utils/ticket.validations";
import { createTicket } from "../services/ticket.services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const CreateTicketForm: React.FC = () => {

    const initialValues: CreateTicketFormValues = {
        title: "",
        description: "",
    };

    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/");
    };

    const onSubmit = async (
        values: CreateTicketFormValues,
        { resetForm }: FormikHelpers<CreateTicketFormValues>
    ) => {
        try {
            const token = localStorage.getItem("token")!;
            
            const response = await createTicket(values, token);

            if (response.status === 201) {
                toast.success("Ticket created successfully!");
                resetForm();
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error("Failed to create ticket.");
            }
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
                        className="bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer hover:bg-amber-300"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={goToHomepage}
                        className="border border-gray-300 p-2 rounded-md mt-2 flex-1 hover:bg-white cursor-pointer w-full"
                    >
                        Go Back
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default CreateTicketForm;