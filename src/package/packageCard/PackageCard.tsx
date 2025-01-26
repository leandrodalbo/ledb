interface PackageCardProps {
    title: string;
    content: string;
    icon: string;
    bgColor: string;
    textColor: string;
}

const PackageCard = ({
    title,
    content,
    icon,
    bgColor,
    textColor, }: PackageCardProps) => {
    return (
        <div
            className={`w-72 h-80 rounded-lg shadow-lg p-4 flex flex-col justify-between transition-transform transform hover:scale-105`}
            style={{ backgroundColor: bgColor, color: textColor }}
        >

            <div className="flex justify-center mb-4">
                <img src={icon} alt={title} className="w-12 h-12" />
            </div>

            <h2 className="text-lg font-bold text-center mb-2">{title}</h2>

            <p className="text-sm text-center leading-relaxed">{content}</p>
        </div>
    );
};

export default PackageCard;
