import CreateTicketForm from "../components/forms/CreateTicketForm";
import Form from "../components/forms/Form";

const CreateTicket: React.FC = () => {
  return (
    <Form formTitle="Create Ticket">
      <CreateTicketForm/>
    </Form>
  )
}

export default CreateTicket;