import { motion } from 'framer-motion';
import { Headset, Send, MessageSquare, History, Plus } from 'lucide-react';
import { useState } from 'react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const Support = () => {
  const [activeTab, setActiveTab] = useState('new');
  const tickets = [
    { id: 'TIC-992', title: 'تأخير في استلام مستحقات المحفظة', status: 'قيد المراجعة', date: '2023/10/05' },
    { id: 'TIC-841', title: 'مشكلة في رفع صور المنتج', status: 'مغلقة', date: '2023/09/28' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="buyer" />

      <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
              <Headset className="w-6 h-6 text-neon-blue" />
          </div>
          <div>
              <h1 className="text-2xl font-black">الدعم الفني</h1>
              <p className="text-xs text-gray-500">نحن هنا لمساعدتك في أي وقت</p>
          </div>
      </div>

      <div className="flex gap-4 mb-8 glass p-1.5 rounded-2xl border-white/5">
          <button
            onClick={() => setActiveTab('new')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'new' ? 'bg-neon-blue text-white' : 'text-gray-500'}`}
          >
              فتح تذكرة
          </button>
          <button
             onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'history' ? 'bg-neon-blue text-white' : 'text-gray-500'}`}
          >
              تذاكري السابقة
          </button>
      </div>

      {activeTab === 'new' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
              <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 mr-2">موضوع الشكوى/الاستفسار</label>
                  <input className="w-full glass border-white/10 rounded-2xl p-4 text-white focus:border-neon-blue/50 outline-none" placeholder="مثلاً: مشكلة في الدفع" />
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 mr-2">التفاصيل</label>
                  <textarea rows="5" className="w-full glass border-white/10 rounded-2xl p-4 text-white focus:border-neon-blue/50 outline-none resize-none" placeholder="اشرح لنا المشكلة بالتفصيل..."></textarea>
              </div>
              <button className="w-full bg-neon-blue py-5 rounded-2xl font-black shadow-lg shadow-neon-blue/20 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <Send className="w-5 h-5" />
                  إرسال التذكرة
              </button>
          </motion.div>
      ) : (
          <div className="space-y-4">
              {tickets.map((ticket) => (
                  <div key={ticket.id} className="glass p-5 rounded-2xl border-white/5 flex justify-between items-center group">
                      <div>
                          <h3 className="font-bold text-sm text-white mb-1">{ticket.title}</h3>
                          <div className="flex items-center gap-3 text-[10px] text-gray-500">
                              <span>#{ticket.id}</span>
                              <span>•</span>
                              <span>{ticket.date}</span>
                          </div>
                      </div>
                      <div className="text-left">
                          <span className={`text-[10px] px-3 py-1 rounded-full ${ticket.status === 'مغلقة' ? 'bg-gray-800 text-gray-400' : 'bg-neon-blue/10 text-neon-blue'}`}>
                              {ticket.status}
                          </span>
                      </div>
                  </div>
              ))}
          </div>
      )}

      <BottomNav type="buyer" />
    </div>
  );
};

export default Support;
