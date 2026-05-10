import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Splash from './pages/Splash';
import BuyerHome from './pages/BuyerHome';
import ChooseAccount from './pages/ChooseAccount';
import Cart from './pages/Cart';
import SellerDashboard from './pages/SellerDashboard';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import Chat from './pages/Chat';
import SellerProducts from './pages/SellerProducts';
import SellerWallet from './pages/SellerWallet';
import AdminPanel from './pages/AdminPanel';
import Categories from './pages/Categories';
import StoreProfile from './pages/StoreProfile';
import SellerSettings from './pages/SellerSettings';
import BuyerOrders from './pages/BuyerOrders';
import RegisterSeller from './pages/RegisterSeller';
import Login from './pages/Login';
import SellerOrders from './pages/SellerOrders';
import AIAssistant from './pages/AIAssistant';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import SellerOrderDetails from './pages/SellerOrderDetails';
import AddReview from './pages/AddReview';
import SellerAnalytics from './pages/SellerAnalytics';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-white font-sans selection:bg-neon-blue selection:text-dark">

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/buyer/home" replace />} />
            <Route path="/auth/choose" element={<ChooseAccount />} />
            <Route path="/auth/register/seller" element={<RegisterSeller />} />
            <Route path="/auth/register/buyer" element={<div className="p-10 text-center"><h1 className="text-xl font-bold">تسجيل مشتري جديد</h1><button onClick={() => window.location.hash='#/buyer/home'} className="mt-4 glass p-4 rounded-xl">تخطي</button></div>} />
            <Route path="/login" element={<Login />} />

            <Route path="/buyer/*" element={
              <Routes>
                <Route path="home" element={<BuyerHome />} />
                <Route path="categories" element={<Categories />} />
                <Route path="search" element={<SearchResults />} />
                <Route path="store/:id" element={<StoreProfile />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<BuyerOrders />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-tracking" element={<OrderTracking />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chat" element={<Chat />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="support" element={<Support />} />
                <Route path="review/:id" element={<AddReview />} />
                <Route path="*" element={<Navigate to="home" />} />
              </Routes>
            } />

            <Route path="/seller/*" element={
              <Routes>
                <Route path="dashboard" element={<SellerDashboard />} />
                <Route path="products" element={<SellerProducts />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="orders" element={<SellerOrders />} />
                <Route path="order/:id" element={<SellerOrderDetails />} />
                <Route path="wallet" element={<SellerWallet />} />
                <Route path="profile" element={<SellerSettings />} />
                <Route path="chat" element={<Chat />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="ai-assistant" element={<AIAssistant />} />
                <Route path="analytics" element={<SellerAnalytics />} />
                <Route path="*" element={<Navigate to="dashboard" />} />

              </Routes>
            } />

            <Route path="/admin" element={<AdminPanel />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}

export default App;
