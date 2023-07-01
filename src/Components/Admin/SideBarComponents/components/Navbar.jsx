import React from "react";


const Navbar = () => {
    return (
        <nav className="bg-black border-gray-200  w-full px-2 py-5 rounded dark:bg-gray-800">
            <div className="container flex justify-between items-center mx-auto pt-3">
                <div className="flex items-center mx-auto">
                    <span className="text-xl font-medium whitespace-nowrap text-white">Welcome Admin</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
