import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../model/schema";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";

export const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) onSuccess();
    } catch (e) { console.error("Submit failed", e); }
  };

  const inputStyles = "bg-white/5 border-white/5 h-12 pl-11 rounded-xl text-white text-sm placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0 transition-all";
  const iconStyles = "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors";
  const labelStyles = "text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1";

  return (
    <Card className="bg-[#111827] backdrop-blur-2xl border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden">
        <CardHeader className="pt-10 pb-6 px-8 text-center">
            <p className="text-xs font-light text-slate-500 uppercase tracking-widest mt-2">Enter your credentials to proceed</p>
        </CardHeader>

        <CardContent className="px-8 pb-10">
            
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

              <div className="space-y-1.5">
                <Label htmlFor="email" className={labelStyles}>Email</Label>
                <div className="relative group">
                  <Mail className={iconStyles} size={16} />
                  <Input id="email" type="email" {...register("email")} placeholder="student@example.lk" className={inputStyles} />
                </div>
                {errors.email && <p className="text-[9px] text-red-400/70 italic ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password" className={labelStyles}>Password</Label>
                <div className="relative group">
                  <Lock className={iconStyles} size={16} />
                  <Input id="password" type="password" {...register("password")} className={inputStyles} />
                </div>
                {errors.password && <p className="text-[9px] text-red-400/70 italic ml-1">{errors.password.message}</p>}
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-white text-[#0b0f1a] hover:bg-cyan-400 font-bold text-[10px] tracking-[0.2em] uppercase rounded-xl transition-all shadow-lg"
                >
                  {isSubmitting ? "Authenticating..." : "Access Account"}
                </Button>
              </motion.div>
            </form>

            <div className="pt-8 text-center border-t border-white/5 mt-4">
                <p className="text-[11px] font-light text-slate-500 uppercase tracking-widest">
                    Don't have an account?{" "}
                    <a href="/auth/register" className="font-bold text-white hover:text-cyan-400 transition-colors">
                        Register Now
                    </a>
                </p>
            </div>
        </CardContent>
    </Card>
    
  );
};