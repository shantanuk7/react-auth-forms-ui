interface PageHeaderProps {
    title: string;
    action?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, action}: PageHeaderProps) => {
    return <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            {action && <div>{action}</div>}
        </div>
    </div>
}

export default PageHeader;