export type CreateTicketFormValues = {
    title: string;
    description: string;
};

export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    agentName: string;
}

export interface TicketContextType {
    tickets: Ticket[];
    loading: boolean;
    fetchTickets: () => void;
}