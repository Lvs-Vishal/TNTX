import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Factory, Users, Calendar, CheckCircle2, XCircle, ArrowRight, Sparkles, Eye, Shield, GraduationCap, MapPin, Clock, Target, Quote, HelpCircle, AlertCircle, ChevronRight } from "lucide-react";
import { ThreadLines, SplitTextReveal, LoomWheel, RevealSection } from "@/components/HeroAnimations";
import { RevealHeading, StaggerContainer, StaggerCard, HorizontalMarquee, AnimatedValueChain, ParallaxTestimonials } from "@/components/ScrollAnimations";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// Cohort date - January 5, 2027
const COHORT_START = new Date("2027-01-05T00:00:00");
const APP_CLOSE = new Date("2026-10-23T23:59:59");

const Counter = ({ value, duration = 2 }) => {
  const nodeRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const isNumeric = /^\d+$/.test(value);
          if (isNumeric) {
            const target = parseInt(value);
            const totalDuration = duration * 1000;
            const startTime = performance.now();

            function step(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / totalDuration, 1);
              // easeOutExpo
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              el.textContent = Math.round(eased * target);
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={nodeRef} className="tabular-nums">{typeof value === 'string' && !/^\d+$/.test(value) ? value : 0}</span>;
};

const calculateTimeLeft = (targetDate) => {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const CountdownTimer = ({ targetDate, label }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { v: timeLeft.days, l: "Days" },
    { v: timeLeft.hours, l: "Hrs" },
    { v: timeLeft.minutes, l: "Min" },
    { v: timeLeft.seconds, l: "Sec" }
  ];

  return (
    <div className="text-center w-full" data-testid="countdown-timer">
      <p className="label-text mb-4 text-industrial-smoke tracking-[0.2em]">{label}</p>
      <div className="flex justify-center gap-4 sm:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative">
              <span
                key={item.v}
                className="digit-flip stat-number text-5xl sm:text-7xl font-bold text-industrial-orange tabular-nums leading-none"
              >
                {String(item.v).padStart(2, "0")}
              </span>
            </div>
            <p className="label-text text-xs sm:text-sm mt-2 text-industrial-zinc">{item.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HomePage = () => {
  const idealFor = ["Fashion & apparel brand founders", "Textile family business heirs", "Sourcing heads & buying managers", "Professors with student cohorts"];
  const notFor = ["Tourists", "Dropshippers", "Influencers"];
  const promises = [
    { icon: Target, title: "True Pricing Benchmarks", desc: "Yarn → Fabric → Processing" },
    { icon: Factory, title: "Verified Supplier List", desc: "Build your own, directly" },
    { icon: Clock, title: "Real Production Limits", desc: "MOQs, timelines, capacity" },
    { icon: Shield, title: "Complete Independence", desc: "No traders or brokers" },
  ];
  const visits = ["Spinning mills", "Powerloom units", "Dyeing houses", "Printing units", "Garment factories"];
  const chain = ["Fiber", "Yarn", "Fabric", "Processing", "Garment", "Market"];
  const testimonials = [
    { quote: "I left with 12 direct supplier contacts and a completely different understanding of pricing.", name: "Sarah Chen", role: "Founder", loc: "LA, USA" },
    { quote: "We walked into mills that don't take visitors and negotiated directly with owners.", name: "Marcus Williams", role: "Head of Sourcing", loc: "London, UK" },
    { quote: "TNTX showed me the gaps in my understanding and gave me connections outside my family's network.", name: "Priya Sharma", role: "3rd Gen, Textile", loc: "Mumbai, India" },
  ];
  const faqs = [
    { q: "What are the eligibility criteria?", a: "Fashion brand founders, textile business heirs, sourcing professionals, and professors. Genuine intent required." },
    { q: "How competitive is admission?", a: "15 participants per cohort. Selection based on fit, not just ability to pay." },
    { q: "Is prior experience required?", a: "No. Students and early-career professionals accepted. What matters is genuine interest." },
    { q: "What's included?", a: <span>Visa Assistance, Executive Accommodation, Meals & Refreshments, Local Transfers via Private SUV, Mill Factory Floor Visits, Direct meetings with Owners.<br /><span className="block mt-2 font-bold text-white">International Flights not included</span></span> },
  ];

  // Refs for scroll-triggered sections
  // Hero is above-the-fold — uses direct CSS animation, not scroll-reveal

  const APPLY_URL = "https://forms.zohopublic.in/infotn1/form/TNTXImmersionApplication/formperma/zded7NgrSJ-7r1zRh1ZUYUSVhksII_Rb5Ienz6J8E7Y";

  return (
    <>
      {/* Hero */}
      <section data-testid="hero-section" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background with enhanced overlay */}
        <div className="absolute inset-0 z-[0]">
          <img src="/images/factory-floor.png" alt="Textile Mill Factory Floor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-industrial-orange/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />

          {/* Thread Lines (Pure CSS) */}
          <ThreadLines />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-industrial-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-industrial-orange/5 rounded-full blur-3xl" />
          <LoomWheel />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Label */}
            <div className="mb-8" style={{ opacity: 0, animation: 'pageFadeIn 0.8s ease 0.1s forwards' }}>
              <span className="inline-block px-6 py-3 bg-industrial-orange/10 border border-industrial-orange/30 rounded-full backdrop-blur-sm">
                <span className="text-industrial-orange uppercase tracking-[0.3em] text-xs font-bold">
                  Direct Mill Access · Coimbatore, South India
                </span>
              </span>
            </div>

            {/* Main Heading with Split Text Reveal */}
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight mb-6 flex flex-col items-center">
                <span className="block mb-3 text-white drop-shadow-2xl">
                  <SplitTextReveal text="Meet mills. See real ex-mill pricing." delay={0.2} />
                </span>
                <span className="block drop-shadow-2xl mt-2" style={{ color: '#C8500A' }}>
                  <SplitTextReveal text="Learn how sourcing really works." delay={1.2} color="#C8500A" />
                </span>
              </h1>

              <p
                className="font-body text-lg sm:text-xl text-white/90 font-light tracking-wide mt-6"
                style={{ opacity: 0, animation: "pageFadeIn 0.8s ease 3.5s forwards" }}
              >
                Build your own supplier map. Operate without middlemen.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-16 relative z-10" style={{ opacity: 0, animation: 'pageFadeIn 0.8s ease 0.6s forwards' }}>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Button
                    asChild
                    data-testid="hero-apply-btn"
                    size="lg"
                    className="btn-primary bg-industrial-orange text-white font-bold font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none shadow-2xl w-full sm:w-auto"
                  >
                    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center">
                        Apply for the Intensive
                        <ArrowRight strokeWidth={1.5} className="ml-3 h-6 w-6" />
                      </span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    data-testid="hero-brochure-btn"
                    size="lg"
                    variant="outline"
                    className="border-industrial-orange text-industrial-orange font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none shadow-2xl w-full sm:w-auto hover:bg-industrial-orange hover:text-white focus:bg-industrial-orange focus:text-white active:bg-industrial-orange active:text-white transition-colors duration-300"
                  >
                    <a href="/TNTX_BROUCHURE.pdf" download="TNTX_BROUCHURE.pdf" target="_blank" rel="noopener noreferrer">
                      Download brochure
                    </a>
                  </Button>
                </div>
                {/* Sub-text requested in Fix 4B */}
                <p className="text-[13px] text-industrial-smoke opacity-60 font-body">
                  Free to apply · 10 min form · Cohort starts Jan 5th
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto" style={{ opacity: 0, animation: 'pageFadeIn 0.8s ease 0.8s forwards' }}>
              <div className="group bg-black/40 backdrop-blur-md border border-white/10 hover:border-industrial-orange/50 p-6 rounded-lg transition-all duration-300 hover:bg-black/60">
                <Users strokeWidth={1.5} className="h-8 w-8 text-industrial-orange mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">15</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">People</div>
              </div>

              <div className="group bg-black/40 backdrop-blur-md border border-white/10 hover:border-industrial-orange/50 p-6 rounded-lg transition-all duration-300 hover:bg-black/60">
                <Calendar strokeWidth={1.5} className="h-8 w-8 text-industrial-orange mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">9</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Days</div>
              </div>

              <div className="group bg-black/40 backdrop-blur-md border border-white/10 hover:border-industrial-orange/50 p-6 rounded-lg transition-all duration-300 hover:bg-black/60">
                <MapPin strokeWidth={1.5} className="h-8 w-8 text-industrial-orange mx-auto mb-3" />
                <div className="text-lg sm:text-xl font-heading font-bold text-white mb-1">CJB</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Location</div>
              </div>
            </div>
          </div>

          {/* Countdown Timer Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full border-t border-industrial-zinc/50 pt-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg mt-16">
            <div className="flex-1 w-full md:w-auto">
              <CountdownTimer targetDate={APP_CLOSE} label="APPLICATIONS OPEN OCT 23RD" />
            </div>

            <div className="hidden md:block h-20 w-px bg-industrial-zinc/50"></div>

            <div className="flex-1 text-center w-full md:w-auto">
              <div className="flex items-center justify-center gap-2 text-red-500 mb-3 animate-pulse">
                <AlertCircle strokeWidth={1.5} className="h-4 w-4" />
                <span className="label-text text-red-500 tracking-widest text-sm">APPLICATIONS OPEN</span>
              </div>
              <p className="font-heading text-white text-3xl sm:text-4xl tracking-tight">October 23rd, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-industrial-obsidian relative overflow-hidden">
        <HorizontalMarquee text="THE PROBLEM" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <RevealHeading className="mb-8 flex justify-center">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">MOST PEOPLE <span className="text-industrial-orange">"SOURCE FROM INDIA"</span><br />WITHOUT EVER ENTERING THE SYSTEM</h2>
          </RevealHeading>
          <RevealSection>
            <p className="font-body text-industrial-smoke text-lg">They deal with agents, traders, curated factories. <span className="text-white font-bold">TNTX exists to remove every layer between you and the mills.</span></p>
          </RevealSection>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24 bg-industrial-steel">
        <div className="max-w-7xl mx-auto px-4">
          <RevealHeading className="mb-16 flex justify-center"><h2 className="text-3xl font-heading text-white">WHO THIS IS FOR</h2></RevealHeading>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerCard className="bg-industrial-obsidian border border-industrial-zinc p-8">
              <div className="flex items-center gap-3 mb-6 relative z-20"><CheckCircle2 strokeWidth={1.5} className="h-6 w-6 text-industrial-orange" /><h3 className="font-heading text-xl text-white">IDEAL PARTICIPANTS</h3></div>
              <ul className="space-y-4 relative z-20">{idealFor.map((item, i) => <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><span className="text-industrial-orange">—</span>{item}</li>)}</ul>
            </StaggerCard>
            <StaggerCard className="bg-industrial-obsidian border border-red-900/30 p-8">
              <div className="flex items-center gap-3 mb-6 relative z-20"><XCircle strokeWidth={1.5} className="h-6 w-6 text-red-500" /><h3 className="font-heading text-xl text-white">NOT FOR</h3></div>
              <ul className="space-y-4 relative z-20">{notFor.map((item, i) => <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><span className="text-red-500">—</span>{item}</li>)}</ul>
            </StaggerCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 bg-industrial-obsidian">
        <div className="max-w-7xl mx-auto px-4">
          <RevealHeading className="mb-10 flex justify-center"><h2 className="text-3xl font-heading text-white text-center">BY THE END, YOU WILL GET</h2></RevealHeading>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p, i) => <StaggerCard key={i} className="bg-industrial-steel/50 border border-industrial-zinc p-6 card-hover"><p.icon strokeWidth={1.5} className="h-8 w-8 text-industrial-orange mb-4 relative z-20" /><h3 className="font-heading text-lg text-white mb-2 relative z-20">{p.title}</h3><p className="font-body text-sm text-industrial-smoke relative z-20">{p.desc}</p></StaggerCard>)}
          </StaggerContainer>
          <RevealSection className="mt-12">
            <p className="font-body text-industrial-smoke text-center">This is not exposure. <span className="text-industrial-orange font-bold">This is independence.</span></p>
          </RevealSection>
        </div>
      </section>

      {/* What Happens */}
      <section className="py-24 bg-industrial-steel">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerCard><img src="/images/yarn-production.png" alt="Yarn Production Line" className="w-full h-[400px] object-cover industrial-image relative z-20" /></StaggerCard>
            <div>
              <RevealHeading className="mb-8 flex justify-start"><h2 className="text-3xl font-heading text-white">WHAT ACTUALLY <span className="text-industrial-orange">HAPPENS</span></h2></RevealHeading>
              <RevealSection>
                <h3 className="font-heading text-lg text-white mb-4">You Will Visit:</h3>
                <ul className="space-y-2">{visits.map((v, i) => <li key={i} className="flex items-center gap-3 font-body text-industrial-smoke"><Factory strokeWidth={1.5} className="h-4 w-4 text-industrial-orange" />{v}</li>)}</ul>
              </RevealSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Value Chain */}
      <section className="py-24 bg-industrial-obsidian">
        <div className="max-w-7xl mx-auto px-4">
          <RevealHeading className="mb-12 flex justify-center"><h2 className="text-3xl font-heading text-white text-center">HOW THE LEARNING <span className="text-industrial-orange">WORKS</span></h2></RevealHeading>
          <AnimatedValueChain items={chain} />
          <RevealSection className="mt-8">
            <p className="font-body text-white text-center">At TNTX, <span className="text-industrial-orange">the factories are the syllabus.</span></p>
          </RevealSection>
        </div>
      </section>

      {/* Program Snapshot */}
      <section className="py-24 bg-industrial-steel">
        <div className="max-w-7xl mx-auto px-4">
          <RevealHeading className="mb-16 flex justify-center"><h2 className="text-3xl font-heading text-white text-center">PROGRAM <span className="text-industrial-orange">SNAPSHOT</span></h2></RevealHeading>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ v: "9", l: "Days", icon: Clock }, { v: "15", l: "Max Participants", icon: Users }, { v: "Coimbatore", l: "Location", icon: MapPin }, { v: "Lifetime", l: "Post-program Access", icon: Factory }].map((d, i) => (
              <StaggerCard key={i} className="bg-industrial-obsidian border border-industrial-zinc p-6 text-center">
                <d.icon strokeWidth={1.5} className="h-6 w-6 text-industrial-orange mx-auto mb-4 relative z-20" />
                <div className={`stat-number mb-2 relative z-20 ${d.v === "Coimbatore" ? "!text-3xl sm:!text-4xl" : ""}`}>{d.v}</div>
                <p className="label-text relative z-20">{d.l}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* INVESTMENT (Fix 2) */}
      <section id="investment-section" className="py-24 bg-industrial-obsidian border-y border-industrial-zinc/30">
        <div className="max-w-6xl mx-auto px-4">
          <RevealHeading className="mb-16 flex justify-center">
            <h2 className="text-3xl font-heading text-white">INVESTMENT</h2>
          </RevealHeading>

          <StaggerContainer className="grid md:grid-cols-2 gap-12">
            {/* Left: Program Fee */}
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-10 flex flex-col justify-between">
              <div>
                <span className="text-industrial-orange uppercase tracking-widest text-xs font-bold mb-6 block">PROGRAM FEE</span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-serif text-industrial-linen font-bold leading-none">$2,900</span>
                </div>
                <p className="text-industrial-smoke text-sm mb-10 opacity-70 italic">Per participant · All-inclusive</p>

                <ul className="space-y-3 mb-10">
                  {["Executive accommodation", "All meals & refreshments", "Private SUV transfers", "Mill & factory floor access", "Direct owner meetings", "Lifetime post-program network access"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-industrial-linen/90 font-body">
                      <span className="text-industrial-orange">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-industrial-zinc/30">
                <p className="text-industrial-smoke text-xs opacity-60 uppercase tracking-tighter font-bold">Not included:</p>
                <p className="text-industrial-linen/70 text-xs mt-1">International flights · Visa fees (assistance provided)</p>
                <p className="text-industrial-orange text-xs mt-4 font-bold">Fee is due only upon acceptance.</p>
              </div>
            </StaggerCard>

            {/* Right: Application is free */}
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-10 flex flex-col justify-between items-center text-center">
              <div className="w-full">
                <span className="text-industrial-orange uppercase tracking-widest text-xs font-bold mb-6 block">APPLICATION</span>
                <div className="text-5xl sm:text-6xl font-serif text-industrial-linen font-bold leading-none mb-6">Free</div>
                <div className="space-y-2 mb-10 text-center">
                  <p className="text-industrial-linen text-lg font-body">No payment required to apply.</p>
                  <p className="text-industrial-linen text-lg font-body opacity-80">Fee is due only upon acceptance.</p>
                </div>
              </div>

              <div className="w-full">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-industrial-orange hover:bg-industrial-orange/90 text-white font-bold font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none w-full">
                    Apply for the Intensive
                  </Button>
                </a>
                <div className="mt-6 space-y-2 text-center">
                  <p className="text-white font-body text-xs opacity-90 font-bold">
                    Applications open October 23rd, 2026.
                  </p>
                  <p className="text-industrial-linen font-body text-xs opacity-60 uppercase tracking-widest text-[10px]">
                    15 seats · Selection based on fit
                  </p>
                </div>
              </div>
            </StaggerCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials (Fix 1) */}
      <section className="py-24 bg-industrial-obsidian">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <RevealHeading className="mb-4 flex justify-center">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">FIRST COHORT. NO TESTIMONIALS YET.</h2>
          </RevealHeading>
          
          <RevealSection className="mb-16">
            <p className="text-4xl sm:text-5xl font-serif text-industrial-linen font-light max-w-3xl mx-auto leading-tight">
              "That's exactly the point of January 5th."
            </p>
          </RevealSection>

          <RevealSection className="mb-20">
            <div className="relative inline-block px-12 py-10 border border-industrial-zinc/30 bg-industrial-steel/20 backdrop-blur-sm">
               <Quote strokeWidth={1.5} className="absolute -top-4 -left-4 h-12 w-12 text-industrial-orange opacity-20" />
               <p className="text-xl sm:text-2xl text-industrial-smoke font-body italic leading-relaxed max-w-2xl mx-auto">
                 "We don't have alumni because this hasn't happened yet. You won't be reading about someone else's experience — you'll be the one people read about next."
               </p>
            </div>
          </RevealSection>

          {/* Proof points styled like Snapshot cards */}
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 text-center">
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8">
               <span className="text-industrial-orange uppercase tracking-widest text-xs font-bold mb-4 block">DIRECT CONTACTS</span>
               <div className="stat-number text-4xl mb-2 relative z-20">12+</div>
               <p className="label-text text-sm relative z-20 text-industrial-smoke">Verified mill & supplier contacts per participant</p>
            </StaggerCard>
            
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8">
               <span className="text-industrial-orange uppercase tracking-widest text-xs font-bold mb-4 block">PRICING CLARITY</span>
               <div className="stat-number text-4xl mb-2 relative z-20">100%</div>
               <p className="label-text text-sm relative z-20 text-industrial-smoke">Ex-mill pricing benchmarks across the value chain</p>
            </StaggerCard>

            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8">
               <span className="text-industrial-orange uppercase tracking-widest text-xs font-bold mb-4 block">POST-PROGRAM</span>
               <div className="stat-number text-4xl mb-2 relative z-20">Lifetime</div>
               <p className="label-text text-sm relative z-20 text-industrial-smoke">Access to the TNTX supplier network and updates</p>
            </StaggerCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Academic */}
      <section className="py-24 bg-industrial-steel">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <RevealSection className="flex items-center gap-3 mb-4"><GraduationCap strokeWidth={1.5} className="h-6 w-6 text-industrial-orange" /><p className="label-text">Academic Access</p></RevealSection>
              <RevealHeading className="mb-8 flex justify-start"><h2 className="text-3xl font-heading text-white">FOR PROFESSORS<br /><span className="text-industrial-orange">& STUDENTS</span></h2></RevealHeading>
              <RevealSection>
                <div className="space-y-6 font-body text-industrial-smoke">
                  <div className="bg-industrial-obsidian border border-industrial-zinc p-6"><p className="text-white mb-2">Professors can be partially sponsored to audit this program, Contact us...</p><p className="text-sm">Students accepted even without immediate buying power provided that they demonstrate long term interest</p></div>
                  <p className="text-industrial-orange">TNTX complements theory with operational reality.</p>
                </div>
              </RevealSection>
            </div>
            <StaggerCard><img src="/images/textile-manufacturing.png" alt="Textile Manufacturing Process" className="w-full h-[400px] object-cover industrial-image relative z-20" /></StaggerCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Why TNTX */}
      <section className="py-24 bg-industrial-obsidian">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealHeading className="mb-8 flex justify-center"><h2 className="text-3xl font-heading text-white text-center">WHY <span className="text-industrial-orange">TNTX</span></h2></RevealHeading>
          <RevealSection>
            <p className="font-body text-white text-lg mb-12">Tamilnadu Textile Exchange is a practitioner-led platform built to decode India's textile ecosystem for global buyers.</p>
          </RevealSection>
          <StaggerContainer className="grid sm:grid-cols-3 gap-4">
            {["No brokers", "No markups", "No storytelling fluff"].map((t, i) => <StaggerCard key={i} className="bg-industrial-steel border border-industrial-zinc p-6"><p className="font-heading text-white relative z-20">{t}</p></StaggerCard>)}
          </StaggerContainer>
          <RevealSection className="mt-8">
            <Link to="/about"><Button variant="outline" className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white rounded-none">Learn More<ChevronRight strokeWidth={1.5} className="ml-2 h-4 w-4" /></Button></Link>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-industrial-steel">
        <div className="max-w-3xl mx-auto px-4">
          <RevealSection className="flex items-center justify-center gap-3 mb-4"><HelpCircle strokeWidth={1.5} className="h-6 w-6 text-industrial-orange" /><p className="label-text">Frequently Asked</p></RevealSection>
          <RevealHeading className="mb-12 flex justify-center"><h2 className="text-3xl font-heading text-white text-center">ADMISSION <span className="text-industrial-orange">FAQ</span></h2></RevealHeading>
          <RevealSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-industrial-obsidian border border-industrial-zinc px-6"><AccordionTrigger className="font-heading text-xl sm:text-2xl text-white text-left hover:text-industrial-orange hover:no-underline py-6">{f.q}</AccordionTrigger><AccordionContent className="font-body text-lg text-industrial-smoke pb-6">{f.a}</AccordionContent></AccordionItem>)}
            </Accordion>
          </RevealSection>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <RevealHeading className="mb-12 flex justify-center text-center">
            <h2 className="text-3xl font-heading text-white">APPLICATION <span className="text-industrial-orange">PROCESS</span></h2>
          </RevealHeading>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8 text-center flex flex-col items-center">
               <div className="stat-number text-4xl text-industrial-orange mb-4 relative z-20">01</div>
               <h3 className="font-heading text-xl text-white mb-3 relative z-20">Fill the short form</h3>
               <p className="font-body text-industrial-smoke relative z-20">Takes under 10 minutes.</p>
            </StaggerCard>
            
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8 text-center flex flex-col items-center">
               <div className="stat-number text-4xl text-industrial-orange mb-4 relative z-20">02</div>
               <h3 className="font-heading text-xl text-white mb-3 relative z-20">Screening call</h3>
               <p className="font-body text-industrial-smoke relative z-20">We assess fit — not your budget. Expect a 20-minute call.</p>
            </StaggerCard>
            
            <StaggerCard className="bg-industrial-steel border border-industrial-zinc p-8 text-center flex flex-col items-center">
               <div className="stat-number text-4xl text-industrial-orange mb-4 relative z-20">03</div>
               <h3 className="font-heading text-xl text-white mb-3 relative z-20">Confirmation + onboarding</h3>
               <p className="font-body text-industrial-smoke relative z-20">Fee due upon acceptance. Onboarding pack sent within 48 hours.</p>
            </StaggerCard>
          </StaggerContainer>

          <RevealSection className="text-center">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-industrial-orange hover:bg-industrial-orange/90 text-black font-bold font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none w-full sm:w-auto">
                Start Your Application →
              </Button>
            </a>
            <p className="text-industrial-smoke font-body text-sm mt-6 opacity-60 italic">Applications open October 23rd, 2026</p>
          </RevealSection>
        </div>
      </section>

      {/* Ready to apply? (Fix 3) */}
      <section className="py-[60px] bg-white/[0.03] border-t border-b border-[#C8500A]/15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealHeading className="mb-4 flex justify-center text-center">
            <h2 className="text-4xl sm:text-5xl font-heading text-white">Ready to apply?</h2>
          </RevealHeading>
          
          <RevealSection className="mb-12">
            <p className="font-body text-industrial-linen text-lg">
              15 seats. Cohort starts January 5th. <br />
              <span className="text-white font-bold">Applications open October 23rd, 2026.</span>
            </p>
          </RevealSection>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-12">
            {/* LEFT — Urgency indicator */}
            <div className="flex items-center gap-4 text-left">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-industrial-orange"></span>
              </div>
              <div>
                <p className="font-heading text-white text-lg leading-none mb-1">Applications open</p>
                <p className="text-industrial-linen text-xs opacity-60">Screening calls scheduled in order of application</p>
              </div>
            </div>

            {/* RIGHT — Spots indicator */}
            <div className="flex items-center gap-4 text-left">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-2 h-2 border border-industrial-linen/30"></div>
                ))}
              </div>
              <div>
                <p className="font-heading text-white text-lg leading-none mb-1">15 total seats</p>
                <p className="text-industrial-linen text-xs opacity-60">Cohort capped intentionally</p>
              </div>
            </div>
          </div>

          <RevealSection>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-industrial-orange hover:bg-industrial-orange/90 text-white font-bold font-heading uppercase tracking-widest px-12 py-8 text-xl rounded-none w-full sm:w-auto">
                Apply for the Intensive →
              </Button>
            </a>
            <p className="text-industrial-linen font-body text-sm mt-6 opacity-70">
              Short form. Screening call. No payment until accepted.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  );
};
