import { useEffect } from "react";
import CreateTicketForm from "../components/forms/CreateTicketForm";
import Form from "../components/forms/Form";
import Header from "../components/ui/Header";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

const CreateTicket: React.FC = () => {

  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(user);
    
    if(user?.role === "SUPPORT_AGENT") {
      navigate("/")
    }
  });

  return (<div>
    <Header/>
    <Form formTitle="Create Ticket">
      <CreateTicketForm/>
    </Form>

  </div>
  )
}

export default CreateTicket;