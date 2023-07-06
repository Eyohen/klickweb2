import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Register from "./scenes/Register"
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
//import DashboardLayout from "./DashboardLayout";
import CreateStore from "./scenes/CreateStore";
import Verify from "./scenes/Verify";
import ViewMyStore from "./scenes/ViewMyStore";
import StoreAddress from "./scenes/StoreAddress";
import StorebankDetails from "./scenes/StorebankDetails";
import AddProduct from "./scenes/AddProducts";
import BusinessLogo from "./scenes/BusinessLogo";





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
				<Route path="/viewmystore" element={<ViewMyStore />} />
				<Route path="/storeaddress" element={<StoreAddress />} />
				<Route path="/storebankdetails" element={<StorebankDetails />} />
				<Route path="/businesslogo" element={<BusinessLogo />} />
				<Route path="/addproduct" element={<AddProduct />} />
				<Route path="/dashboard/store/create" element={<CreateStore />} />
				
			</Routes>
	
		</BrowserRouter>
	
	)
}