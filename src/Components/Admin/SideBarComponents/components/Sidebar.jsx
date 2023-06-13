import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsBorderWidth, BsChatDotsFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BiFootball } from "react-icons/bi";
import { MdAnalytics, MdAdminPanelSettings, MdPhotoLibrary,  } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import HamburgerButton from "../HamburgerMenuButton/HamburgerButton";
import { FaCity } from "react-icons/fa";
import icon from "../../../../Assets/ICON.jpg"
import { useDispatch } from "react-redux";
import { AdminLogout } from "../../../../Redux/AdminSlice";

const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const [open, setOpen] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    const Menus = [
        { title: "Dashboard", path: "/admin/dashboard", src: <MdAnalytics /> },
        { title: "clients", path: "/admin/clients", src: <HiUsers /> },
        {
            title: "Notification",
            path: "/admin/notifications",
            src: <IoIosNotifications />,
        },
        { title: "Experts",  path:"/admin/experts", src: <HiUsers /> },
        { title: "Domains", path: "/admin/domains", src: <BsBorderWidth /> },
        { title: "Tutorial", path: "/admin/tutorials", src: <BsBorderWidth /> },
        { title: "Sub-Tutorial", path: "/admin/sub-tutorials", src: <BsBorderWidth /> },
       
        
        {
            title: "Domain Purchase",
            path: "/admin/domain-purchase",
            src: <MdAdminPanelSettings />,
        },
       
        { title: "Bookings", path: "", src: <BsBorderWidth /> },
       
        { title: "Add City", path: "", src: <FaCity /> },
        { title: "Banner", path: "", src: <MdPhotoLibrary /> },
    ];
    const handleLogout = () => {
        navigate("/login");
        dispatch(AdminLogout())

     
    };

    return (
        <>
            <div
                className={`${
                    open ? "w-60" : "w-fit"
                } hidden sm:block relative min-h-max duration-300 bg-gray-800 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && "rotate-180"
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to="">
                    <div className={`flex ${open && "gap-x-4"} items-center`}>
                        <img src={icon} alt="" className="w-12 h-12 text-red-700" />
                        {open && <span className="text-xl font-admin whitespace-nowrap text-white">Toppr</span>}
                    </div>
                </Link>

                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700"}`}
                            >
                                <span className="text-2xl text-sky-400">{menu.src}</span>
                                <span className={`${!open && "hidden"} origin-left duration-300 hover:block text-red-600`}>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}

                    <li
                        className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700  'bg-gray-200 dark:bg-gray-700' }`}
                        onClick={handleLogout}>
                        <span className="text-2xl text-white">
                            <MdLogout />
                        </span>
                        <span className={`${!open && "hidden"} text-white origin-left duration-300 hover:block`}>Logout</span>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            <div className="pt-3">
                <HamburgerButton  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
            </div>
            <div className="sm:hidden">
                <div
                    className={`${
                        mobileMenu ? "flex" : "hidden"
                    } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
                >
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index} onClick={() => setMobileMenu(false)}>
                            <span
                                className={` ${
                                    location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700"
                                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                            >
                                {menu.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
