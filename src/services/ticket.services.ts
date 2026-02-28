import { AxiosResponse } from "axios";
import api from "../lib/axios";
import { CreateTicketFormValues, Ticket } from "../types/ticket.types";

interface getTicketsResponse {
    success: boolean,
    message: string,
    data: Ticket[]
}

export const createTicket = async (values: CreateTicketFormValues, token: string ) => {
    return api.post("/tickets", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getTickets = async (token: string) => {
    const response: AxiosResponse<getTicketsResponse> = await api.get("/tickets", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};