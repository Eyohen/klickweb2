import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Register from "./scenes/Register"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
				</Route>
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	)
}