import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  subtext?: string;
  className?: string;
  href?: string;
  size?: "default" | "large";
  variant?: "acid" | "black" | "white" | "pink";
}

export function CTAButton({
  children,
  subtext,
  className,
  href,
  size = "default",
  variant = "acid",
  ...props
}: CTAButtonProps) {
  const content = (
    <div className="flex flex-col items-center w-full relative z-10">
      <span
        className={cn(
          "flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-center w-full font-display",
          size === "large" ? "text-xl md:text-2xl" : "text-base md:text-lg"
        )}
      >
        {children}
      </span>
      {subtext && (
        <span className="text-[11px] md:text-xs font-medium opacity-70 mt-1.5 text-center tracking-wider">
          {subtext}
        </span>
      )}
    </div>
  );

  const variantStyles = {
    acid: "bg-[#ccff00] text-[#0a0a0a] border-4 border-[#0a0a0a] hover:bg-[#b8e600]",
    black: "bg-[#0a0a0a] text-white border-4 border-[#0a0a0a] hover:bg-[#222]",
    white: "bg-white text-[#0a0a0a] border-4 border-[#0a0a0a] hover:bg-gray-100",
    pink: "bg-[#ff0099] text-white border-4 border-[#0a0a0a] hover:bg-[#e6008a]",
  };

  const baseClasses = cn(
    // Structure
    "relative overflow-hidden w-full md:max-w-lg mx-auto inline-flex items-center justify-center",
    size === "large" ? "px-8 py-5 md:py-6 min-h-[72px]" : "px-6 py-4 md:py-5 min-h-[56px]",
    // Variant
    variantStyles[variant],
    // Brutalist shadow
    "shadow-[6px_6px_0px_#000000]",
    // Pill shape
    "rounded-full",
    // Bouncy hover
    "transition-all duration-300",
    "hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-0.5",
    // Active / pressed
    "active:shadow-[2px_2px_0px_#000000] active:translate-y-1 active:translate-x-1",
    // Wobble
    "wobble-hover",
    // Pulse
    "animate-pulse-slow",
    // Text
    "whitespace-normal break-words leading-tight font-display",
    "group",
    className
  );

  const shineEffect = (
    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {shineEffect}
        {content}
      </a>
    );
  }

  return (
    <Button className={baseClasses} {...props}>
      {shineEffect}
      {content}
    </Button>
  );
}
