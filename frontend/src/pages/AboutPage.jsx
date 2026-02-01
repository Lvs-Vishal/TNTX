import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, AnimatedSection } from "@/lib/constants";
import {
  Factory,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-industrial-obsidian relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070" alt="Mill" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="label-text mb-4">About TNTX</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-6xl font-heading text-white mb-6">
            THIS IS NOT A <span className="text-industrial-orange">TEXTILE TOUR</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-body text-xl text-industrial-smoke">
            This Is Where Textile Theory Finally Meets Reality
          </motion.p>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 lg:py-28 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-6 leading-relaxed">
              <p className="text-white text-lg">If you have studied fashion or textiles outside India, there is a high chance you have never seen how the world's clothing is actually made.</p>
              <p>You may understand fibers. You may know fabric names. You may speak confidently about sustainability, design, or supply chains.</p>
              <p className="text-white">But you have likely never:</p>
              <ul className="space-y-3 pl-6">
                {["Watched a spinning mill decide quality under time pressure", "Seen how one yarn defect destroys fabric meters later", "Understood why a price quoted today changes tomorrow", "Observed how scale quietly reshapes ethics, cost, and decisions"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-industrial-orange pt-4">This program exists because that gap is not your fault. It is built into how textile education is structured globally.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Silent Failure */}
      <section className="py-20 lg:py-28 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              THE SILENT FAILURE OF <span className="text-industrial-orange">TEXTILE EDUCATION ABROAD</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-6 leading-relaxed">
              <p>Textile and fashion education in the US and Europe is clean, controlled, and distant from reality.</p>
              <p className="text-white">Students are taught what textiles are, not how textiles survive commercially.</p>
              <div className="grid md:grid-cols-2 gap-6 py-6">
                <div className="bg-industrial-steel border border-industrial-zinc p-6">
                  <p className="font-heading text-white mb-4">They Learn:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Fiber properties in isolation</li>
                    <li>• Weaves without production constraints</li>
                    <li>• Dyeing without water, waste, or time pressure</li>
                    <li>• Sustainability without scale</li>
                  </ul>
                </div>
                <div className="bg-industrial-steel border border-industrial-orange/30 p-6">
                  <p className="font-heading text-industrial-orange mb-4">In Real Factories:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Quality competes with speed</li>
                    <li>• Cost competes with ethics</li>
                    <li>• Theory competes with deadlines</li>
                    <li>• Design competes with feasibility</li>
                  </ul>
                </div>
              </div>
              <p className="text-white">Without seeing this collision, graduates enter the industry unprepared—and often overconfident.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Museums Not Enough */}
      <section className="py-20 lg:py-28 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              WHY MUSEUMS, HANDLOOMS, AND SURFACE TOURS <span className="text-industrial-orange">ARE NOT ENOUGH</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p>Museum visits teach history. Handloom clusters teach craft. CSR showcases teach intention.</p>
              <p className="text-white text-lg pt-4">But none of these teach industry.</p>
              <div className="bg-industrial-obsidian border border-industrial-zinc p-6 my-6">
                <p className="font-heading text-white mb-4">The global textile industry runs on:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p>• Powerlooms, not looms</p>
                  <p>• Volume, not samples</p>
                  <p>• Margins, not mood boards</p>
                  <p>• Systems, not stories</p>
                </div>
              </div>
              <p className="text-industrial-orange">This immersion does not replace craft appreciation. It completes your education by revealing the other 90%.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Uncomfortable Truth */}
      <section className="py-20 lg:py-28 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              THE UNCOMFORTABLE TRUTH ABOUT <span className="text-industrial-orange">GLOBAL TEXTILES</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p className="text-white">Most of the clothes you wear were not made slowly, quietly, or romantically.</p>
              <p>They were made inside:</p>
              <ul className="space-y-3 pl-6 py-4">
                {["Spinning mills operating 24/7", "Weaving sheds balancing output and breakage", "Processing houses managing chemistry, compliance, and speed", "Garment floors coordinating hundreds of people under deadlines", "Markets where prices are decided in minutes, not meetings"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Factory className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-industrial-orange text-lg">Until you see this live, fashion remains abstract. Once you do, it never is again.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Tamil Nadu */}
      <section className="py-20 lg:py-28 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              WHY TAMIL NADU, INDIA IS <span className="text-industrial-orange">UNMATCHED</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p className="text-white">Tamil Nadu is not a destination. It is a functioning textile system.</p>
              <p>Within a compact region, you can trace:</p>
              <div className="grid sm:grid-cols-2 gap-4 py-6">
                {["Cotton sourcing", "Yarn spinning", "Fabric weaving (especially powerloom)", "Bleaching, dyeing, printing, finishing", "Garment manufacturing", "Wholesale and export markets", "Payments, logistics, and risk management"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-industrial-obsidian border border-industrial-zinc p-3">
                    <CheckCircle2 className="h-4 w-4 text-industrial-orange flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-industrial-orange">Few places in the world offer this density. Fewer still allow outsiders to walk inside it.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Built This */}
      <section className="py-20 lg:py-28 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              WHO BUILT THIS—AND WHY <span className="text-industrial-orange">THAT MATTERS</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p>This immersion was not created by a tour company, a travel influencer, or an academic committee.</p>
              <p className="text-white pt-4">It was built by people who run textile businesses.</p>
              <p>People who deal with yarn CV variation, handle fabric defects, negotiate pricing daily, and manage delays, rejections, and margins.</p>
              <p className="text-industrial-orange pt-4">It exists because insiders know exactly what outsiders never get to see.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 lg:py-28 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              OUR CORE <span className="text-industrial-orange">PHILOSOPHY</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p className="text-white text-xl">This is not a tour. This is not a workshop. This is industry entry.</p>
              <div className="grid md:grid-cols-2 gap-6 py-6">
                <div className="bg-industrial-obsidian border border-red-900/30 p-6">
                  <p className="font-heading text-red-500 mb-4">There Are No:</p>
                  <ul className="space-y-2 text-sm">
                    <li>× Staged demonstrations</li>
                    <li>× Curated success stories</li>
                    <li>× Factories "prepared" for visitors</li>
                  </ul>
                </div>
                <div className="bg-industrial-obsidian border border-industrial-orange/30 p-6">
                  <p className="font-heading text-industrial-orange mb-4">You Will See:</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Machines running as usual</li>
                    <li>✓ Problems discussed in real time</li>
                    <li>✓ Decisions made under pressure</li>
                    <li>✓ Trade-offs openly acknowledged</li>
                  </ul>
                </div>
              </div>
              <p className="text-industrial-orange">Nothing is simplified to impress you. Everything is shown to educate you.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Immersion Structure */}
      <section className="py-20 lg:py-28 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              HOW THE IMMERSION IS STRUCTURED <span className="text-industrial-orange">(AND WHY IT WORKS)</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-6 leading-relaxed">
              <p>The program follows the real manufacturing sequence:</p>
              {[
                { stage: "Fiber → Yarn", learns: ["Why cotton quality varies", "How contamination affects yarn", "Why spinners make the decisions they do"] },
                { stage: "Yarn → Fabric", learns: ["Powerloom realities", "Why breakage happens", "How speed changes quality"] },
                { stage: "Fabric → Processing", learns: ["Why dyeing is the most complex stage", "How early mistakes reappear here", "Why processing controls final fabric value"] },
                { stage: "Processing → Garment", learns: ["How fabric behavior affects garment efficiency", "Why design decisions fail on factory floors"] },
                { stage: "Garment → Market", learns: ["How pricing is negotiated", "How buyers think", "How margins are protected or lost"] },
                { stage: "Payments & Logistics", learns: ["How money actually moves", "Where risk exists", "Why logistics knowledge is power"] },
              ].map((item, i) => (
                <div key={i} className="bg-industrial-steel border border-industrial-zinc p-6">
                  <p className="font-heading text-industrial-orange mb-3">{item.stage}</p>
                  <ul className="space-y-1 text-sm">
                    {item.learns.map((learn, j) => <li key={j}>• {learn}</li>)}
                  </ul>
                </div>
              ))}
              <p className="text-industrial-orange pt-4">This is not learning modules. This is systems literacy.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-20 lg:py-28 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
              WHAT CHANGES <span className="text-industrial-orange">AFTER THE IMMERSION</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="font-body text-industrial-smoke space-y-4 leading-relaxed">
              <p>Participants leave with:</p>
              <ul className="space-y-3 pl-6 py-4">
                {["The ability to speak confidently with mills and factories", "A deep understanding of cost, defects, and margins", "The skill to identify where problems actually originate", "A realistic view of scale, ethics, and feasibility"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-white text-lg">You stop seeing textiles as concepts. You start seeing them as systems.</p>
              <p className="text-industrial-orange">That shift changes careers, sourcing decisions, and brand outcomes.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.p variants={fadeUp} className="font-body text-industrial-smoke mb-2">This is not an educational add-on. This is not a travel experience.</motion.p>
            <motion.p variants={fadeUp} className="font-body text-white text-lg mb-8">
              This is a gateway into the real textile industry—<br />for people who want clarity, not comfort.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="font-body text-industrial-smoke text-sm">Access is limited. Admission is selective.</p>
              <p className="font-body text-industrial-orange">Industry is not explained to everyone.</p>
              <Link to="/apply">
                <Button size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-10 py-6 rounded-none mt-6">
                  Request Application Access<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
