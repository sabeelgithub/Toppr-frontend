import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex w-full md:overflow-x-hidden overflow-x-scroll no-scrollbar h-full">
                <Sidebar />
                <div className="grow">
                    <Navbar />
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Layout;
