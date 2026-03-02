import TicketDetails from "../components/ticket-details/TicketDetails";
import ActionButton from "../components/ui/ActionButton";
import Header from "../components/ui/Header";
import PageHeader from "../components/ui/PageHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTicket, updateTicket } from "../services/ticket.services";
import { Ticket as TicketType } from "../types/ticket.types";
import Comments from "../components/ticket-details/Comments";
import { useUserContext } from "../hooks/useUserContext";
import { getSupportAgents } from "../services/auth.service";
import { assignTicket } from "../services/ticket.services";
import toast from "react-hot-toast";

const Ticket: React.FC = () => {
  const { user } = useUserContext(); // Get current user
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [agents, setAgents] = useState<any[]>([]); // To store agent list
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const { id } = useParams();

useEffect(() => {
    const fetchTicket = async () => {
       const response = await getSingleTicket(id!);
       setTicket(response);
    };
    
    const fetchAgents = async () => {
      if (user?.role === "SUPPORT_AGENT") {
        const res = await getSupportAgents();
        setAgents(res.data.data);
      }
    };

    fetchTicket();
    fetchAgents();
  }, [id, user]);

  const handleAssign = async () => {
    if (!selectedAgentId) return toast.error("Please select an agent");
    try {
      await assignTicket(id!, user!.id, selectedAgentId);
      toast.success("Ticket assigned successfully!");
    } catch (error) {
      console.error("Assignment failed", error);
    }
  };

  const handleCloseTicket = async () => {
    try {
      await updateTicket(id!, { status: "CLOSED" });
      setTicket(prev => prev ? { ...prev, status: "CLOSED" } : prev);
    } catch (error) {
      console.error(error);
    }
  };

  const isClosed = ticket?.status === "CLOSED";
  const isAgent = user?.role === "SUPPORT_AGENT";

  return (
    <div>
      <Header />
      <div className="mx-auto container py-4">
        <PageHeader
          title="Ticket Details"
          primaryAction={!isClosed && <ActionButton title="Close Ticket" action={handleCloseTicket} type="primary" />}

          secondaryAction={!isClosed && isAgent && (
            <div className="flex gap-2 items-center border p-2 rounded bg-gray-50 pr-5">
              <select
                className="p-1 border rounded text-sm"
                value={selectedAgentId}
                onChange={(e) => setSelectedAgentId(e.target.value)}
              >
                <option value="">Select Agent</option>
                {
                  agents
                  .filter(agent => agent.id !== user?.id)
                  .map(agent => (
                    <option key={agent.id} value={agent.id}>{agent.email}</option>
                ))}
              </select>
              <button 
                onClick={handleAssign}
                className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-teal-700 cursor-pointer"
              >
                Assign
              </button>
            </div>
          )}
        />
        <TicketDetails ticket={ticket} />
        <Comments ticketStatus={ticket?.status}/>
      </div>
    </div>
  );
};

export default Ticket;