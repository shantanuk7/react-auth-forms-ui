import { useNavigate } from "react-router-dom";
import ActionButton from "../ui/ActionButton";
import PageHeader from "../ui/PageHeader";
import TicketsTable from "./TicketsTable";

const Dashboard: React.FC= () => {

    const navigate = useNavigate();

    const handleCreateTicket = () => {
        navigate("/create-ticket");
    }

    return <div className="mx-auto container py-4">
        <PageHeader title="My Tickets" action={<ActionButton title="Create Ticket" action={handleCreateTicket} />} />
        <TicketsTable/>
    </div>
}

export default Dashboard;