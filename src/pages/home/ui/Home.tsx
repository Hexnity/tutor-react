import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Zap, 
  Layout, 
  QrCode,
  Server,
  Cloud,
  Layers,
  BarChart3,
  Sparkles,
  Gamepad2,
  ShieldCheck,
} from "lucide-react";

export const Home = () => {
  const [isManaged, setIsManaged] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#" },
    { name: "Open Source", href: "#" },
    { name: "AI Engine", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>
      
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} /> Intelligence for Education
            </div>
            <h1 className="text-4xl md:text-8xl font-light tracking-tight text-white mb-8 leading-tight">
              Teach with <span className="font-extralight italic text-slate-500">Precision.</span><br />Engage with AI.
            </h1>
            <p className="text-slate-400 text-sm md:text-lg font-light max-w-2xl mx-auto mb-12">
              The only open-source ecosystem for Sri Lankan tutors. Build your brand, engage students with AI quizzes, and manage attendance in one place.
            </p>

            <div className="flex flex-col items-center gap-6 mb-20">
              <div className="bg-slate-900/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex items-center shadow-2xl">
                <button onClick={() => setIsManaged(false)} className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${!isManaged ? 'bg-white text-slate-950' : 'text-slate-500'}`}>SELF HOSTED</button>
                <button onClick={() => setIsManaged(true)} className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${isManaged ? 'bg-white text-slate-950' : 'text-slate-500'}`}>MANAGED CLOUD</button>
              </div>
            </div>
          </motion.div>

          {/* DASHBOARD MOCKUP - REINSTATED */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-10" />
            <div className="relative bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[550px]">
              <div className="w-64 border-r border-white/5 p-6 hidden md:flex flex-col gap-8">
                <div className="space-y-6">
                  <div className="text-[10px] font-semibold text-slate-600 tracking-[0.2em] uppercase">Management</div>
                  {[Layout, Users, BarChart3, QrCode].map((Icon, i) => (
                    <div key={i} className={`flex items-center gap-4 ${i === 0 ? 'text-cyan-400' : 'text-slate-500'}`}><Icon size={18} /><div className="h-1.5 w-16 bg-current opacity-20 rounded-full" /></div>
                  ))}
                </div>
                <div className="mt-auto bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /><div className="text-[9px] text-cyan-400 font-bold uppercase">AI Processing</div></div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1/2 h-full bg-cyan-400" /></div>
                </div>
              </div>

              <div className="flex-1 p-10 text-left overflow-y-auto">
                <div className="flex justify-between items-start mb-12">
                  <div><h2 className="text-2xl font-light text-white mb-1">Classroom Insights</h2><p className="text-xs text-slate-500">Real-time engagement across active batches.</p></div>
                  <div className="flex gap-2"><div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"><Cloud size={16}/></div></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6"><Gamepad2 size={20} className="text-purple-400" /><span className="text-[10px] text-purple-400 border border-purple-400/30 px-2 py-0.5 rounded-full uppercase">Code: 882 109</span></div>
                    <p className="text-sm font-light text-slate-300 mb-4">Physics: Quantum Quiz</p>
                    <div className="space-y-3">
                      {[72, 45, 12].map((val, i) => (
                        <div key={i} className="space-y-1"><div className="flex justify-between text-[9px] text-slate-500 uppercase"><span>Option {String.fromCharCode(65 + i)}</span><span>{val}%</span></div><div className="h-1 w-full bg-white/5 rounded-full"><motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} className="h-full bg-slate-400" /></div></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-3"><Layers className="text-cyan-400" size={20}/><span className="text-xs font-light uppercase tracking-widest">Smart-Log</span></div>
                    <div><div className="text-3xl font-light text-white mb-1">94.2%</div><p className="text-[10px] text-slate-500 uppercase">Weekly Attendance</p></div>
                    <button className="w-full py-2 bg-white text-slate-900 text-[10px] font-bold uppercase rounded-lg">Export</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID - REINSTATED */}
      <section className="py-32 max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        {[
          { icon: Layout, title: "Web Builder", desc: "Choose from 50+ pre-built sections designed for Sri Lankan tutors." },
          { icon: Zap, title: "AI Quiz Master", desc: "Upload your PDFs and let AI draft localized quizzes and summaries." },
          { icon: ShieldCheck, title: "Privacy First", desc: "Own your data. Fully compliant with student privacy standards." },
          { icon: Server, title: "Edge Hosting", desc: "Localized servers in Colombo for lightning-fast dashboard access." }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-4">
            <item.icon className="text-cyan-500 mb-4" size={24} strokeWidth={1} />
            <h3 className="text-sm font-medium tracking-widest text-white uppercase">{item.title}</h3>
            <p className="text-xs font-light leading-relaxed text-slate-500">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};


