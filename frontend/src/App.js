import { useEffect, useRef } from "react";
import "@/App.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Factory,
  Users,
  Calendar,
  DollarSign,
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
} from "lucide-react";

// Google Form URL - Replace with actual form
const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "" }) => {
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

// Hero Section
const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-end pb-20 lg:pb-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070"
          alt="Textile Mill Interior - Spinning Mills"
          className="w-full h-full object-cover industrial-image"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="label-text mb-4"
          >
            Direct Mill Access · South India
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.95] mb-6"
          >
            TAMILNADU
            <br />
            <span className="text-industrial-orange">TEXTILE EXCHANGE</span>
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

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button
              data-testid="hero-apply-btn"
              size="lg"
              className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-8 py-6 text-base rounded-none"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
            >
              Apply for the Intensive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-industrial-zinc"
          >
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">15 people</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">12 days</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">South India</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-industrial-orange" />
              <span className="font-body text-white">$4,500</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Problem Statement Section
const ProblemSection = () => {
  return (
    <section data-testid="problem-section" className="py-24 lg:py-32 bg-industrial-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="label-text mb-4">
            The Reality
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8"
          >
            MOST PEOPLE{" "}
            <span className="text-industrial-orange">"SOURCE FROM INDIA"</span>
            <br />
            WITHOUT EVER ENTERING THE SYSTEM
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-body text-industrial-smoke text-base sm:text-lg space-y-4 leading-relaxed"
          >
            <p>
              They deal with agents, traders, curated factories, and filtered
              truths.
            </p>
            <p className="text-white font-bold">
              Tamilnadu Textile Exchange exists to remove every layer between
              you and the mills.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Target Audience Section
const TargetAudience = () => {
  const idealFor = [
    "Fashion & apparel brand founders",
    "Textile family business heirs (college / early career)",
    "Sourcing heads & buying managers",
    "Professors bringing serious student cohorts",
  ];

  const notFor = ["Tourists", "Dropshippers", "Influencers"];

  return (
    <section
      data-testid="audience-section"
      className="py-24 lg:py-32 bg-industrial-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            Brutally Clear
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center"
          >
            WHO THIS IS FOR
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Ideal For */}
            <motion.div
              variants={fadeUp}
              className="bg-industrial-obsidian border border-industrial-zinc p-8 lg:p-10 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-industrial-orange" />
                <h3 className="font-heading text-xl text-white uppercase">
                  Ideal Participants
                </h3>
              </div>
              <ul className="space-y-4">
                {idealFor.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-body text-industrial-smoke"
                  >
                    <span className="text-industrial-orange mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For */}
            <motion.div
              variants={fadeUp}
              className="bg-industrial-obsidian border border-red-900/30 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-red-500" />
                <h3 className="font-heading text-xl text-white uppercase">
                  Not For
                </h3>
              </div>
              <ul className="space-y-4">
                {notFor.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-body text-industrial-smoke"
                  >
                    <span className="text-red-500 mt-1">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-body text-industrial-smoke text-sm border-t border-industrial-zinc pt-6">
                If you're not planning to work with mills directly, this is not
                for you.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Core Promise Section
const CorePromise = () => {
  const promises = [
    {
      icon: DollarSign,
      title: "True Pricing Benchmarks",
      description: "Yarn → Fabric → Processing → Job Work",
    },
    {
      icon: Factory,
      title: "Verified Supplier List",
      description: "Build your own, directly with mills",
    },
    {
      icon: Target,
      title: "Real Production Limits",
      description: "Understand MOQs, timelines, and capacity",
    },
    {
      icon: Shield,
      title: "Complete Independence",
      description: "Operate without traders, agents, or brokers",
    },
  ];

  return (
    <section
      data-testid="promise-section"
      className="py-24 lg:py-32 bg-industrial-obsidian relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1760818072388-4604d5cb39ac?q=80&w=2070"
          alt="Yarn Spinning"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            The Core Promise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 text-center"
          >
            BY THE END, YOU WILL
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-industrial-smoke text-center mb-16 max-w-2xl mx-auto"
          >
            This is not exposure.{" "}
            <span className="text-industrial-orange font-bold">
              This is independence.
            </span>
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-industrial-steel/50 border border-industrial-zinc p-6 lg:p-8 card-hover"
              >
                <promise.icon className="h-8 w-8 text-industrial-orange mb-4" />
                <h3 className="font-heading text-lg text-white mb-2">
                  {promise.title}
                </h3>
                <p className="font-body text-sm text-industrial-smoke">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// What Actually Happens Section
const WhatHappens = () => {
  const visits = [
    "Spinning mills",
    "Powerloom weaving units",
    "Dyeing & processing houses",
    "Printing units",
    "Garment factories",
  ];

  const activities = [
    "Speak directly with owners and production managers",
    "See live cost breakdowns (ex-mill price, MOQ, lead times)",
    "Ask real sourcing questions—and get real answers",
  ];

  return (
    <section
      data-testid="happens-section"
      className="py-24 lg:py-32 bg-industrial-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div variants={fadeUp} className="relative">
              <img
                src="https://images.unsplash.com/photo-1764114909312-c27b89ec7223?q=80&w=2070"
                alt="Workers in Textile Factory"
                className="w-full h-[400px] lg:h-[500px] object-cover industrial-image"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-industrial-obsidian">
                <p className="font-body text-sm text-industrial-smoke">
                  No sales theatre. No curated narratives.
                  <br />
                  <span className="text-white">
                    No factory prepared "for foreigners."
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.p variants={fadeUp} className="label-text mb-4">
                Deal-First Approach
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8"
              >
                WHAT ACTUALLY
                <br />
                <span className="text-industrial-orange">HAPPENS</span>
              </motion.h2>

              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="font-heading text-lg text-white mb-4">
                  You Will Visit:
                </h3>
                <ul className="space-y-2">
                  {visits.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 font-body text-industrial-smoke"
                    >
                      <Factory className="h-4 w-4 text-industrial-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="font-heading text-lg text-white mb-4">
                  At Each Stop:
                </h3>
                <ul className="space-y-3">
                  {activities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-body text-industrial-smoke"
                    >
                      <CheckCircle2 className="h-4 w-4 text-industrial-orange mt-1 flex-shrink-0" />
                      {item}
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

// Why Not A Tour Section
const WhyNotTour = () => {
  const points = [
    { label: "No sponsored factories", icon: Shield },
    { label: "No commissions from mills", icon: DollarSign },
    { label: "No trader relationships", icon: Users },
    { label: "No eco-marketing bias", icon: Sparkles },
  ];

  const selection = [
    "Price realism",
    "Capacity",
    "Operational honesty",
  ];

  return (
    <section
      data-testid="not-tour-section"
      className="py-24 lg:py-32 bg-industrial-obsidian"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            Structurally Clean
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center"
          >
            WHY THIS IS{" "}
            <span className="text-industrial-orange">NOT A TOUR</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-industrial-steel border border-industrial-zinc p-4"
              >
                <point.icon className="h-5 w-5 text-industrial-orange flex-shrink-0" />
                <span className="font-body text-white">{point.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-industrial-steel/50 border border-industrial-zinc p-8 lg:p-10"
          >
            <h3 className="font-heading text-xl text-white mb-6">
              Factories Are Selected For:
            </h3>
            <div className="flex flex-wrap gap-4">
              {selection.map((item, index) => (
                <span
                  key={index}
                  className="font-body text-industrial-orange bg-industrial-obsidian px-4 py-2 border border-industrial-orange/30"
                >
                  {item}
                </span>
              ))}
            </div>
            <Separator className="my-6 bg-industrial-zinc" />
            <p className="font-body text-industrial-smoke">
              If something is inefficient, you'll see it.
              <br />
              <span className="text-white">
                If something is cheap, you'll understand why.
              </span>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// How Learning Works Section
const HowItWorks = () => {
  const chain = [
    "Fiber",
    "Yarn",
    "Fabric",
    "Processing",
    "Garment",
    "Market",
  ];

  const learnings = [
    "How early decisions destroy margins later",
    "Why some defects appear only at finishing or garment stage",
    "How timelines collapse at scale",
    "Where real negotiation power comes from",
  ];

  return (
    <section
      data-testid="how-section"
      className="py-24 lg:py-32 bg-industrial-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            The Real Value Chain
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-12 text-center"
          >
            HOW THE LEARNING{" "}
            <span className="text-industrial-orange">ACTUALLY WORKS</span>
          </motion.h2>

          {/* Value Chain */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center items-center gap-2 mb-16"
          >
            {chain.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="font-heading text-white bg-industrial-obsidian px-4 py-2 border border-industrial-zinc">
                  {step}
                </span>
                {index < chain.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-industrial-orange" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Learnings */}
          <motion.div
            variants={fadeUp}
            className="max-w-3xl mx-auto bg-industrial-obsidian border border-industrial-zinc p-8 lg:p-10"
          >
            <h3 className="font-heading text-xl text-white mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6 text-industrial-orange" />
              You Learn:
            </h3>
            <ul className="space-y-4">
              {learnings.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 font-body text-industrial-smoke"
                >
                  <span className="text-industrial-orange font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Separator className="my-6 bg-industrial-zinc" />
            <p className="font-body text-white text-center">
              At Tamilnadu Textile Exchange,{" "}
              <span className="text-industrial-orange">
                the factories are the syllabus.
              </span>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Program Snapshot Section
const ProgramSnapshot = () => {
  const details = [
    { value: "8-9", label: "Days", icon: Clock },
    { value: "15", label: "Max Participants", icon: Users },
    { value: "$4,500", label: "Investment", icon: DollarSign },
    { value: "∞", label: "Post-program Access", icon: Factory },
  ];

  return (
    <section
      data-testid="snapshot-section"
      className="py-24 lg:py-32 bg-industrial-obsidian"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            Program Details
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-16 text-center"
          >
            PROGRAM <span className="text-industrial-orange">SNAPSHOT</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-industrial-steel border border-industrial-zinc p-6 lg:p-8 text-center card-hover"
              >
                <detail.icon className="h-6 w-6 text-industrial-orange mx-auto mb-4" />
                <div className="stat-number mb-2">{detail.value}</div>
                <p className="label-text">{detail.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="font-body text-industrial-smoke text-center mt-12"
          >
            Small cohort is what enables{" "}
            <span className="text-white">real access.</span>
            <br />
            Supplier contacts remain open post-program.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Professors & Students Section
const AcademicSection = () => {
  return (
    <section
      data-testid="academic-section"
      className="py-24 lg:py-32 bg-industrial-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-4"
              >
                <GraduationCap className="h-6 w-6 text-industrial-orange" />
                <p className="label-text">Academic Access</p>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8"
              >
                FOR PROFESSORS
                <br />
                <span className="text-industrial-orange">& STUDENTS</span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="space-y-6 font-body text-industrial-smoke"
              >
                <div className="bg-industrial-obsidian border border-industrial-zinc p-6">
                  <p className="text-white mb-2">
                    Professors attend free when bringing 5 students
                  </p>
                  <p className="text-sm">
                    Students accepted even without immediate buying power
                  </p>
                </div>

                <div>
                  <p className="mb-4">The objective is not buying.</p>
                  <p className="text-white">
                    The objective is learning how sourcing works before money is
                    at risk.
                  </p>
                </div>

                <p className="text-industrial-orange">
                  Tamilnadu Textile Exchange complements theory with operational
                  reality.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <img
                src="https://images.unsplash.com/photo-1632932580949-3182167aaebb?q=80&w=2070"
                alt="Cotton Yarn Rolls"
                className="w-full h-[400px] object-cover industrial-image"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// What Is TTE Section
const AboutSection = () => {
  return (
    <section
      data-testid="about-section"
      className="py-24 lg:py-32 bg-industrial-obsidian"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="label-text mb-4">
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8"
          >
            WHAT IS{" "}
            <span className="text-industrial-orange">
              TAMILNADU TEXTILE EXCHANGE
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="font-body text-industrial-smoke space-y-4 mb-12"
          >
            <p>
              A practitioner-led platform built to decode India's textile
              ecosystem for global buyers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-4 text-center"
          >
            <div className="bg-industrial-steel border border-industrial-zinc p-6">
              <p className="font-heading text-white">No brokers</p>
            </div>
            <div className="bg-industrial-steel border border-industrial-zinc p-6">
              <p className="font-heading text-white">No markups</p>
            </div>
            <div className="bg-industrial-steel border border-industrial-zinc p-6">
              <p className="font-heading text-white">No storytelling fluff</p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-body text-industrial-smoke mt-8"
          >
            Just direct access to how textiles are actually made, priced, and
            negotiated.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Application Process Section
const ApplicationProcess = () => {
  const steps = [
    { number: "01", text: "Short application form" },
    { number: "02", text: "Screening call (fit > money)" },
    { number: "03", text: "Confirmation + onboarding checklist" },
  ];

  return (
    <section
      data-testid="application-section"
      className="py-24 lg:py-32 bg-industrial-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="label-text mb-4 text-center">
            How to Apply
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-12 text-center"
          >
            APPLICATION <span className="text-industrial-orange">PROCESS</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-industrial-obsidian border border-industrial-zinc p-6"
              >
                <span className="stat-number text-3xl">{step.number}</span>
                <span className="font-body text-white text-lg">{step.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-center bg-industrial-obsidian border border-industrial-orange/30 p-8"
          >
            <p className="font-body text-industrial-smoke mb-2">
              This is not open enrollment.
            </p>
            <p className="font-heading text-white text-xl">
              Access is intentional.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="py-24 lg:py-40 bg-industrial-obsidian relative"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070"
          alt="Mill Background"
          className="w-full h-full object-cover industrial-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-obsidian via-industrial-obsidian/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="label-text mb-4">
            Final Positioning
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-8"
          >
            THIS IS NOT{" "}
            <span className="text-industrial-orange">EDUCATION TOURISM</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="font-body text-industrial-smoke space-y-4 mb-12"
          >
            <p>It is not networking.</p>
            <p className="text-white text-xl">
              It is <span className="text-industrial-orange">industry entry</span>—
              <br />
              for people who want control, clarity, and long-term sourcing
              independence.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button
              data-testid="final-apply-btn"
              size="lg"
              className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-12 py-8 text-lg rounded-none"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
            >
              Apply for the Intensive
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-industrial-zinc"
          >
            <div className="text-center">
              <p className="stat-number text-2xl">15</p>
              <p className="label-text">People</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-2xl">12</p>
              <p className="label-text">Days</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-2xl">$4,500</p>
              <p className="label-text">Investment</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Sticky Navigation
const Navigation = () => {
  return (
    <nav
      data-testid="navigation"
      className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-industrial-zinc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading text-white text-lg tracking-wider">
            TTE
          </a>
          <Button
            data-testid="nav-apply-btn"
            size="sm"
            className="bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest text-xs px-4 rounded-none"
            onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Footer
const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="py-12 bg-industrial-obsidian border-t border-industrial-zinc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-white text-xl tracking-wider mb-2">
              TAMILNADU TEXTILE EXCHANGE
            </p>
            <p className="font-body text-industrial-smoke text-sm">
              Direct mill access. No middlemen.
            </p>
          </div>
          <p className="font-body text-industrial-smoke text-sm">
            © {new Date().getFullYear()} Tamilnadu Textile Exchange
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App bg-industrial-obsidian min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <ProblemSection />
        <TargetAudience />
        <CorePromise />
        <WhatHappens />
        <WhyNotTour />
        <HowItWorks />
        <ProgramSnapshot />
        <AcademicSection />
        <AboutSection />
        <ApplicationProcess />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
