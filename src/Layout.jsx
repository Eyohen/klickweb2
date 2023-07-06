import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"


const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen((prevState) => !prevState);
    };
    return (
        <main>
            <div className="relative">
                <div className={`${sidebarOpen ? 'blur-background blur-active' : ''}`} />
                {/* Render other components */}
                <Navbar handleSidebarToggle={handleSidebarToggle} />
                {sidebarOpen && <Sidebar handleSidebarToggle={handleSidebarToggle} />}
                <Outlet />
                <Footer />
            </div>
        </main>
    )
}

export default Layout