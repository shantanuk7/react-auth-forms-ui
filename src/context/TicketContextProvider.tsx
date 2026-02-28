import { useEffect, useState } from "react";
import { Ticket } from "../types/ticket.types";
import { getTickets } from "../services/ticket.services";
import TicketContext from "./TicketContext";

const TicketContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTickets = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token")!;
            const response = await getTickets(token);
            setTickets(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchTickets();
    }, [])

    return (
        <TicketContext.Provider value={{ tickets, loading, fetchTickets }}>
            {children}
        </TicketContext.Provider>
    )
}

export default TicketContextProvider;