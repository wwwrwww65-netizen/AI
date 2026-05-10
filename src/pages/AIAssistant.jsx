import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, User, Wand2 } from 'lucide-react';
import { useState } from 'react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'أهلاً بك! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟ (مثلاً: "اكتب وصفاً جذاباً لورق عنب حامض")' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'هذا وصف مقترح: "استمتع بمذاق ورق العنب الأصيل، المحضر يدوياً بكل حب مع خلطة الأرز والبهارات الخاصة، حامض ولذيذ يذوب في الفم."' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6 flex flex-col" dir="rtl">
      <TopBar type="seller" />
      <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center border border-neon-purple/50">
              <Sparkles className="w-6 h-6 text-neon-purple" />
          </div>
          <h1 className="text-2xl font-black">المساعد الذكي</h1>
      </div>

      <div className="flex-1 space-y-4 mb-6 overflow-y-auto no-scrollbar">
          {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-neon-purple text-white' : 'glass border-white/5 text-gray-300'}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
              </motion.div>
          ))}
      </div>

      <div className="fixed bottom-24 left-6 right-6 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 glass border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-purple/50"
            placeholder="اكتب طلبك هنا..."
          />
          <button
            onClick={handleSend}
            className="w-14 h-14 bg-neon-purple rounded-2xl flex items-center justify-center shadow-lg shadow-neon-purple/20 active:scale-95 transition-all"
          >
              <Send className="w-6 h-6 text-white" />
          </button>
      </div>
      <BottomNav type="seller" />
    </div>
  );
};

export default AIAssistant;
