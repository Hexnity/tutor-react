import React from "react";
import { 
  Github,
  Twitter,
  Linkedin,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative z-10 pb-12 px-6 md:px-8 border-t border-white/5 bg-[#080b14]">
      <div className="max-w-7xl mx-auto">
        <div className="pt-12 flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-8">
          
          {/* Copyright - Top on mobile, Left on desktop */}
          <p className="text-[9px] md:text-[10px] font-light tracking-[0.2em] uppercase text-slate-500 order-2 md:order-1 text-center md:text-left">
            © 2026 {import.meta.env.VITE_APP_NAME_PREFIX || 'Hexnity'} Intelligence Systems. <br className="md:hidden" /> All rights reserved.
          </p>

          {/* Links - Responsive Grid on mobile, Row on desktop */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-10 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase order-1 md:order-2">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300">Web Builder</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300">AI Engine</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300">Resources</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300">Contact</a>
          </div>

          {/* Mobile Socials - Only visible on small screens to fill space */}
          <div className="flex md:hidden gap-6 order-3">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-600 hover:text-cyan-400">
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};