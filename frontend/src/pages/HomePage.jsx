import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Factory, Users, Calendar, CheckCircle2, XCircle, ArrowRight, Sparkles, Eye, Shield, GraduationCap, MapPin, Clock, Target, Quote, HelpCircle, AlertCircle, ChevronRight } from "lucide-react";

// Cohort date - June 7, 2026
const COHORT_START = new Date("2026-06-07T00:00:00");

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Counter = ({ value, duration = 2 }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Check if value is numeric for counting animation
    const isNumeric = /^\d+$/.test(value);

    if (isNumeric) {
      const node = nodeRef.current;
      const controls = animate(0, parseInt(value), {
        duration: duration,
        ease: "easeOut",
        onUpdate: (v) => {
          node.textContent = Math.round(v);
        },
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView]);

  return <span ref={nodeRef} className="tabular-nums">{typeof value === 'string' && !/^\d+$/.test(value) ? value : 0}</span>;
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);
  return <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger} className={className}>{children}</motion.div>;
};



const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;
  if (distance > 0) {
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownTimer = ({ targetDate, label }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
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
              <span className="stat-number text-5xl sm:text-7xl font-bold text-industrial-orange tabular-nums leading-none">
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
    { q: "What's included?", a: "Mill visits, direct meetings with owners, cost breakdowns, accommodation, local transport. International travel not included." },
    { q: "Can professors get sponsored?", a: "Yes. Professors can be sponsored to audit the course. Contact us directly." },
  ];

  return (
    <>
      {/* Hero */}
      <section data-testid="hero-section" className="relative min-h-screen flex flex-col justify-end pb-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070" alt="Mill" className="w-full h-full object-cover industrial-image" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl pt-32 lg:pt-0">
            <motion.p variants={fadeUp} className="label-text mb-4">Direct Mill Access · Coimbatore, South India</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-industrial-orange mb-6">TNTX</motion.h1>
            <motion.p variants={fadeUp} className="font-body text-lg text-industrial-smoke max-w-2xl mb-8">Meet mills. See real ex-mill pricing.<br />Build your supplier map—without middlemen.</motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/apply"><Button data-testid="hero-apply-btn" size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-8 py-6 rounded-none">Apply for the Intensive<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-industrial-zinc">
              <div className="flex items-center gap-3"><Users className="h-5 w-5 text-industrial-orange" /><span className="font-body text-white">15 people</span></div>
              <div className="flex items-center gap-3"><Calendar className="h-5 w-5 text-industrial-orange" /><span className="font-body text-white">9 days</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-industrial-orange" /><span className="font-body text-white">Coimbatore</span></div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 w-full max-w-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full border-t border-industrial-zinc/50 pt-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg">
              <div className="flex-1 w-full md:w-auto">
                <CountdownTimer targetDate={COHORT_START} label="COHORT STARTS JUNE 7TH" />
              </div>

              <div className="hidden md:block h-20 w-px bg-industrial-zinc/50"></div>

              <div className="flex-1 text-center w-full md:w-auto">
                <div className="flex items-center justify-center gap-2 text-red-500 mb-3 animate-pulse">
                  <AlertCircle className="h-4 w-4" />
                  <span className="label-text text-red-500 tracking-widest text-sm">APPLICATIONS CLOSE</span>
                </div>
                <p className="font-heading text-white text-3xl sm:text-4xl tracking-tight">March 31st, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-heading text-white mb-8">MOST PEOPLE <span className="text-industrial-orange">"SOURCE FROM INDIA"</span><br />WITHOUT EVER ENTERING THE SYSTEM</motion.h2>
            <motion.p variants={fadeUp} className="font-body text-industrial-smoke">They deal with agents, traders, curated factories. <span className="text-white font-bold">TNTX exists to remove every layer between you and the mills.</span></motion.p>
          </AnimatedSection>
        </div>
      </section >

      {/* Audience */}
      < section className="py-24 bg-industrial-steel" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-16 text-center">WHO THIS IS FOR</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="bg-industrial-obsidian border border-industrial-zinc p-8">
                <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="h-6 w-6 text-industrial-orange" /><h3 className="font-heading text-xl text-white">IDEAL PARTICIPANTS</h3></div>
                <ul className="space-y-4">{idealFor.map((item, i) => <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><span className="text-industrial-orange">—</span>{item}</li>)}</ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-industrial-obsidian border border-red-900/30 p-8">
                <div className="flex items-center gap-3 mb-6"><XCircle className="h-6 w-6 text-red-500" /><h3 className="font-heading text-xl text-white">NOT FOR</h3></div>
                <ul className="space-y-4">{notFor.map((item, i) => <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><span className="text-red-500">×</span>{item}</li>)}</ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Promise */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-6 text-center">BY THE END, YOU WILL</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {promises.map((p, i) => <motion.div key={i} variants={fadeUp} className="bg-industrial-steel/50 border border-industrial-zinc p-6 card-hover"><p.icon className="h-8 w-8 text-industrial-orange mb-4" /><h3 className="font-heading text-lg text-white mb-2">{p.title}</h3><p className="font-body text-sm text-industrial-smoke">{p.desc}</p></motion.div>)}
            </div>
            <motion.p variants={fadeUp} className="font-body text-industrial-smoke text-center mt-12">This is not exposure. <span className="text-industrial-orange font-bold">This is independence.</span></motion.p>
          </AnimatedSection>
        </div>
      </section >

      {/* What Happens */}
      < section className="py-24 bg-industrial-steel" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}><img src="https://images.unsplash.com/photo-1764114909312-c27b89ec7223?q=80&w=2070" alt="Factory" className="w-full h-[400px] object-cover industrial-image" /></motion.div>
              <div>
                <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-8">WHAT ACTUALLY <span className="text-industrial-orange">HAPPENS</span></motion.h2>
                <motion.div variants={fadeUp}><h3 className="font-heading text-lg text-white mb-4">You Will Visit:</h3><ul className="space-y-2">{visits.map((v, i) => <li key={i} className="flex items-center gap-3 font-body text-industrial-smoke"><Factory className="h-4 w-4 text-industrial-orange" />{v}</li>)}</ul></motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Value Chain */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-12 text-center">HOW THE LEARNING <span className="text-industrial-orange">WORKS</span></motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-2 mb-16">
              {chain.map((s, i) => <div key={i} className="flex items-center gap-2"><span className="font-heading text-white bg-industrial-steel px-4 py-2 border border-industrial-zinc">{s}</span>{i < chain.length - 1 && <ArrowRight className="h-4 w-4 text-industrial-orange" />}</div>)}
            </motion.div>
            <motion.p variants={fadeUp} className="font-body text-white text-center">At TNTX, <span className="text-industrial-orange">the factories are the syllabus.</span></motion.p>
          </AnimatedSection>
        </div>
      </section >

      {/* Program Snapshot */}
      < section className="py-24 bg-industrial-steel" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-16 text-center">PROGRAM <span className="text-industrial-orange">SNAPSHOT</span></motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ v: "9", l: "Days", icon: Clock }, { v: "15", l: "Max Participants", icon: Users }, { v: "Coimbatore", l: "Location", icon: MapPin }, { v: "∞", l: "Post-program Access", icon: Factory }].map((d, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-industrial-obsidian border border-industrial-zinc p-6 text-center">
                  <d.icon className="h-6 w-6 text-industrial-orange mx-auto mb-4" />
                  <div className={`stat-number mb-2 ${d.v === "Coimbatore" ? "!text-3xl sm:!text-4xl" : ""}`}>{d.v}</div>
                  <p className="label-text">{d.l}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Testimonials */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-16 text-center">WHAT THEY <span className="text-industrial-orange">SAY</span></motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => <motion.div key={i} variants={fadeUp} className="bg-industrial-steel border border-industrial-zinc p-6"><Quote className="h-8 w-8 text-industrial-orange/30 mb-4" /><p className="font-body text-industrial-smoke mb-6">"{t.quote}"</p><div className="border-t border-industrial-zinc pt-4"><p className="font-heading text-white text-sm">{t.name}</p><p className="font-body text-industrial-smoke text-xs">{t.role}</p><p className="font-body text-industrial-orange text-xs">{t.loc}</p></div></motion.div>)}
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Academic */}
      < section className="py-24 bg-industrial-steel" >
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4"><GraduationCap className="h-6 w-6 text-industrial-orange" /><p className="label-text">Academic Access</p></motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-8">FOR PROFESSORS<br /><span className="text-industrial-orange">& STUDENTS</span></motion.h2>
                <motion.div variants={fadeUp} className="space-y-6 font-body text-industrial-smoke">
                  <div className="bg-industrial-obsidian border border-industrial-zinc p-6"><p className="text-white mb-2">Professors can be sponsored to audit the course</p><p className="text-sm">Students accepted even without immediate buying power</p></div>
                  <p className="text-industrial-orange">TNTX complements theory with operational reality.</p>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}><img src="https://images.unsplash.com/photo-1632932580949-3182167aaebb?q=80&w=2070" alt="Yarn" className="w-full h-[400px] object-cover industrial-image" /></motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Why TNTX */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-8">WHY <span className="text-industrial-orange">TNTX</span></motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white text-lg mb-12">Tamilnadu Textile Exchange is a practitioner-led platform built to decode India's textile ecosystem for global buyers.</motion.p>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">{["No brokers", "No markups", "No storytelling fluff"].map((t, i) => <div key={i} className="bg-industrial-steel border border-industrial-zinc p-6"><p className="font-heading text-white">{t}</p></div>)}</motion.div>
            <motion.div variants={fadeUp} className="mt-8"><Link to="/about"><Button variant="outline" className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white rounded-none">Learn More<ChevronRight className="ml-2 h-4 w-4" /></Button></Link></motion.div>
          </AnimatedSection>
        </div>
      </section >

      {/* FAQ */}
      < section className="py-24 bg-industrial-steel" >
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4"><HelpCircle className="h-6 w-6 text-industrial-orange" /><p className="label-text">Frequently Asked</p></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-12 text-center">ADMISSION <span className="text-industrial-orange">FAQ</span></motion.h2>
            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-industrial-obsidian border border-industrial-zinc px-6"><AccordionTrigger className="font-heading text-white text-left hover:text-industrial-orange hover:no-underline py-6">{f.q}</AccordionTrigger><AccordionContent className="font-body text-industrial-smoke pb-6">{f.a}</AccordionContent></AccordionItem>)}
              </Accordion>
            </motion.div>
          </AnimatedSection>
        </div>
      </section >

      {/* Application Process */}
      < section className="py-24 bg-industrial-obsidian" >
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-3xl font-heading text-white mb-12 text-center">APPLICATION <span className="text-industrial-orange">PROCESS</span></motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 mb-12">
              {[{ n: "01", t: "Short application form" }, { n: "02", t: "Screening call (fit > money)" }, { n: "03", t: "Confirmation + onboarding" }].map((s, i) => <div key={i} className="flex items-center gap-6 bg-industrial-steel border border-industrial-zinc p-6"><span className="stat-number text-3xl">{s.n}</span><span className="font-body text-white text-lg">{s.t}</span></div>)}
            </motion.div>
            <motion.div variants={fadeUp} className="text-center bg-industrial-steel border border-industrial-orange/30 p-8">
              <p className="font-heading text-white text-xl">Access is intentional.</p>
              <p className="text-red-500 font-body text-sm mt-4 flex items-center justify-center gap-2"><AlertCircle className="h-4 w-4" />Applications close March 31st, 2025</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section >

      {/* Final CTA */}
      < section className="py-24 bg-industrial-steel relative" >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-3 mb-10">
              <p className="text-sm">This is not education tourism. It is not networking.</p>
              <p className="text-white text-base">It is <span className="text-industrial-orange">industry entry</span>— for people who want control, clarity, and long-term sourcing independence.</p>
            </motion.div>
            <motion.div variants={fadeUp}><Link to="/apply"><Button data-testid="final-apply-btn" size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none">Apply for the Intensive<ArrowRight className="ml-3 h-6 w-6" /></Button></Link></motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 border-t border-industrial-zinc pt-12">
              {[{ v: "15", l: "People" }, { v: "9", l: "Days" }, { v: "June 7", l: "Start" }].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="relative bg-industrial-obsidian/50 backdrop-blur-sm border-t-2 border-industrial-orange p-8 text-center transition-all duration-300 hover:bg-industrial-steel/30 group"
                >
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-industrial-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-industrial-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <p className="stat-number text-4xl sm:text-6xl mb-2 text-white group-hover:text-industrial-orange transition-colors">
                    <Counter value={s.v} />
                  </p>
                  <p className="label-text text-sm tracking-[0.2em]">{s.l}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section >
    </>
  );
};
