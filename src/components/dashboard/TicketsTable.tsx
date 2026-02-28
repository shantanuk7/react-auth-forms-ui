import useTickets from "../../hooks/useTickets";
import TicketsTableItem from "./TicketsTableItem";

const headers = [
    { id: 'id', label: 'ID' },
    { id: 'title', label: 'Title' },
    { id: 'status', label: 'Status' },
    { id: 'createdAt', label: 'Created At' },
    { id: 'action', label: 'Action' },
];
const TicketsTable: React.FC = () => {
    const { tickets, loading } = useTickets();

    if (loading) return <div className="text-center py-8 text-gray-500">Loading...</div>;

    if (!tickets.length) return <div className="text-center py-8 text-gray-500">No tickets found.</div>;

    return (
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map(header => (
                            <th key={header.id} className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {tickets.map((ticket, index) => (
                        <TicketsTableItem
                            key={ticket.id}
                            index={index + 1}
                            id={ticket.id}
                            title={ticket.title}
                            status={ticket.status}
                            createdAt={(ticket.createdAt).slice(0,10)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketsTable;