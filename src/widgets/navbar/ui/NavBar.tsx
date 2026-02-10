import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // INNOVATIVE OVERLAY VARIANTS
    const overlayVariants = {
      closed: { 
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeInOut" }
      },
      open: { 
        opacity: 1,
        backdropFilter: "blur(12px)",
        transition: { duration: 0.4, ease: "easeInOut" }
      }
    };

    const cardVariants = {
      closed: { 
        scale: 0.9, 
        opacity: 0, 
        y: 20,
        rotateX: -10 
      },
      open: { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    const itemVariants = {
      closed: { opacity: 0, x: -10 },
      open: { opacity: 1, x: 0 }
    };

  return (
    <>
      {/* HEADER */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 backdrop-blur-xl bg-[#0b0f1a]/80 border-b border-white/5" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-light tracking-[0.3em] text-white uppercase">
              {import.meta.env.VITE_APP_NAME_SUFFIX}<span className="font-bold text-cyan-500">{import.meta.env.VITE_APP_NAME_PREFIX}</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="/auth/login" className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-white transition-colors">Log In</a>
            <a href="/auth/register" className="px-8 py-3 bg-white text-[#0b0f1a] text-[11px] font-bold tracking-[0.2em] uppercase rounded-full">Get Started</a>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-8 h-[1px] bg-white" />
              <div className="w-5 h-[1px] bg-cyan-400" />
            </div>
          </button>
        </div>
      </nav>

      {/* INNOVATIVE MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 lg:hidden bg-[#0b0f1a]/40"
          >
            {/* The Floating Island */}
            <motion.div 
              variants={cardVariants}
              className="w-full max-w-sm bg-slate-900/90 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative"
            >
              {/* Top Control */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-[9px] font-bold tracking-[0.4em] text-slate-500 uppercase">Directory</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Minimal Links */}
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between text-base font-light tracking-[0.2em] text-slate-300 uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="group-hover:text-cyan-400 transition-colors">{link.name}</span>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Bottom Actions */}
              <motion.div variants={itemVariants} className="mt-16 space-y-4">
                <button className="w-full py-4 bg-white text-[#0b0f1a] font-bold text-[10px] tracking-[0.2em] uppercase rounded-2xl">
                  Get Started
                </button>
                <div className="flex justify-center gap-6 pt-4">
                   <div className="w-1 h-1 rounded-full bg-cyan-500" />
                   <div className="w-1 h-1 rounded-full bg-slate-700" />
                   <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>
              </motion.div>

              {/* Glass Reflection Effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}