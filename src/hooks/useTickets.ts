import { useContext } from "react"
import TicketContext from "../context/TicketContext"

const useTickets = ()=>{
    const context = useContext(TicketContext);
    if (!context) throw new Error("useTickets must be used inside TicketsContextProvider");
    return context;
}

export default useTickets;