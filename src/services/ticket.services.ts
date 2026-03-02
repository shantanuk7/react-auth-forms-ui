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

export const createTicket = async (values: CreateTicketFormValues) => {
    return api.post("/tickets", values);
};

export const getTickets = async () => {
    const response: AxiosResponse<getTicketsResponse> = await api.get("/tickets");

    return response.data;
};

export const getSingleTicket = async (ticketId: string) => {
    const response: AxiosResponse<getSingleTicketResponse> = await api.get(`/tickets/${ticketId}`);

    return response.data.data;
};

export const updateTicket = async (ticketId: string, payload: UpdateTicketPayload) => {
    const response: AxiosResponse = await api.patch(`/tickets/${ticketId}`, payload);
    return response.data.data;
};

export const getComments = async (ticketId: string) => {
    const response: AxiosResponse = await api.get(`/tickets/${ticketId}/comments`);
    return response.data.data;
};

export const addComment = async (ticketId: string, comment: string) => {
    const response: AxiosResponse = await api.post(`/tickets/${ticketId}/comments`, { body: comment });
    return response.data.data;
};

export const assignTicket = async (ticketId: string, assignedBy: string, assignedTo: string) => 
  await api.post(`/tickets/${ticketId}/assign`, {
    assignedByUserId: assignedBy,
    assignedToUserId: assignedTo
  });