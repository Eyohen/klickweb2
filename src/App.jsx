import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./scenes/HomePage";

export default function App() {
	return (
		<main>
			<Navbar />
			<Sidebar />
			<HomePage />
		</main>
	)
}