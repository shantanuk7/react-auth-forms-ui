import { Link } from "react-router-dom";

interface TicketsTableItemProps {
    index: number;
    id: number;
    title: string;
    status: string;
    createdAt: string;
}

const TicketsTableItem: React.FC<TicketsTableItemProps> = ({index, id, title, status, createdAt}) => {
    return <tr className="text-sm hover:bg-teal-50 border-b border-gray-400">
            <td className="py-2 px-4">{index}</td>
            <td className="py-2 px-4">{title}</td>
            <td className="py-2 px-4">{status}</td>
            <td className="py-2 px-4">{createdAt}</td>
            <td className="py-2 px-4">
                <Link to={`/tickets/${id}`} className="text-blue-500 hover:text-blue-700 cursor-pointer">View</Link>
            </td>
        </tr>
}

export default TicketsTableItem;