import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Factory, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

export const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { title: "THE SILENT FAILURE OF TEXTILE EDUCATION ABROAD", content: "Textile education in the US and Europe is clean, controlled, and distant from reality. Students are taught what textiles are, not how textiles survive commercially. Without seeing factories in action, graduates enter the industry unprepared." },
    { title: "WHY MUSEUMS AND TOURS ARE NOT ENOUGH", content: "Museum visits teach history. Handloom clusters teach craft. CSR showcases teach intention. But none of these teach industry. The global textile industry runs on powerlooms, volume, margins, and systems—not looms, samples, mood boards, and stories." },
    { title: "THE UNCOMFORTABLE TRUTH", content: "Most clothes were not made slowly or romantically. They were made inside spinning mills operating 24/7, weaving sheds balancing output and breakage, processing houses managing chemistry under speed, and garment floors coordinating hundreds under deadlines." },
    { title: "WHY TAMIL NADU IS UNMATCHED", content: "Tamil Nadu is a functioning textile system. Within a compact region, you can trace: cotton sourcing, yarn spinning, fabric weaving, dyeing, printing, finishing, garment manufacturing, wholesale markets, and logistics. Few places offer this density." },
    { title: "WHO BUILT THIS", content: "This immersion was built by people who run textile businesses—people who deal with yarn variation, handle defects, negotiate pricing daily, and manage delays. It exists because insiders know exactly what outsiders never get to see." },
    { title: "OUR PHILOSOPHY", content: "This is not a tour. This is not a workshop. This is industry entry. No staged demonstrations. No curated success stories. No factories prepared for visitors. Everything is shown to educate you, not impress you." },
  ];

  const structure = [
    { stage: "Fiber → Yarn", items: ["Cotton quality varies", "Contamination affects yarn", "Why spinners decide what they do"] },
    { stage: "Yarn → Fabric", items: ["Powerloom realities", "Why breakage happens", "Speed changes quality"] },
    { stage: "Fabric → Processing", items: ["Dyeing is most complex", "Early mistakes reappear", "Processing controls value"] },
    { stage: "Processing → Garment", items: ["Fabric affects efficiency", "Design decisions fail"] },
    { stage: "Garment → Market", items: ["How pricing is negotiated", "How margins are protected"] },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-industrial-obsidian relative">
        <div className="absolute inset-0 opacity-10"><img src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=2070" alt="Mill" className="w-full h-full object-cover" /></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="label-text mb-4">About TNTX</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-heading text-white mb-6">THIS IS NOT A <span className="text-industrial-orange">TEXTILE TOUR</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-xl text-industrial-smoke">This Is Where Textile Theory Finally Meets Reality</motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-white text-lg mb-6">If you have studied fashion or textiles outside India, there is a high chance you have never seen how the world's clothing is actually made.</p>
          <p className="font-body text-industrial-smoke mb-6">You may understand fibers, know fabric names, speak confidently about sustainability. But you have likely never:</p>
          <ul className="space-y-3 pl-6">
            {["Watched a spinning mill decide quality under time pressure", "Seen how one yarn defect destroys fabric meters later", "Understood why a price quoted today changes tomorrow", "Observed how scale reshapes ethics, cost, and decisions"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><ChevronRight className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />{item}</li>
            ))}
          </ul>
          <p className="font-body text-industrial-orange mt-6">This program exists because that gap is not your fault. It is built into how textile education is structured globally.</p>
        </div>
      </section>

      {/* Main Sections */}
      {sections.map((s, i) => (
        <section key={i} className={`py-20 ${i % 2 === 0 ? 'bg-industrial-obsidian' : 'bg-industrial-steel'}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-heading text-white mb-6">{s.title.split(' ').slice(0, -1).join(' ')} <span className="text-industrial-orange">{s.title.split(' ').slice(-1)}</span></h2>
            <p className="font-body text-industrial-smoke leading-relaxed">{s.content}</p>
          </div>
        </section>
      ))}

      {/* Structure */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">HOW THE IMMERSION IS <span className="text-industrial-orange">STRUCTURED</span></h2>
          <p className="font-body text-industrial-smoke mb-6">The program follows the real manufacturing sequence:</p>
          <div className="space-y-4">
            {structure.map((s, i) => (
              <div key={i} className="bg-industrial-obsidian border border-industrial-zinc p-6">
                <p className="font-heading text-industrial-orange mb-3">{s.stage}</p>
                <ul className="space-y-1 text-sm font-body text-industrial-smoke">{s.items.map((item, j) => <li key={j}>• {item}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="font-body text-industrial-orange mt-6">This is not learning modules. This is systems literacy.</p>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">WHAT CHANGES <span className="text-industrial-orange">AFTER</span></h2>
          <p className="font-body text-industrial-smoke mb-6">Participants leave with:</p>
          <ul className="space-y-3 pl-6">
            {["The ability to speak confidently with mills and factories", "A deep understanding of cost, defects, and margins", "The skill to identify where problems actually originate", "A realistic view of scale, ethics, and feasibility"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-industrial-smoke"><CheckCircle2 className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />{item}</li>
            ))}
          </ul>
          <p className="font-body text-white text-lg mt-6">You stop seeing textiles as concepts. You start seeing them as systems.</p>
          <p className="font-body text-industrial-orange">That shift changes careers, sourcing decisions, and brand outcomes.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-body text-industrial-smoke mb-2">This is not an educational add-on. This is not a travel experience.</p>
          <p className="font-body text-white text-lg mb-8">This is a gateway into the real textile industry—<br />for people who want clarity, not comfort.</p>
          <p className="font-body text-industrial-smoke text-sm mb-2">Access is limited. Admission is selective.</p>
          <p className="font-body text-industrial-orange mb-6">Industry is not explained to everyone.</p>
          <Link to="/apply"><Button size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-10 py-6 rounded-none">Request Application Access<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </section>
    </div>
  );
};
