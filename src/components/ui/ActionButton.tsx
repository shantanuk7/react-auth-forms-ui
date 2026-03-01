interface ActionButtonProps {
    title: string;
    type: "primary" | "secondary";
    action: () => void;
}

const styles = {
    primary: "bg-teal-700 text-white text-sm p-2 rounded-sm cursor-pointer hover:bg-teal-800",
    secondary: "border border-teal-700 text-teal-700 text-sm p-2 rounded-sm cursor-pointer hover:bg-teal-50",
};

const ActionButton: React.FC<ActionButtonProps> = ({ title, type, action }) => {
    return (
        <button className={styles[type]} onClick={action}>
            {title}
        </button>
    );
};

export default ActionButton;