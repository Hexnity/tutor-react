import { motion } from "framer-motion";
import { RegisterForm } from "@/features/auth-register";

export const Register = () => {
    const handleSuccess = () => {
        console.log("Registration successful!");
    };

    return (
        <div className="min-h-screen bg-[#0b0f1a] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
                <section className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    
                    {/* Left Column - Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-center lg:text-left lg:max-w-md"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                            <span className="text-xl font-light tracking-[0.3em] text-white uppercase">
                                {import.meta.env.VITE_APP_NAME_SUFFIX}<span className="font-bold text-cyan-500">{import.meta.env.VITE_APP_NAME_PREFIX}</span>
                             </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                            Join the <br />
                            <span className="font-extralight italic text-slate-500 underline decoration-cyan-500/30 underline-offset-8">Elite Community.</span>
                        </h1>
                        
                        <p className="text-base font-light text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                            Create your student profile to unlock AI-driven insights and premium tuition materials.
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

                    {/* Right Column: Balanced Form Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:max-w-xl" // Balanced mid-width
                    >
                        <RegisterForm onSuccess={handleSuccess} />
                    </motion.div>
                </section>
            </main>
        </div>
    );
};