import React from 'react';
import { TicketContextType } from '../types/ticket.types';

const TicketContext = React.createContext<TicketContextType | null>(null);

export default TicketContext;