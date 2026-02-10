import { motion } from "framer-motion";
import { 
  Cpu, 
  Mail, 
  Lock, 
  Sparkles,
} from "lucide-react";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";

export const Login = () => {
    return (
        <div className="min-h-screen bg-[#0b0f1a] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center lg:text-left order-last lg:order-first"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                            <span className="text-xl font-light tracking-[0.3em] text-white uppercase">
                                {import.meta.env.VITE_APP_NAME_SUFFIX}<span className="font-bold text-cyan-500">{import.meta.env.VITE_APP_NAME_PREFIX}</span>
                             </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                            Continue Your <br />
                            <span className="font-extralight italic text-slate-500 underline decoration-cyan-500/30 underline-offset-8">Learning Journey.</span>
                        </h1>
                        
                        <p className="text-lg font-light text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Access your personalized dashboard, live AI quizzes, and course materials. Your intelligence hub is just one click away.
                        </p>

                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0b0f1a] bg-slate-800" />
                                ))}
                            </div>
                            <span>Joined by 20k+ Students</span>
                        </div>
                    </motion.div>

                    {/* Right Column - Login Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-md mx-auto"
                    >
                        <Card className="bg-[#111827]/60 backdrop-blur-2xl border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden">
                            <CardHeader className="pt-10 pb-6 px-8 text-center">
                                <p className="text-xs font-light text-slate-500 uppercase tracking-widest mt-2">Enter your credentials to proceed</p>
                            </CardHeader>
                            
                            <CardContent className="space-y-6 px-8 pb-10">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                                            <Input 
                                                id="email" 
                                                type="email" 
                                                placeholder="student@example.lk" 
                                                className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0 transition-all"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Password</Label>
                                            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 hover:text-cyan-400 transition-colors">Forgot?</a>
                                        </div>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                                            <Input 
                                                id="password" 
                                                type="password" 
                                                className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl text-white focus:border-cyan-500/50 focus:ring-0 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button className="w-full h-12 bg-white text-[#0b0f1a] hover:bg-cyan-400 font-bold text-[11px] tracking-[0.2em] uppercase rounded-xl transition-all shadow-xl shadow-cyan-500/5">
                                        Login to Dashboard
                                    </Button>
                                </motion.div>

                                <div className="pt-4 text-center">
                                    <p className="text-[11px] font-light text-slate-500 uppercase tracking-widest">
                                        Don't have an account?{" "}
                                        <a href="/auth/register" className="font-bold text-white hover:text-cyan-400 transition-colors">
                                            Register Now
                                        </a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};