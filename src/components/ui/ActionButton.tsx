interface ActionButtonProps {
    title: string;
    action?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({title, action}: ActionButtonProps) => {
    return <button className="border border-teal-700 p-2 rounded-sm text-sm text-teal-700 hover:bg-teal-700 hover:text-white cursor-pointer" onClick={action}>
        {title}
    </button>
}

export default ActionButton;