import HomePage from "./scenes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "./scenes/Register";
import Login from "./scenes/Login";
import Dashboard from "./scenes/Dashboard";
import CreateStore from "./scenes/CreateStore";
import Verify from "./scenes/Verify";
import ViewMyStore from "./scenes/ViewMyStore";
import StoreAddress from "./scenes/StoreAddress";
import StorebankDetails from "./scenes/StorebankDetails";
import AddProducts from "./scenes/AddProducts";
import BusinessLogo from "./scenes/BusinessLogo";
import SocialMediaLinks from "./scenes/SocialMediaLinks";
import StoreProfile from "./scenes/StoreProfile";
import ProductDetails from "./scenes/ProductDetails.jsx";
import CheckOut from "./scenes/CheckOut.jsx";
import Orders from "./scenes/Orders";
import OrderDetails from "./scenes/OrderDetails";
import { CartProvider } from "./contexts/CartContext";
import CartHenry from "./scenes/CartHenry";
import RequireAuth from "./RequireAuth";
import Messages from "./scenes/Messages";
import SearchPage from "./components/SearchPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentSuccess from "./scenes/PaymentSuccess";
import SocialPage from "./scenes/SocialPage";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

export default function App() {
  const token = localStorage.getItem('access_token');
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartHenry />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<RequireAuth isAuthenticated={token ? true : false} />}>
          </Route>

          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/viewmystore" element={<ViewMyStore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />

          <Route path="/storeaddress" element={<StoreAddress />} />
          <Route path="/storebankdetails" element={<StorebankDetails />} />
          <Route path="/businesslogo" element={<BusinessLogo />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/socialmedialink" element={<SocialMediaLinks />} />
          <Route path="/dashboard/store/create" element={<CreateStore />} />
          <Route path="/store" element={<StoreProfile />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/viewmystore" element={<ViewMyStore />} />
          <Route path="/storeaddress" element={<StoreAddress />} />
          <Route path="/storebankdetails" element={<StorebankDetails />} />
          <Route path="/businesslogo" element={<BusinessLogo />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/socialmedialink" element={<SocialMediaLinks />} />
          <Route path="/dashboard/store/create" element={<CreateStore />} />
          <Route path="/store/:id" element={<StoreProfile />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderdetails/:id" element={<OrderDetails />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/socialpage" element={<SocialPage />} />
       
        </Routes>
      </CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
