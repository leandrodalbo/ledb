
interface CardItemProps {
    title: string;
    text: string;
    icon: string
}


const HomeItem = ({ title, text, icon }: CardItemProps) => {
    return (
        <div className="w-72 h-72 max-w-xs rounded-md overflow-hidden shadow-lg bg-lightBg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 rounded-md">
                    <img src={icon} alt={title} className="w-16 h-16" />
                </div>
                <h2 className="text-md text-center hover:text-junglePink font-semibold text-jungleGreen mb-2">{title}</h2>
                <p className="text-sm text-center text-darkerText text-base text-center">{text}</p>
            </div>
        </div>
    );
};

export default HomeItem;
