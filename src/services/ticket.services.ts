import { AxiosResponse } from "axios";
import api from "../lib/axios";
import { CreateTicketFormValues, Ticket } from "../types/ticket.types";

interface getTicketsResponse {
    success: boolean,
    message: string,
    data: Ticket[]
}

interface getSingleTicketResponse {
    success: boolean,
    message: string,
    data: Ticket
}

interface UpdateTicketPayload {
    description?: string;
    status?: string;
}

export const createTicket = async (values: CreateTicketFormValues, token: string ) => {
    return api.post("/tickets", values);
};

export const getTickets = async (token: string) => {
    const response: AxiosResponse<getTicketsResponse> = await api.get("/tickets");

    return response.data;
};

export const getSingleTicket = async (token: string, ticketId: string) => {
    const response: AxiosResponse<getSingleTicketResponse> = await api.get(`/tickets/${ticketId}`);

    return response.data.data;
};

export const updateTicket = async (token: string, ticketId: string, payload: UpdateTicketPayload) => {
    const response: AxiosResponse = await api.patch(`/tickets/${ticketId}`, payload);
    return response.data.data;
};

export const getComments = async (token: string, ticketId: string) => {
    const response: AxiosResponse = await api.get(`/tickets/${ticketId}/comments`);
    return response.data.data;
};

export const addComment = async (token: string, ticketId: string, comment: string) => {
    const response: AxiosResponse = await api.post(`/tickets/${ticketId}/comments`, { body: comment });
    return response.data.data;
};