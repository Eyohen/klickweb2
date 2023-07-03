import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Register from "./scenes/Register"
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
import DashboardLayout from "./DashboardLayout";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
				</Route>
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}