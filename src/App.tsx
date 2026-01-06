import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Admin from "@/pages/Admin";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Checkout from "@/pages/Checkout";
import MyOrders from "./pages/MyOrders";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Returns from "@/pages/Returns";
import Shipping from "@/pages/Shipping";
import Careers from "@/pages/Careers";
import Sustainability from "@/pages/Sustainability";
import NewArrivals from "@/pages/NewArrivals";
import Sale from "@/pages/Sale";
import ScrollToTop from "@/components/ScrollToTop";
import ForgotPassword from "@/pages/ForgotPassword";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <AuthProvider>
  <CartProvider>
    <BrowserRouter>

        <Toaster />
        <Sonner />
         <ScrollToTop />  
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/returns" element={<Returns />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/careers" element={<Careers />} />
<Route path="/sustainability" element={<Sustainability />} />
<Route path="/new-arrivals" element={<NewArrivals />} />
<Route path="/sale" element={<Sale />} />
<Route path="/forgot-password" element={<ForgotPassword />} />



            <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-orders"
  element={
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  }
/>


          </Routes>
          </BrowserRouter>
  </CartProvider>
</AuthProvider>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
