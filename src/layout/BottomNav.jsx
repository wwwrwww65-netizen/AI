import { motion } from 'framer-motion';
import { Home, LayoutGrid, ClipboardList, ShoppingCart, User, PlusCircle, Wallet, Package, PieChart, MessageCircle, Settings, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = ({ type = 'buyer' }) => {
  const buyerLinks = [
    { icon: <Home className="w-5 h-5" />, label: 'الرئيسية', path: '/buyer/home' },
    { icon: <LayoutGrid className="w-5 h-5" />, label: 'التصنيفات', path: '/buyer/categories' },
    { icon: <ShoppingCart className="w-5 h-5" />, label: 'السلة', path: '/buyer/cart' },
    { icon: <ClipboardList className="w-5 h-5" />, label: 'الطلبات', path: '/buyer/orders' },
    { icon: <User className="w-5 h-5" />, label: 'بروفايل', path: '/buyer/profile' },
  ];

  const sellerLinks = [
    { icon: <PieChart className="w-5 h-5" />, label: 'التحليلات', path: '/seller/analytics' },
    { icon: <Package className="w-5 h-5" />, label: 'منتجاتي', path: '/seller/products' },
    { icon: <PlusCircle className="w-5 h-5" />, label: 'إضافة', path: '/seller/add-product' },
    { icon: <ClipboardList className="w-5 h-5" />, label: 'الطلبات', path: '/seller/orders' },
    { icon: <Wallet className="w-5 h-5" />, label: 'المحفظة', path: '/seller/wallet' },
  ];

  const links = type === 'buyer' ? buyerLinks : sellerLinks;

  return (
    <div className="fixed bottom-6 left-0 right-0 px-4 z-50">
      <div className="max-w-md mx-auto glass rounded-[2.5rem] p-2 flex justify-around items-center shadow-2xl border-white/10">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => `
              relative flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300
              ${isActive ? (type === 'buyer' ? 'text-neon-blue' : 'text-neon-purple') : 'text-gray-500 hover:text-white'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className={`${isActive ? 'scale-110 drop-shadow-[0_0_8px_currentColor]' : ''} transition-transform`}>
                  {link.icon}
                </div>
                <span className="text-[9px] mt-1 font-bold">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -top-1 w-1 h-1 rounded-full shadow-[0_0_10px_currentColor] ${type === 'buyer' ? 'bg-neon-blue' : 'bg-neon-purple'}`}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
