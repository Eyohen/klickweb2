import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Register from "./scenes/Register"
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
//import DashboardLayout from "./DashboardLayout";
import CreateStore from "./scenes/CreateStore";
import Verify from "./scenes/Verify";



export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				
				<Route element={<Layout/>}>
					<Route path="/" element={<HomePage />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				
					
				<Route path="/verify" element={<Verify />} />
				<Route path="/dashboard/store/create" element={<CreateStore />} />
				
			</Routes>
	
		</BrowserRouter>
	
	)
}