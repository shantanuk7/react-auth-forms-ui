import CreateTicketForm from "../components/forms/CreateTicketForm";
import Form from "../components/forms/Form";
import Header from "../components/ui/Header";

const CreateTicket: React.FC = () => {
  return (<div>
    <Header/>
    <Form formTitle="Create Ticket">
      <CreateTicketForm/>
    </Form>

  </div>
  )
}

export default CreateTicket;