import useTickets from "../../hooks/useTickets";
import TicketsTableItem from "./TicketsTableItem";

const headers = [
    { id: 'id', label: 'ID' },
    { id: 'title', label: 'Title' },
    { id: 'status', label: 'Status' },
    { id: 'createdAt', label: 'Created At' },
];

const TicketsTable: React.FC = () => {
    const { tickets, loading } = useTickets();

    if (loading) return <p>Loading...</p>;

    if (tickets.length === 0) return <p>No tickets found.</p>;

    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header.id} className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                {header.label}
                            </th>
                        ))}
                        <th className="py-2 px-4 border-b text-left border-gray-200 text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
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