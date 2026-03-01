import TicketDetails from "../components/TicketDetails";
import ActionButton from "../components/ui/ActionButton";
import Header from "../components/ui/Header";
import PageHeader from "../components/ui/PageHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTicket } from "../services/ticket.services";
import { Ticket as TicketType } from "../types/ticket.types";

const Ticket: React.FC = () => {
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const token = localStorage.getItem("token")!;
        const response = await getSingleTicket(token, id!);
        setTicket(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTicket();
  }, [id]);

  const isClosed = ticket?.status === "CLOSED";

  const handleEditDescription = () => alert("click");
  const handleCloseTicket = () => alert("click");

  return (
    <div>
      <Header />
      <div className="mx-auto container py-4">
        <PageHeader
          title={ticket?.title!}
          primaryAction={!isClosed && <ActionButton title="Close Ticket" action={handleCloseTicket} type="primary" />}
          secondaryAction={!isClosed && <ActionButton title="Edit Description" action={handleEditDescription} type="secondary" />}
        />
        <TicketDetails ticket={ticket} />
      </div>
    </div>
  );
};

export default Ticket;