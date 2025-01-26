const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full shadow-lg z-10 bg-darkBg text-jungleGreen py-4 px-6 flex justify-between items-center">
            <a href="#home"><p className="text-xl font-bold text-junglePink">Jungle-Logic Lab</p></a>

            <ul className="flex justify-center space-x-8 py-4">
                <li className="hover:text-junglePink"><a href="#home">Home</a></li>
                <li className="hover:text-junglePink"><a href="#packages">Packages</a></li>
                <li className="hover:text-junglePink"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
