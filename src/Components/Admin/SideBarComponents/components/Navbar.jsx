import React from "react";
import { useNavigate } from "react-router-dom";
import { AdminLogout } from "../../../../Redux/AdminSlice";
import { useDispatch } from "react-redux";


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(AdminLogout())
        navigate("/login");
        localStorage.setItem('page', 1)


    };
    return (
        <nav className="bg-black border-gray-200  w-full px-2 py-5 rounded dark:bg-gray-800">
            <div className="container flex justify-between items-center mx-auto pt-3">
                <div className="flex items-center mx-auto">
                    <span className="text-xl font-medium whitespace-nowrap text-white">Welcome Admin</span>
                </div>
                <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-white py-2 px-3 mr-3 rounded-md bg-yellow-400 hover:bg-yellow-500 md:hidden">
                Log out
              </button>

            </div>
        </nav>
    );
};

export default Navbar;
