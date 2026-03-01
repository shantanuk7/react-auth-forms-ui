import TicketDetails from "../components/ticket-details/TicketDetails";
import ActionButton from "../components/ui/ActionButton";
import Header from "../components/ui/Header";
import PageHeader from "../components/ui/PageHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTicket, updateTicket } from "../services/ticket.services";
import { Ticket as TicketType } from "../types/ticket.types";
import Comments from "../components/ticket-details/Comments";

const Ticket: React.FC = () => {
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await getSingleTicket(id!);
        setTicket(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTicket();
  }, [id]);

  const handleCloseTicket = async () => {
    try {
      await updateTicket(id!, { status: "CLOSED" });
      setTicket(prev => prev ? { ...prev, status: "CLOSED" } : prev);
    } catch (error) {
      console.error(error);
    }
  };

  const isClosed = ticket?.status === "CLOSED";

  return (
    <div>
      <Header />
      <div className="mx-auto container py-4">
        <PageHeader
          title="Ticket Details"
          primaryAction={!isClosed && <ActionButton title="Close Ticket" action={handleCloseTicket} type="primary" />}
        />
        <TicketDetails ticket={ticket} />
        <Comments ticketStatus={ticket?.status}/>
      </div>
    </div>
  );
};

export default Ticket;