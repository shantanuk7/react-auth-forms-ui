import api from "../lib/axios";
import { CreateTicketFormValues } from "../types/ticket.types";

export const createTicket = async (values: CreateTicketFormValues, token: string ) => {
    return api.post("/tickets", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};