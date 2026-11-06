"use client";

import React, { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs">
      <span className="bg-indigo-900/60 border border-indigo-700/60 px-2 py-0.5 rounded text-white font-bold">
        {String(timeLeft.days).padStart(2, "0")}d
      </span>
      <span>:</span>
      <span className="bg-indigo-900/60 border border-indigo-700/60 px-2 py-0.5 rounded text-white font-bold">
        {String(timeLeft.hours).padStart(2, "0")}h
      </span>
      <span>:</span>
      <span className="bg-indigo-900/60 border border-indigo-700/60 px-2 py-0.5 rounded text-white font-bold">
        {String(timeLeft.minutes).padStart(2, "0")}m
      </span>
      <span>:</span>
      <span className="bg-indigo-900/60 border border-indigo-700/60 px-2 py-0.5 rounded text-amber-400 font-bold">
        {String(timeLeft.seconds).padStart(2, "0")}s
      </span>
    </div>
  );
}
