"use client";

import React from "react";
import { 
  Bot, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Flame, 
  Activity, 
  Radio 
} from "lucide-react";

export function NeonTemplate() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-mono relative overflow-hidden">
      {/* Neon grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <Bot className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-wider text-emerald-400">NEON_AGENT::v3</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Radio className="w-3 h-3 animate-pulse" />
              STATUS: ONLINE
            </span>
            <span>PING: 12MS</span>
          </div>

          <a 
            href="#connect"
            className="px-3.5 py-1.5 rounded border border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black text-xs font-bold text-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            EXECUTE_CLI
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/40 bg-emerald-950/30 text-xs text-emerald-400 mb-6">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            CYBER_PULSE ACTIVE // READY FOR INGESTION
          </div>

          {/* Main Title - ALL CAPS according to Vietnamese rule */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight font-sans">
            TRỢ LÝ TÁC TỬ TỰ ĐỘNG{" "}
            <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]">
              THẾ HỆ MỚI
            </span>
          </h1>

          {/* Subheading - Sentence case */}
          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed font-sans">
            Phân tích lỗ hổng mã nguồn, tự động gỡ lỗi và triển khai hệ thống phân tán với tốc độ tính bằng phần nghìn giây.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a 
              href="#launch"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-xs font-black text-black transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            >
              KÍCH HOẠT TÁC TỬ
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-neutral-800 bg-neutral-900/60 hover:border-emerald-500/50 text-xs text-neutral-300 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              XEM MÃ NGUỒN
            </a>
          </div>

          {/* Live Terminal Stream */}
          <div className="mt-14 w-full max-w-3xl rounded-xl border border-emerald-500/30 bg-[#090d0b] p-4 text-left shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-400 font-bold">TERMINAL // AGENT_DAEMON_LOG</span>
              </div>
              <span>STREAM: 60FPS</span>
            </div>
            <div className="mt-3 text-xs leading-relaxed space-y-1.5 text-neutral-300">
              <p className="text-emerald-400">&gt; [INFO] Listening on socket :8080 (TCP/UDP multiplexed)</p>
              <p className="text-neutral-400">&gt; [AGENT] Scanning repository AST syntax trees... [100% OK]</p>
              <p className="text-neutral-400">&gt; [SECURITY] 0 critical vulnerabilities detected. Sandbox locked.</p>
              <p className="text-cyan-400">&gt; [DEPLOY] Micro-container provisioned on Edge Region: ap-southeast-1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-emerald-500/20 text-center text-xs text-neutral-500">
        <p>© 2026 NEON AGENT. ALL PROTOCOLS SECURED.</p>
      </footer>
    </div>
  );
}
