import CreateTicketForm from "../components/CreateTicketForm";
import Form from "../components/Form";

const CreateTicket: React.FC = () => {
  return (
    <Form formTitle="Create Ticket">
      <CreateTicketForm/>
    </Form>
  )
}

export default CreateTicket;