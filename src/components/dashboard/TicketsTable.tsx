import TicketsTableItem from "./TicketsTableItem";

const mockTickets = [
    { id: 1, title: 'Issue with login', status: 'Open', createdAt: '01-01-2026' },
    { id: 2, title: 'Payment not processing', status: 'In Progress', createdAt: '01-01-2026' },
    { id: 3, title: 'Error on dashboard', status: 'Closed', createdAt: '01-01-2026' },
];

const headers = [
    { id: 'id', label: 'ID' },
    { id: 'title', label: 'Title' },
    { id: 'status', label: 'Status' },
    { id: 'createdAt', label: 'Created At' },
];

const TicketsTable: React.FC= () => {
    return <div>
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr>
                    {headers.map(header => <th key={header.id} className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">{header.label}</th>)}
                    <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
            </thead>
            <tbody>
                {mockTickets.map((ticket, index) => <TicketsTableItem key={ticket.id} index={index + 1} id={ticket.id} title={ticket.title} status={ticket.status} createdAt={ticket.createdAt}/>)}

            </tbody>
        </table>
    </div>
}

export default TicketsTable;