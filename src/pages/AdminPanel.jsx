import { motion } from 'framer-motion';
import { Users, Store, TrendingUp, AlertTriangle, ShieldCheck, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'إجمالي المستخدمين', value: '12,450', icon: <Users />, color: 'text-neon-blue' },
    { label: 'الأسر النشطة', value: '840', icon: <Store />, color: 'text-neon-purple' },
    { label: 'العمولات (الشهر)', value: '24,500 ر.س', icon: <TrendingUp />, color: 'text-neon-green' },
    { label: 'شكاوى معلقة', value: '18', icon: <AlertTriangle />, color: 'text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white flex" dir="rtl">
      {/* Sidebar - Desktop (Simplified for Mobile view too) */}
      <div className="w-20 md:w-64 glass border-l border-white/5 flex flex-col items-center py-8">
          <div className="w-12 h-12 bg-neon-blue rounded-2xl mb-12 flex items-center justify-center shadow-neon-blue/30 shadow-lg">
              <ShieldCheck className="text-dark" />
          </div>
          <div className="flex-1 space-y-8">
              <button className="p-3 text-neon-blue bg-neon-blue/10 rounded-xl"><TrendingUp className="w-6 h-6" /></button>
              <button className="p-3 text-gray-500 hover:text-white"><Users className="w-6 h-6" /></button>
              <button className="p-3 text-gray-500 hover:text-white"><Store className="w-6 h-6" /></button>
              <button className="p-3 text-gray-500 hover:text-white"><Settings className="w-6 h-6" /></button>
          </div>
          <button onClick={() => navigate('/')} className="p-3 text-red-500"><LogOut className="w-6 h-6" /></button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-12">
              <h1 className="text-3xl font-black">لوحة تحكم الإدارة</h1>
              <div className="flex items-center gap-4">
                  <div className="text-left hidden md:block">
                      <p className="text-sm font-bold text-white">أدمن المنصة</p>
                      <p className="text-[10px] text-gray-500">Super Admin</p>
                  </div>
                  <div className="w-10 h-10 rounded-full glass border border-white/10"></div>
              </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((s, i) => (
                  <div key={i} className="glass p-6 rounded-3xl border-white/5">
                      <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${s.color}`}>
                          {s.icon}
                      </div>
                      <p className="text-gray-500 text-sm">{s.label}</p>
                      <h3 className="text-2xl font-black mt-1">{s.value}</h3>
                  </div>
              ))}
          </div>

          {/* Recent Registrations Table */}
          <section className="glass rounded-[2.5rem] border-white/5 overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-bold">طلبات انضمام الأسر</h3>
                  <button className="text-xs text-neon-blue">عرض الكل</button>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-right text-sm">
                      <thead className="bg-white/5 text-gray-400">
                          <tr>
                              <th className="p-4">اسم المتجر</th>
                              <th className="p-4">النوع</th>
                              <th className="p-4">التاريخ</th>
                              <th className="p-4">الحالة</th>
                              <th className="p-4">الإجراء</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                          {[1, 2, 3].map((i) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="p-4 font-bold">متجر الأسرة {i}</td>
                                  <td className="p-4">مأكولات</td>
                                  <td className="p-4">2024/05/12</td>
                                  <td className="p-4">
                                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px]">قيد المراجعة</span>
                                  </td>
                                  <td className="p-4">
                                      <button className="text-neon-blue hover:underline">اعتماد</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </section>
      </div>
    </div>
  );
};

export default AdminPanel;
