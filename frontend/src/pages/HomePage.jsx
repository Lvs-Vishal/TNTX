import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Factory,
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Shield,
  GraduationCap,
  MapPin,
  Clock,
  Target,
  Quote,
  HelpCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import {
  fadeUp,
  stagger,
  AnimatedSection,
  CountdownTimer,
  COHORT_START_DATE,
  APPLICATION_DEADLINE,
} from "@/lib/constants";

// Hero Section
export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-end pb-20 lg:pb-32"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070"
          alt="Textile Mill Interior"
          className="w-full h-full object-cover industrial-image"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="label-text mb-4">
            Direct Mill Access · Coimbatore, South India
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.95] mb-6"
          >
            <span className="text-industrial-orange">TNTX</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg sm:text-xl text-industrial-smoke max-w-2xl mb-8 leading-relaxed"
          >
            Meet mills. See real ex-mill pricing.
            <br />
            Build your supplier map—without middlemen.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 items-start">
            <Link to="/apply">
              <Button
                data-testid="hero-apply-btn"
                size="lg"
                className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-8 py-6 text-base rounded-none"
              >
                Apply for the Intensive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8 border-t border-industrial-zinc"
          >
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">15 people</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">9 days</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">Coimbatore, South India</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 p-4 bg-industrial-steel/50 border border-industrial-zinc"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <CountdownTimer targetDate={COHORT_START_DATE} label="Cohort Starts June 7th" />
              <div className="hidden lg:block h-16 w-px bg-industrial-zinc" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-red-500 mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <span className="label-text text-red-500">Applications Close</span>
                </div>
                <p className="font-heading text-white text-xl">March 31st, 2025</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Problem Section
export const ProblemSection = () => (
  <section data-testid="problem-section" className="py-24 lg:py-32 bg-industrial-obsidian">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <motion.p variants={fadeUp} className="label-text mb-4">The Reality</motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8">
          MOST PEOPLE <span className="text-industrial-orange">"SOURCE FROM INDIA"</span>
          <br />WITHOUT EVER ENTERING THE SYSTEM
        </motion.h2>
        <motion.div variants={fadeUp} className="font-body text-industrial-smoke text-base sm:text-lg space-y-4 leading-relaxed">
          <p>They deal with agents, traders, curated factories, and filtered truths.</p>
          <p className="text-white font-bold">TNTX exists to remove every layer between you and the mills.</p>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

// Target Audience
export const TargetAudience = () => {
  const idealFor = ["Fashion & apparel brand founders", "Textile family business heirs (college / early career)", "Sourcing heads & buying managers", "Professors bringing serious student cohorts"];
  const notFor = ["Tourists", "Dropshippers", "Influencers"];

  return (
    <section data-testid="audience-section" className="py-24 lg:py-32 bg-industrial-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">Brutally Clear</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center">WHO THIS IS FOR</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div variants={fadeUp} className="bg-industrial-obsidian border border-industrial-zinc p-8 lg:p-10 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-industrial-orange" />
                <h3 className="font-heading text-xl text-white uppercase">Ideal Participants</h3>
              </div>
              <ul className="space-y-4">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke">
                    <span className="text-industrial-orange mt-1">—</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-industrial-obsidian border border-red-900/30 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-red-500" />
                <h3 className="font-heading text-xl text-white uppercase">Not For</h3>
              </div>
              <ul className="space-y-4">
                {notFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke">
                    <span className="text-red-500 mt-1">×</span>{item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-body text-industrial-smoke text-sm border-t border-industrial-zinc pt-6">
                If you're not planning to work with mills directly, this is not for you.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Core Promise
export const CorePromise = () => {
  const promises = [
    { icon: Target, title: "True Pricing Benchmarks", description: "Yarn → Fabric → Processing → Job Work" },
    { icon: Factory, title: "Verified Supplier List", description: "Build your own, directly with mills" },
    { icon: Clock, title: "Real Production Limits", description: "Understand MOQs, timelines, and capacity" },
    { icon: Shield, title: "Complete Independence", description: "Operate without traders, agents, or brokers" },
  ];

  return (
    <section data-testid="promise-section" className="py-24 lg:py-32 bg-industrial-obsidian relative">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1760818072388-4604d5cb39ac?q=80&w=2070" alt="Yarn" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">The Core Promise</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 text-center">BY THE END, YOU WILL</motion.h2>
          <motion.p variants={fadeUp} className="font-body text-industrial-smoke text-center mb-16 max-w-2xl mx-auto">
            This is not exposure. <span className="text-industrial-orange font-bold">This is independence.</span>
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-industrial-steel/50 border border-industrial-zinc p-6 lg:p-8 card-hover">
                <p.icon className="h-8 w-8 text-industrial-orange mb-4" />
                <h3 className="font-heading text-lg text-white mb-2">{p.title}</h3>
                <p className="font-body text-sm text-industrial-smoke">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// What Happens
export const WhatHappens = () => {
  const visits = ["Spinning mills", "Powerloom weaving units", "Dyeing & processing houses", "Printing units", "Garment factories"];
  const activities = ["Speak directly with owners and production managers", "See live cost breakdowns (ex-mill price, MOQ, lead times)", "Ask real sourcing questions—and get real answers"];

  return (
    <section data-testid="happens-section" className="py-24 lg:py-32 bg-industrial-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeUp} className="relative">
              <img src="https://images.unsplash.com/photo-1764114909312-c27b89ec7223?q=80&w=2070" alt="Workers" className="w-full h-[400px] lg:h-[500px] object-cover industrial-image" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-industrial-obsidian">
                <p className="font-body text-sm text-industrial-smoke">No sales theatre. No curated narratives.<br /><span className="text-white">No factory prepared "for foreigners."</span></p>
              </div>
            </motion.div>
            <div>
              <motion.p variants={fadeUp} className="label-text mb-4">Deal-First Approach</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8">
                WHAT ACTUALLY<br /><span className="text-industrial-orange">HAPPENS</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="font-heading text-lg text-white mb-4">You Will Visit:</h3>
                <ul className="space-y-2">
                  {visits.map((v, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-industrial-smoke">
                      <Factory className="h-4 w-4 text-industrial-orange flex-shrink-0" />{v}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="font-heading text-lg text-white mb-4">At Each Stop:</h3>
                <ul className="space-y-3">
                  {activities.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke">
                      <CheckCircle2 className="h-4 w-4 text-industrial-orange mt-1 flex-shrink-0" />{a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Why Not Tour
export const WhyNotTour = () => {
  const points = [
    { label: "No sponsored factories", icon: Shield },
    { label: "No commissions from mills", icon: Target },
    { label: "No trader relationships", icon: Users },
    { label: "No eco-marketing bias", icon: Sparkles },
  ];
  const selection = ["Price realism", "Capacity", "Operational honesty"];

  return (
    <section data-testid="not-tour-section" className="py-24 lg:py-32 bg-industrial-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">Structurally Clean</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center">
            WHY THIS IS <span className="text-industrial-orange">NOT A TOUR</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 mb-12">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-industrial-steel border border-industrial-zinc p-4">
                <p.icon className="h-5 w-5 text-industrial-orange flex-shrink-0" />
                <span className="font-body text-white">{p.label}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="bg-industrial-steel/50 border border-industrial-zinc p-8 lg:p-10">
            <h3 className="font-heading text-xl text-white mb-6">Factories Are Selected For:</h3>
            <div className="flex flex-wrap gap-4">
              {selection.map((s, i) => (
                <span key={i} className="font-body text-industrial-orange bg-industrial-obsidian px-4 py-2 border border-industrial-orange/30">{s}</span>
              ))}
            </div>
            <Separator className="my-6 bg-industrial-zinc" />
            <p className="font-body text-industrial-smoke">If something is inefficient, you'll see it.<br /><span className="text-white">If something is cheap, you'll understand why.</span></p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// How It Works
export const HowItWorks = () => {
  const chain = ["Fiber", "Yarn", "Fabric", "Processing", "Garment", "Market"];
  const learnings = ["How early decisions destroy margins later", "Why some defects appear only at finishing or garment stage", "How timelines collapse at scale", "Where real negotiation power comes from"];

  return (
    <section data-testid="how-section" className="py-24 lg:py-32 bg-industrial-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">The Real Value Chain</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-12 text-center">
            HOW THE LEARNING <span className="text-industrial-orange">ACTUALLY WORKS</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-2 mb-16">
            {chain.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-heading text-white bg-industrial-obsidian px-4 py-2 border border-industrial-zinc">{s}</span>
                {i < chain.length - 1 && <ArrowRight className="h-4 w-4 text-industrial-orange" />}
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto bg-industrial-obsidian border border-industrial-zinc p-8 lg:p-10">
            <h3 className="font-heading text-xl text-white mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6 text-industrial-orange" />You Learn:
            </h3>
            <ul className="space-y-4">
              {learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke">
                  <span className="text-industrial-orange font-bold">{String(i + 1).padStart(2, "0")}</span>{l}
                </li>
              ))}
            </ul>
            <Separator className="my-6 bg-industrial-zinc" />
            <p className="font-body text-white text-center">At TNTX, <span className="text-industrial-orange">the factories are the syllabus.</span></p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Program Snapshot
export const ProgramSnapshot = () => {
  const details = [
    { value: "9", label: "Days", icon: Clock },
    { value: "15", label: "Max Participants", icon: Users },
    { value: "Coimbatore", label: "Location", icon: MapPin },
    { value: "∞", label: "Post-program Access", icon: Factory },
  ];

  return (
    <section data-testid="snapshot-section" className="py-24 lg:py-32 bg-industrial-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">Program Details</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center">
            PROGRAM <span className="text-industrial-orange">SNAPSHOT</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {details.map((d, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-industrial-steel border border-industrial-zinc p-6 lg:p-8 text-center card-hover">
                <d.icon className="h-6 w-6 text-industrial-orange mx-auto mb-4" />
                <div className="stat-number mb-2">{d.value}</div>
                <p className="label-text">{d.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} className="font-body text-industrial-smoke text-center mt-12">
            Small cohort is what enables <span className="text-white">real access.</span><br />Supplier contacts remain open post-program.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Testimonials
export const Testimonials = () => {
  const testimonials = [
    { quote: "I came expecting a factory tour. I left with 12 direct supplier contacts and a completely different understanding of how pricing actually works in South India.", name: "Sarah Chen", role: "Founder, Sustainable Apparel Co.", location: "Los Angeles, USA" },
    { quote: "The access we got was unreal. We walked into mills that don't take visitors and negotiated directly with owners. No agents, no markup — just real conversations.", name: "Marcus Williams", role: "Head of Sourcing, Fashion House", location: "London, UK" },
    { quote: "As a textile family heir, I thought I knew this industry. TNTX showed me the gaps in my understanding and gave me connections outside my family's network.", name: "Priya Sharma", role: "3rd Gen, Textile Business", location: "Mumbai, India" },
  ];

  return (
    <section data-testid="testimonials-section" className="py-24 lg:py-32 bg-industrial-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">Past Participants</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center">
            WHAT THEY <span className="text-industrial-orange">SAY</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-industrial-obsidian border border-industrial-zinc p-6 lg:p-8 card-hover">
                <Quote className="h-8 w-8 text-industrial-orange/30 mb-4" />
                <p className="font-body text-industrial-smoke mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="border-t border-industrial-zinc pt-4">
                  <p className="font-heading text-white text-sm">{t.name}</p>
                  <p className="font-body text-industrial-smoke text-xs">{t.role}</p>
                  <p className="font-body text-industrial-orange text-xs">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Academic Section
export const AcademicSection = () => (
  <section data-testid="academic-section" className="py-24 lg:py-32 bg-industrial-obsidian">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-industrial-orange" />
              <p className="label-text">Academic Access</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8">
              FOR PROFESSORS<br /><span className="text-industrial-orange">& STUDENTS</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 font-body text-industrial-smoke">
              <div className="bg-industrial-steel border border-industrial-zinc p-6">
                <p className="text-white mb-2">Professors can be sponsored to audit the course</p>
                <p className="text-sm">Students accepted even without immediate buying power</p>
              </div>
              <div>
                <p className="mb-4">The objective is not buying.</p>
                <p className="text-white">The objective is learning how sourcing works before money is at risk.</p>
              </div>
              <p className="text-industrial-orange">TNTX complements theory with operational reality.</p>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="relative">
            <img src="https://images.unsplash.com/photo-1632932580949-3182167aaebb?q=80&w=2070" alt="Cotton Yarn" className="w-full h-[400px] object-cover industrial-image" />
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// Why TNTX Section
export const WhyTNTXSection = () => (
  <section data-testid="about-section" className="py-24 lg:py-32 bg-industrial-steel">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <motion.p variants={fadeUp} className="label-text mb-4">About</motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8">
          WHY <span className="text-industrial-orange">TNTX</span>
        </motion.h2>
        <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 mb-12">
          <p className="text-white text-lg">Tamilnadu Textile Exchange is a practitioner-led platform built to decode India's textile ecosystem for global buyers.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 text-center">
          {["No brokers", "No markups", "No storytelling fluff"].map((t, i) => (
            <div key={i} className="bg-industrial-obsidian border border-industrial-zinc p-6">
              <p className="font-heading text-white">{t}</p>
            </div>
          ))}
        </motion.div>
        <motion.p variants={fadeUp} className="font-body text-industrial-smoke mt-8">Just direct access to how textiles are actually made, priced, and negotiated.</motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <Link to="/about">
            <Button variant="outline" className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white rounded-none">
              Learn More About TNTX<ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

// FAQ Section
export const FAQSection = () => {
  const faqs = [
    { question: "What are the eligibility criteria for TNTX?", answer: "We accept fashion brand founders, textile business heirs, sourcing professionals, and professors with student cohorts. You should have a genuine intent to source from Indian mills or learn the ecosystem for professional purposes." },
    { question: "How competitive is the application process?", answer: "We cap each cohort at 15 participants to ensure real access. Selection is based on fit, not just ability to pay. Expect a screening call after your application." },
    { question: "What happens during the screening call?", answer: "A 20-30 minute conversation to understand your background, sourcing goals, and expectations. It's not an interview — it's a mutual evaluation." },
    { question: "Is prior textile industry experience required?", answer: "No. We accept students and early-career professionals. What matters is genuine interest in understanding textile sourcing." },
    { question: "What's included in the program?", answer: "Mill visits across the entire value chain, direct meetings with mill owners, real cost breakdowns, and post-program supplier contacts. Accommodation and local transport during the program are included." },
    { question: "Can professors get sponsored?", answer: "Yes. Professors can be sponsored to audit the course. Contact us directly to discuss sponsorship arrangements." },
    { question: "What happens after the program?", answer: "Your supplier contacts remain open. Many participants place their first orders within weeks of completing TNTX." },
  ];

  return (
    <section data-testid="faq-section" className="py-24 lg:py-32 bg-industrial-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-industrial-orange" />
            <p className="label-text">Frequently Asked</p>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-12 text-center">
            ADMISSION <span className="text-industrial-orange">FAQ</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-industrial-steel border border-industrial-zinc px-6">
                  <AccordionTrigger className="font-heading text-white text-left hover:text-industrial-orange hover:no-underline py-6">{f.question}</AccordionTrigger>
                  <AccordionContent className="font-body text-industrial-smoke pb-6 leading-relaxed">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Application Process
export const ApplicationProcess = () => {
  const steps = [{ number: "01", text: "Short application form" }, { number: "02", text: "Screening call (fit > money)" }, { number: "03", text: "Confirmation + onboarding checklist" }];

  return (
    <section data-testid="application-section" className="py-24 lg:py-32 bg-industrial-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">How to Apply</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-12 text-center">
            APPLICATION <span className="text-industrial-orange">PROCESS</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-4 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-6 bg-industrial-obsidian border border-industrial-zinc p-6">
                <span className="stat-number text-3xl">{s.number}</span>
                <span className="font-body text-white text-lg">{s.text}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="text-center bg-industrial-obsidian border border-industrial-orange/30 p-8">
            <p className="font-body text-industrial-smoke mb-2">This is not open enrollment.</p>
            <p className="font-heading text-white text-xl">Access is intentional.</p>
            <div className="mt-4 pt-4 border-t border-industrial-zinc">
              <p className="text-red-500 font-body text-sm flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4" />Applications close March 31st, 2025
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Final CTA
export const FinalCTA = () => (
  <section data-testid="final-cta-section" className="py-24 lg:py-32 bg-industrial-obsidian relative">
    <div className="absolute inset-0 opacity-20">
      <img src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070" alt="Mill" className="w-full h-full object-cover industrial-image" />
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-obsidian via-industrial-obsidian/80 to-transparent" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <motion.p variants={fadeUp} className="label-text mb-4">Final Positioning</motion.p>
        <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-3 mb-10">
          <p className="text-sm">This is not education tourism.</p>
          <p className="text-sm">It is not networking.</p>
          <p className="text-white text-base">It is <span className="text-industrial-orange">industry entry</span>— for people who want control, clarity, and long-term sourcing independence.</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link to="/apply">
            <Button data-testid="final-apply-btn" size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none">
              Apply for the Intensive<ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-industrial-zinc">
          {[{ v: "15", l: "People" }, { v: "9", l: "Days" }, { v: "June 7", l: "Cohort Start" }].map((s, i) => (
            <div key={i} className="text-center">
              <p className="stat-number text-2xl">{s.v}</p>
              <p className="label-text">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

// Home Page
export const HomePage = () => (
  <>
    <Hero />
    <ProblemSection />
    <TargetAudience />
    <CorePromise />
    <WhatHappens />
    <WhyNotTour />
    <HowItWorks />
    <ProgramSnapshot />
    <Testimonials />
    <AcademicSection />
    <WhyTNTXSection />
    <FAQSection />
    <ApplicationProcess />
    <FinalCTA />
  </>
);
