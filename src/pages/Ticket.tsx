import Form from "../components/forms/Form";
import TicketDetails from "../components/TicketDetails";
import ActionButton from "../components/ui/ActionButton";
import Header from "../components/ui/Header";
import PageHeader from "../components/ui/PageHeader";

const Ticket: React.FC = () => {

  const handleEditDescription = ()=>{
    alert("click")
  }

  const handleCloseTicket = ()=>{
    alert("click")
  }

  return (<div>
      <Header/>
      <div className="mx-auto container py-4">
        <PageHeader
          title="Ticket Details"
          primaryAction={<ActionButton title="Close Ticket" action={handleEditDescription} type="primary"/>}
          secondaryAction={<ActionButton title="Edit Description" action={handleCloseTicket} type="secondary"/>}
        />

        <TicketDetails/>
      </div>
    </div>
  )
}

export default Ticket;