import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, TrendingUp } from "lucide-react";

export const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const tableData = [
    { curriculum: "Fiber Properties", reality: "Properties change based on the spinner's speed and humidity." },
    { curriculum: "Sustainability", reality: "A concept until you see the cost of Zero Liquid Discharge (ZLD)." },
    { curriculum: "Design", reality: "A vision that fights against machine limitations and MOQs." },
    { curriculum: "Production", reality: "Linear and logical. (In reality: Chaotic, circular, and driven by crisis management.)" }
  ];

  const hubs = [
    { name: "Coimbatore", desc: "The spinning capital where raw cotton becomes yarn." },
    { name: "Tirupur", desc: "The global knitwear hub handling massive scale garmenting." },
    { name: "Erode & Salem", desc: "The centers of weaving, processing, and dyeing." }
  ];

  const immersionSteps = [
    { title: "The Source (Spinning)", desc: "Understanding micronaire, staple length, and how yarn quality dictates final garment price." },
    { title: "The Structure (Weaving/Knitting)", desc: "Seeing the physical limitations of speed vs. design complexity." },
    { title: "The Transformation (Processing/Dyeing)", desc: "The chemical reality. Water usage, effluent treatment, and color matching under pressure." },
    { title: "The Assembly (Garmenting)", desc: "Line balancing, bottleneck identification, and the human element of production." },
    { title: "The Business (Logistics & Costing)", desc: "How Incoterms, currency fluctuation, and port delays kill margins." }
  ];

  const roiPoints = [
    { title: "Sourcing Leverage", desc: "You will know exactly when a supplier is bluffing about lead times or costs." },
    { title: "Technical Empathy", desc: "You will design products that factories *want* to make, reducing your defect rates." },
    { title: "Price Literacy", desc: "You will understand the breakdown of a penny, allowing you to negotiate from a place of logic, not just aggression." }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-industrial-obsidian relative">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-spinning-mill.png" alt="Spinning Mill" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl font-heading text-white mb-8 leading-tight">
            The Blind Spot in <span className="text-industrial-orange">Global Fashion</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-lg text-industrial-smoke leading-relaxed">
            If you studied fashion or textiles in the West, you possess a vocabulary without a language. You know fibers, fabric names, and sustainability concepts. But unless you have stood on a factory floor in India, you have likely never seen how the world's clothing is actually made.
          </motion.p>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-body text-white text-lg mb-6 leading-relaxed">
            You haven't watched a spinning mill manager decide quality grades while watching cotton prices fluctuate live. You haven't seen how a single yarn defect creates a fabric disaster 500 meters later. You don't know why a price quoted on Monday is invalid by Wednesday.
          </p>
          <p className="font-body text-industrial-smoke mb-6 leading-relaxed">
            This gap is not your fault—it is a structural flaw in Western textile education. But in the commercial world, this gap costs money.
          </p>
        </div>
      </section>

      {/* The Classroom vs. The Floor */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            The Classroom vs. <span className="text-industrial-orange">The Floor</span>
          </h2>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            Textile degrees in the US and Europe are sanitized. They teach you the ideal; we show you the compromise.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-industrial-orange">
                  <th className="text-left py-4 px-4 font-heading text-white text-lg">The Curriculum</th>
                  <th className="text-left py-4 px-4 font-heading text-industrial-orange text-lg">The Commercial Reality</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-industrial-zinc">
                    <td className="py-4 px-4 font-body text-white align-top">{row.curriculum}</td>
                    <td className="py-4 px-4 font-body text-industrial-smoke align-top">{row.reality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-body text-white mt-8 leading-relaxed">
            Without witnessing these collisions, graduates—and even mid-level professionals—enter the industry overconfident and under-prepared.
          </p>
        </div>
      </section>

      {/* Why Tamil Nadu */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            Why Tamil Nadu? <span className="text-industrial-orange">The Vertical Titan.</span>
          </h2>
          <p className="font-body text-white mb-6 leading-relaxed">
            Tamil Nadu is not just a sourcing destination; it is a hyper-dense manufacturing ecosystem. It is one of the few places on earth where the entire supply chain exists within a drivable radius.
          </p>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            We take you inside the specialized hubs that power global brands:
          </p>

          <div className="space-y-4">
            {hubs.map((hub, i) => (
              <div key={i} className="bg-industrial-obsidian border border-industrial-zinc p-6 flex items-start gap-4">
                <Factory className="h-5 w-5 text-industrial-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-white mb-2">{hub.name}:</p>
                  <p className="font-body text-industrial-smoke text-sm">{hub.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-industrial-orange mt-8 leading-relaxed">
            Here, you don't just visit factories; you trace the lifeline of a garment from dirt to distribution.
          </p>
        </div>
      </section>

      {/* Philosophy: Anti-Tourism */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            Our Philosophy: <span className="text-industrial-orange">This is Anti-Tourism</span>
          </h2>
          <p className="font-body text-white mb-8 leading-relaxed text-lg">
            We do not offer "Industrial Tourism." There are no welcome drinks, no rehearsed presentations, and no sanitized walkways.
          </p>

          <div className="bg-industrial-steel border border-industrial-orange/30 p-8">
            <p className="font-heading text-industrial-orange mb-6 text-lg">The Access:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-industrial-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-white mb-1">Unfiltered Operations:</p>
                  <p className="font-body text-industrial-smoke text-sm">You will walk floors where noise levels are high, temperatures are real, and deadlines are tight.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-industrial-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-white mb-1">Real-Time Crisis:</p>
                  <p className="font-body text-industrial-smoke text-sm">If a machine breaks or a color lot fails while we are there, you will watch how the floor manager solves it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-industrial-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-white mb-1">Financial Transparency:</p>
                  <p className="font-body text-industrial-smoke text-sm">We discuss margins, labor costs, and the "hidden" costs of defects that never make it to a spreadsheet.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Immersion Structure */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            The Immersion <span className="text-industrial-orange">Structure</span>
          </h2>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            We follow the logic of the machine, not the textbook.
          </p>

          <div className="space-y-4">
            {immersionSteps.map((step, i) => (
              <div key={i} className="bg-industrial-obsidian border-l-4 border-industrial-orange p-6">
                <div className="flex items-start gap-4">
                  <span className="font-heading text-industrial-orange text-3xl font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-heading text-white mb-2 text-lg">{step.title}</p>
                    <p className="font-body text-industrial-smoke text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Commercial Edge (ROI) */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            The Commercial Edge <span className="text-industrial-orange">(ROI)</span>
          </h2>
          <p className="font-body text-white mb-8 leading-relaxed text-lg">
            This program is an investment in your professional authority. Participants leave with:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {roiPoints.map((point, i) => (
              <div key={i} className="bg-industrial-steel border border-industrial-zinc p-6">
                <TrendingUp className="h-8 w-8 text-industrial-orange mb-4" />
                <p className="font-heading text-white mb-3">{point.title}</p>
                <p className="font-body text-industrial-smoke text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-heading text-white mb-8">
            <span className="text-industrial-orange">Admission</span>
          </h2>
          <p className="font-body text-white mb-6 leading-relaxed text-lg">
            This is a gateway to the real industry for those who value clarity over comfort.
          </p>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            Access is limited. We select cohorts based on their ability to handle the intensity of the floor.
          </p>

          <div className="bg-industrial-obsidian border-t-4 border-industrial-orange p-8 text-center">
            <p className="font-heading text-white text-2xl mb-8 leading-tight">
              Industry is not explained to everyone. <br />
              <span className="text-industrial-orange">It is shown to those who show up.</span>
            </p>
            <Link to="/apply">
              <Button size="lg" className="btn-slide bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-10 py-6 rounded-none">
                Apply for the Intensive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
