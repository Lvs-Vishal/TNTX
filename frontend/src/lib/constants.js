import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Google Form URL - Replace with actual Zoho form
export const ZOHO_FORM_URL = "https://forms.zohopublic.com/your-form-url";
export const CONTACT_EMAIL = "info@tntx.org";

// Cohort dates
export const COHORT_START_DATE = new Date("2025-06-07T00:00:00");
export const APPLICATION_DEADLINE = new Date("2025-03-31T23:59:59");

// Animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animated section wrapper
export const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Countdown Timer Component
export const CountdownTimer = ({ targetDate, label }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <p className="label-text mb-3">{label}</p>
      <div className="flex justify-center gap-3 sm:gap-4">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hrs" },
          { value: timeLeft.minutes, label: "Min" },
          { value: timeLeft.seconds, label: "Sec" },
        ].map((item, index) => (
          <div key={index} className="bg-industrial-steel border border-industrial-zinc px-3 py-2 sm:px-4 sm:py-3 min-w-[60px]">
            <p className="stat-number text-xl sm:text-2xl">{String(item.value).padStart(2, "0")}</p>
            <p className="label-text text-[10px] sm:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
