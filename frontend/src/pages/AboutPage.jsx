import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-industrial-obsidian relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070" alt="Mill" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="label-text mb-4">About TNTX</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-heading text-white mb-6">
            THIS IS NOT A <span className="text-industrial-orange">TEXTILE TOUR</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-xl text-industrial-smoke">
            This Is Where Textile Theory Finally Meets Reality
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-white text-lg mb-6">If you have studied fashion or textiles outside India, there is a high chance you have never seen how the world's clothing is actually made.</p>
          <p className="font-body text-industrial-smoke mb-6">You may understand fibers, know fabric names, speak confidently about sustainability. But you have likely never watched a spinning mill decide quality under time pressure, seen how one yarn defect destroys fabric meters later, or understood why a price quoted today changes tomorrow.</p>
          <p className="font-body text-industrial-orange">This program exists because that gap is not your fault. It is built into how textile education is structured globally.</p>
        </div>
      </section>

      {/* Silent Failure */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">THE SILENT FAILURE OF <span className="text-industrial-orange">TEXTILE EDUCATION</span></h2>
          <p className="font-body text-industrial-smoke mb-6">Textile education in the US and Europe is clean, controlled, and distant from reality. Students are taught what textiles are, not how textiles survive commercially.</p>
          <div className="grid md:grid-cols-2 gap-6 py-6">
            <div className="bg-industrial-steel border border-industrial-zinc p-6">
              <p className="font-heading text-white mb-4">They Learn:</p>
              <p className="font-body text-industrial-smoke text-sm">Fiber properties in isolation. Weaves without production constraints. Dyeing without water, waste, or time pressure. Sustainability without scale.</p>
            </div>
            <div className="bg-industrial-steel border border-industrial-orange/30 p-6">
              <p className="font-heading text-industrial-orange mb-4">In Real Factories:</p>
              <p className="font-body text-industrial-smoke text-sm">Quality competes with speed. Cost competes with ethics. Theory competes with deadlines. Design competes with feasibility.</p>
            </div>
          </div>
          <p className="font-body text-white">Without seeing this collision, graduates enter the industry unprepared—and often overconfident.</p>
        </div>
      </section>

      {/* Why Tamil Nadu */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">WHY TAMIL NADU IS <span className="text-industrial-orange">UNMATCHED</span></h2>
          <p className="font-body text-white mb-4">Tamil Nadu is not a destination. It is a functioning textile system.</p>
          <p className="font-body text-industrial-smoke mb-6">Within a compact region, you can trace: cotton sourcing, yarn spinning, fabric weaving (especially powerloom), bleaching, dyeing, printing, finishing, garment manufacturing, wholesale and export markets, payments, logistics, and risk management.</p>
          <p className="font-body text-industrial-orange">Few places in the world offer this density. Fewer still allow outsiders to walk inside it.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">OUR CORE <span className="text-industrial-orange">PHILOSOPHY</span></h2>
          <p className="font-body text-white text-xl mb-6">This is not a tour. This is not a workshop. This is industry entry.</p>
          <div className="grid md:grid-cols-2 gap-6 py-6">
            <div className="bg-industrial-steel border border-red-900/30 p-6">
              <p className="font-heading text-red-500 mb-4">There Are No:</p>
              <p className="font-body text-industrial-smoke text-sm">× Staged demonstrations<br />× Curated success stories<br />× Factories "prepared" for visitors</p>
            </div>
            <div className="bg-industrial-steel border border-industrial-orange/30 p-6">
              <p className="font-heading text-industrial-orange mb-4">You Will See:</p>
              <p className="font-body text-industrial-smoke text-sm">✓ Machines running as usual<br />✓ Problems discussed in real time<br />✓ Decisions made under pressure<br />✓ Trade-offs openly acknowledged</p>
            </div>
          </div>
          <p className="font-body text-industrial-orange">Nothing is simplified to impress you. Everything is shown to educate you.</p>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">HOW THE IMMERSION IS <span className="text-industrial-orange">STRUCTURED</span></h2>
          <p className="font-body text-industrial-smoke mb-6">The program follows the real manufacturing sequence: Fiber → Yarn → Fabric → Processing → Garment → Market → Payments & Logistics.</p>
          <p className="font-body text-white mb-4">At each stage, you learn why decisions are made, how mistakes compound, and where value is created or destroyed.</p>
          <p className="font-body text-industrial-orange">This is not learning modules. This is systems literacy.</p>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">WHAT CHANGES <span className="text-industrial-orange">AFTER</span></h2>
          <p className="font-body text-industrial-smoke mb-6">Participants leave with the ability to speak confidently with mills and factories, a deep understanding of cost, defects, and margins, the skill to identify where problems actually originate, and a realistic view of scale, ethics, and feasibility.</p>
          <p className="font-body text-white text-lg mb-4">You stop seeing textiles as concepts. You start seeing them as systems.</p>
          <p className="font-body text-industrial-orange">That shift changes careers, sourcing decisions, and brand outcomes.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-body text-industrial-smoke mb-2">This is not an educational add-on. This is not a travel experience.</p>
          <p className="font-body text-white text-lg mb-8">This is a gateway into the real textile industry—for people who want clarity, not comfort.</p>
          <p className="font-body text-industrial-smoke text-sm mb-2">Access is limited. Admission is selective.</p>
          <p className="font-body text-industrial-orange mb-6">Industry is not explained to everyone.</p>
          <Link to="/apply">
            <Button size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-10 py-6 rounded-none">
              Request Application Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
