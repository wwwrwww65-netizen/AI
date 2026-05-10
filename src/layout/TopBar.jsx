import { MapPin, Bell, Power } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ type = 'buyer', storeOpen = true }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto glass rounded-2xl p-3 flex justify-between items-center border-white/5 shadow-lg">
        {type === 'buyer' ? (
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-neon-blue/10">
              <MapPin className="w-5 h-5 text-neon-blue" />
            </div>
            <div className="flex flex-col" dir="rtl">
              <span className="text-[10px] text-gray-400">التوصيل إلى</span>
              <select className="bg-transparent text-sm font-bold text-white outline-none">
                <option>الرياض، حي الملقا</option>
                <option>جدة، حي الروضة</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${storeOpen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              <div className={`w-2 h-2 rounded-full ${storeOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              {storeOpen ? 'المتجر مفتوح' : 'المتجر مغلق'}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(type === 'buyer' ? '/buyer/notifications' : '/seller/notifications')}
            className="relative p-2 rounded-xl glass border-white/10 hover:border-neon-blue/50 transition-all"
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-neon-pink rounded-full shadow-[0_0_5px_#ff00ff]"></span>
          </button>
          {type === 'seller' && (
            <button className="p-2 rounded-xl glass border-white/10 hover:border-red-500/50 group">
              <Power className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
