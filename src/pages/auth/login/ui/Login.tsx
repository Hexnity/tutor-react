import { motion } from "framer-motion";
import { LoginForm } from "@/features/auth-login";

export const Login = () => {
    const handleSuccess = () => {
        console.log("Login successful!");
    };

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
                        <LoginForm onSuccess={handleSuccess} />
                    </motion.div>
                </section>
            </main>
        </div>
    );
};