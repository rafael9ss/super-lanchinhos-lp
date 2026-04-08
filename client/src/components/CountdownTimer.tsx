import { useEffect, useRef, memo, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  className?: string;
  variant?: "bar" | "inline";
}

export const CountdownTimer = memo(function CountdownTimer({ className, variant = "inline" }: CountdownTimerProps) {
  const minutesRef = useRef<HTMLSpanElement>(null);
  const secondsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeLeft = 15 * 60;

    const update = () => {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      if (minutesRef.current) minutesRef.current.textContent = String(m).padStart(2, "0");
      if (secondsRef.current) secondsRef.current.textContent = String(s).padStart(2, "0");
    };

    update();

    const timer = setInterval(() => {
      timeLeft = timeLeft > 0 ? timeLeft - 1 : 15 * 60;
      update();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (variant === "bar") {
    return (
      <div className={cn("flex items-center justify-center gap-3", className)}>
        <TimeBlock ref={minutesRef} label="min" />
        <span className="text-3xl font-bold text-[#ff0099] animate-pulse select-none font-display">:</span>
        <TimeBlock ref={secondsRef} label="seg" />
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-bold tabular-nums",
        "text-[#0a0a0a] bg-[#ccff00] px-3 py-1.5 border-4 border-[#0a0a0a]",
        "text-sm tracking-wider rounded-full shadow-[4px_4px_0px_#000000]",
        className
      )}
    >
      <span ref={minutesRef}>15</span>
      <span className="animate-pulse text-[#ff0099]">:</span>
      <span ref={secondsRef}>00</span>
    </span>
  );
});

const TimeBlock = forwardRef<HTMLSpanElement, { label: string }>(function TimeBlock({ label }, ref) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="bg-[#0a0a0a] text-[#ccff00] font-mono font-bold text-2xl md:text-3xl
                    w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
                    border-4 border-[#0a0a0a] shadow-[4px_4px_0px_#ccff00] tabular-nums rounded-2xl"
      >
        <span ref={ref}>00</span>
      </div>
      <span className="text-[10px] font-bold tracking-widest text-gray-500 mt-1.5 lowercase font-display">
        {label}
      </span>
    </div>
  );
});
