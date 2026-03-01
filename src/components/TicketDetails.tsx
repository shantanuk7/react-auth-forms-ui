import { useEffect, useState } from "react";
import { getSingleTicket } from "../services/ticket.services";
import { useParams } from "react-router-dom";
import { Ticket } from "../types/ticket.types";

const TicketDetails: React.FC = () => {

    const [ticket, setTicket] = useState<Ticket | null>(null);

    const params = useParams();
    const ticketId = params.id!;

    useEffect(()=>{
        const token = localStorage.getItem("token")!;
        const fetchTicket = async () =>{
            try {
                const response = await getSingleTicket(token, ticketId);
                console.log(response);
                setTicket(response);
            } catch (error) {
                console.error(error)
            }
        };

        fetchTicket()
    }, []);

    return (
        <div className="bg-white border border-gray-300 rounded-md">
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Title</p>
                <p className="text-sm text-gray-800 font-medium">{ticket?.title}</p>
            </div>
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Description</p>
                <p className="text-sm text-gray-700">{ticket?.description}</p>
            </div>
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Created At</p>
                <p className="text-sm text-gray-700">{ticket && (ticket.createdAt).slice(0,10)}</p>
            </div>
            <div className="py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Assigned To Agent:</p>
                <p className="text-sm text-gray-700">{ticket?.agentName}</p>
            </div>
        </div>
    );
};

export default TicketDetails;