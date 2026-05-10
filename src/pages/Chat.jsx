import { motion } from 'framer-motion';
import { Send, ChevronRight, Phone, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();

  const messages = [
    { id: 1, text: 'السلام عليكم، هل المنتج متوفر اليوم؟', sender: 'me', time: '10:00 ص' },
    { id: 2, text: 'وعليكم السلام، نعم متوفر ويتم تحضيره الآن', sender: 'other', time: '10:02 ص' },
    { id: 3, text: 'ممتاز، سأقوم بالطلب الآن', sender: 'me', time: '10:05 ص' },
  ];

  return (
    <div className="min-h-screen bg-dark flex flex-col" dir="rtl">
      {/* Chat Header */}
      <div className="glass p-4 flex items-center justify-between sticky top-0 z-40 border-b border-white/5">
        <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
                <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 border border-neon-blue/30 overflow-hidden">
                    <img src="https://via.placeholder.com/40" alt="" />
                </div>
                <div>
                    <h4 className="text-sm font-bold">مطبخ سارة</h4>
                    <span className="text-[10px] text-neon-green">متصل الآن</span>
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="p-2 text-gray-400 hover:text-white"><Phone className="w-5 h-5" /></button>
            <button className="p-2 text-gray-400 hover:text-white"><Video className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-3xl ${m.sender === 'me' ? 'bg-neon-blue text-dark font-medium rounded-tl-none' : 'glass border-white/5 text-white rounded-tr-none'}`}>
                      <p className="text-sm">{m.text}</p>
                      <span className={`text-[10px] mt-1 block ${m.sender === 'me' ? 'text-dark/60' : 'text-gray-500'}`}>{m.time}</span>
                  </div>
              </div>
          ))}
      </div>

      {/* Input Area */}
      <div className="p-4 glass border-t border-white/10">
          <div className="flex gap-3">
              <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue"
                  />
              </div>
              <button className="w-14 h-14 rounded-2xl bg-neon-blue flex items-center justify-center text-dark shadow-neon-blue/30 shadow-lg">
                  <Send className="w-6 h-6 rotate-180" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default Chat;
