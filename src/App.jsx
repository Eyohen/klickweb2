import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./scenes/HomePage";

export default function App() {
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
				{sidebarOpen && <Sidebar handleSidebarToggle={handleSidebarToggle}/>}
				<HomePage />
			</div>
		</main>
	)
}