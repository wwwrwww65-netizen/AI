import { Bell, Power, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ type = 'buyer', storeOpen = true }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-[2rem] p-3 flex justify-between items-center border-white/5 shadow-2xl overflow-hidden group">
        {/* Subtle background animated element */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neon-blue/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <div className="flex items-center gap-3 relative z-10">
          <div 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center border-neon-blue/20 cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-xl">🏡</span>
          </div>
          <div className="flex flex-col" dir="rtl">
            <h2 className="text-xs font-black text-white tracking-tighter">الأسر <span className="text-neon-blue">المنتجة</span></h2>
            <div className="flex items-center gap-1">
                <span className="w-1 h-1 bg-neon-green rounded-full animate-pulse"></span>
                <span className="text-[8px] text-gray-500 font-bold uppercase">Premium Portal</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 relative z-10">
          {type === 'seller' && (
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-[10px] font-black ${storeOpen ? 'bg-neon-green/10 text-neon-green border border-neon-green/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${storeOpen ? 'bg-neon-green animate-pulse shadow-[0_0_5px_currentColor]' : 'bg-red-400'}`}></div>
              {storeOpen ? 'متصل' : 'مغلق'}
            </div>
          )}
          
          <button
            onClick={() => navigate(type === 'buyer' ? '/buyer/notifications' : '/seller/notifications')}
            className="relative p-2.5 rounded-xl glass border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-neon-pink rounded-full shadow-[0_0_10px_#ff00ff] border-2 border-dark"></span>
          </button>

          {type === 'seller' && (
            <button 
                onClick={() => navigate('/login')}
                className="p-2.5 rounded-xl glass border-white/10 hover:border-red-500/50 group transition-all"
            >
              <Power className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
