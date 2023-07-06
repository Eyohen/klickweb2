import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Register from "./scenes/Register"
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
//import DashboardLayout from "./DashboardLayout";
import CreateStore from "./scenes/CreateStore";
import Verify from "./scenes/Verify";
import { LoginProvider } from './LoginContext';
import { useState } from "react";



export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<BrowserRouter>
	<LoginProvider>
			<Routes>
				
				<Route element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}>
					<Route path="/" element={<HomePage />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
				
					
				<Route path="/verify" element={<Verify />} />
				<Route path="/dashboard/store/create" element={<CreateStore />} />
				
			</Routes></LoginProvider>
	
		</BrowserRouter>
	
	)
}