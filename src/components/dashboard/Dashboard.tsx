import { useNavigate } from "react-router-dom";
import ActionButton from "../ui/ActionButton";
import PageHeader from "../ui/PageHeader";
import TicketsTable from "./TicketsTable";
import { useUserContext } from "../../hooks/useUserContext";

const Dashboard: React.FC= () => {

    const navigate = useNavigate();

    const handleCreateTicket = () => {
        navigate("/tickets/create");
    }

    const { user } = useUserContext();

    return <div className="mx-auto container py-4">
        <PageHeader title="My Tickets" primaryAction={user?.role !== "SUPPORT_AGENT" && <ActionButton title="Create Ticket" action={handleCreateTicket} type="primary" />} />
        <TicketsTable/>
    </div>
}

export default Dashboard;