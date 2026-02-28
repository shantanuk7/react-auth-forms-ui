import { FormikErrors } from "formik";
import { CreateTicketFormValues } from "../types/ticket.types";

export const validateCreateTicket = (
    values: CreateTicketFormValues
): FormikErrors<CreateTicketFormValues> => {
    const errors: FormikErrors<CreateTicketFormValues> = {};

    const maxTitleLength = 100;
    const minTitleLength = 1;
    const maxDescriptionLength = 1000;
    const minDescriptionLength = 1;

    if (!values.title) {
        errors.title = "Required";
    } else if (values.title.length > maxTitleLength) {
        errors.title = `Title must be less than ${maxTitleLength} characters`;
    } else if (values.title.length < minTitleLength) {
        errors.title = `Title must be greater than ${minTitleLength} character`;
    }

    if (!values.description) {
        errors.description = "Required";
    } else if (values.description.length > maxDescriptionLength) {
        errors.description = `Description must be less than ${maxDescriptionLength} characters`;
    } else if (values.description.length < minDescriptionLength) {
        errors.description = `Description must be greater than ${minDescriptionLength} character`;
    }

    return errors;
};