import { Ticket } from "../types/ticket.types";

interface Props {
    ticket: Ticket | null;
}

const TicketDetails: React.FC<Props> = ({ ticket }) => {
    if (!ticket) return <p>Loading...</p>;

    return (
        <div className="bg-white border border-gray-300 rounded-md">
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Title</p>
                <p className="text-sm text-gray-800 font-medium">{ticket.title}</p>
            </div>
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Description</p>
                <p className="text-sm text-gray-700">{ticket.description}</p>
            </div>
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Created At</p>
                <p className="text-sm text-gray-700">
                    {ticket && (ticket.createdAt).slice(0,10)}
                </p>
            </div>
            <div className="border-b border-gray-200 py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Status</p>
                <p className="text-sm text-gray-700">{ticket.status}</p>
            </div>
            <div className="py-3 px-4">
                <p className="text-xs font-semibold text-gray-400 mb-1">Assigned To Agent</p>
                <p className="text-sm text-gray-700">{ticket.agentName}</p>
            </div>
        </div>
    );
};

export default TicketDetails;