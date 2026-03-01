interface PageHeaderProps {
    title: string;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, primaryAction, secondaryAction}: PageHeaderProps) => {
    return <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <div className="flex gap-2">
                {secondaryAction && <div>{secondaryAction}</div>}
                {primaryAction && <div>{primaryAction}</div>}
            </div>
        </div>
    </div>
}

export default PageHeader;