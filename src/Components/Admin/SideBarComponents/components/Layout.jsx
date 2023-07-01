import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex w-full md:overflow-x-hidden overflow-x-scroll no-scrollbar h-full">
                <Sidebar />
                <div className="grow bg-stone-900">
                    <Navbar />
                    <div className="bg-stone-900">{children}</div>
                </div>
            </div>
        </>
    );
};

export default Layout;
