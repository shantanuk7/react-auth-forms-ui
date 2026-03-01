import { useEffect, useState } from "react";
import { Ticket } from "../types/ticket.types";
import { getTickets } from "../services/ticket.services";
import TicketContext from "./TicketContext";

const TicketContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchTickets = async () => {
        setLoading(true);
        try {
            const response = await getTickets();
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