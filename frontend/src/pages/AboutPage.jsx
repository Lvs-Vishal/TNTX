import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { SplitTextReveal, RevealSection } from "@/components/HeroAnimations";
import { RevealHeading, StaggerContainer, StaggerCard } from "@/components/ScrollAnimations";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";



const TimelineStep = ({ step, index }) => {
  const ref = useRevealOnScroll(0.2);
  return (
    <div
      ref={ref}
      className="reveal-block relative bg-industrial-obsidian border border-industrial-zinc p-6 ml-4 group"
    >
      <div className="absolute top-8 -left-[27px] sm:-left-[39px] w-4 h-4 rounded-full bg-industrial-obsidian border-2 border-industrial-zinc group-hover:border-industrial-orange transition-colors duration-300 z-10">
        <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-industrial-orange" />
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <span className="font-heading text-industrial-orange/50 text-4xl sm:text-5xl font-bold leading-none">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <p className="font-heading text-white mb-2 text-xl">{step.title}</p>
          <p className="font-body text-industrial-smoke text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </div>
  );
};

const ImmersionTimeline = ({ steps }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-8">
      <div className="absolute top-0 bottom-0 left-3 sm:left-[19px] w-[2px] bg-industrial-zinc" />
      <div className="space-y-12">
        {steps.map((step, i) => (
          <TimelineStep key={i} step={step} index={i} />
        ))}
      </div>
    </div>
  );
};

const RevealTableRow = ({ row }) => {
  const ref = useRevealOnScroll(0.3);
  return (
    <tr
      ref={ref}
      className="reveal-block border-b border-industrial-zinc group hover:bg-[rgba(200,80,10,0.05)]"
    >
      <td className="py-4 px-4 font-body text-white align-top transition-colors group-hover:text-industrial-orange">{row.curriculum}</td>
      <td className="py-4 px-4 font-body text-industrial-smoke align-top">{row.reality}</td>
    </tr>
  );
};

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
    <div className="pt-16 overflow-x-hidden">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-industrial-obsidian relative">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-spinning-mill.png" alt="Spinning Mill" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-heading text-white mb-8 leading-tight flex flex-wrap gap-2">
            <SplitTextReveal text="The Blind Spot in" delay={0.2} />
            <span className="text-industrial-orange inline-block">
              <SplitTextReveal text="Global Fashion" delay={0.6} />
            </span>
          </h1>
          <p
            className="font-body text-xl md:text-2xl text-industrial-smoke leading-relaxed mt-10"
            style={{ opacity: 0, animation: "pageFadeIn 0.8s ease 1.2s forwards" }}
          >
            If you studied fashion or textiles in the West, you possess a vocabulary without a language. You know fibers, fabric names, and sustainability concepts. But unless you have stood on a factory floor in India, you have likely never seen how the world's clothing is actually made.
          </p>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">

          <RevealSection className="mt-20 sm:mt-32">
            <p className="font-body text-industrial-smoke text-lg mb-6 leading-relaxed">
              This gap is not your fault—it is a structural flaw in Western textile education. But in the commercial world, this gap costs money.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* The Classroom vs. The Floor */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-5xl mx-auto px-4">
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">The Classroom vs. <span className="text-industrial-orange">The Floor</span></h2>
          </RevealHeading>
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
                  <RevealTableRow key={i} row={row} />
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
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">Why Tamil Nadu? <span className="text-industrial-orange">The Vertical Titan.</span></h2>
          </RevealHeading>
          <p className="font-body text-white mb-6 leading-relaxed">
            Tamil Nadu is not just a sourcing destination; it is a hyper-dense manufacturing ecosystem. It is one of the few places on earth where the entire supply chain exists within a drivable radius.
          </p>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            We take you inside the specialized hubs that power global brands:
          </p>

          <StaggerContainer className="space-y-4">
            {hubs.map((hub, i) => (
              <StaggerCard key={i} className="bg-industrial-obsidian border border-industrial-zinc p-6 flex items-start gap-4 hover:border-industrial-orange/50 transition-colors">
                <div className="relative flex h-4 w-4 mt-1 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-industrial-orange"></span>
                </div>
                <div>
                  <p className="font-heading text-white mb-2 text-lg relative z-20">{hub.name}:</p>
                  <p className="font-body text-industrial-smoke text-sm relative z-20">{hub.desc}</p>
                </div>
              </StaggerCard>
            ))}
          </StaggerContainer>

          <p className="font-body text-industrial-orange mt-8 leading-relaxed">
            Don't just visit factories; trace the lifeline of a garment from dirt to distribution.
          </p>
        </div>
      </section>

      {/* Philosophy: Anti-Tourism */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">Our Philosophy: <span className="text-industrial-orange">This is Anti-Tourism</span></h2>
          </RevealHeading>
          <p className="font-body text-white mb-8 leading-relaxed text-lg">
            There are no welcome drinks, no rehearsed presentations, and no sanitized walkways.
          </p>

          <RevealSection>
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
          </RevealSection>
        </div>
      </section>

      {/* The Immersion Structure */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">The Immersion <span className="text-industrial-orange">Structure</span></h2>
          </RevealHeading>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            We follow the logic of the machine, not the textbook.
          </p>

          <ImmersionTimeline steps={immersionSteps} />
        </div>
      </section>

      {/* The Commercial Edge (ROI) */}
      <section className="py-20 bg-industrial-obsidian">
        <div className="max-w-4xl mx-auto px-4">
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">The Commercial Edge <span className="text-industrial-orange">(ROI)</span></h2>
          </RevealHeading>
          <p className="font-body text-white mb-8 leading-relaxed text-lg">
            This program is an investment in your professional authority. Participants leave with:
          </p>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {roiPoints.map((point, i) => (
              <StaggerCard key={i} className="bg-industrial-steel border border-industrial-zinc p-6">
                <TrendingUp className="h-8 w-8 text-industrial-orange mb-4 relative z-20" />
                <p className="font-heading text-white mb-3 text-lg relative z-20">{point.title}</p>
                <p className="font-body text-industrial-smoke text-sm leading-relaxed relative z-20">{point.desc}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Admission */}
      <section className="py-20 bg-industrial-steel">
        <div className="max-w-4xl mx-auto px-4">
          <RevealHeading className="mb-8 flex justify-start">
            <h2 className="text-3xl sm:text-4xl font-heading text-white"><span className="text-industrial-orange">Admission</span></h2>
          </RevealHeading>
          <p className="font-body text-white mb-6 leading-relaxed text-lg">
            This is a gateway to the real industry for those who value clarity over comfort.
          </p>
          <p className="font-body text-industrial-smoke mb-8 leading-relaxed">
            Access is limited. We select cohorts based on their ability to handle the intensity of the floor.
          </p>

          <RevealSection className="text-center">
            <div className="bg-industrial-obsidian border-t-4 border-industrial-orange p-8">
              <p className="font-heading text-white text-2xl mb-8 leading-tight">
                Industry is not explained to everyone. <br />
                <span className="text-industrial-orange">It is shown to those who show up.</span>
              </p>
              <a href="https://forms.zohopublic.in/infotn1/form/TNTXImmersionApplication/formperma/zded7NgrSJ-7r1zRh1ZUYUSVhksII_Rb5Ienz6J8E7Y" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-primary bg-industrial-orange hover:bg-industrial-orange/90 text-white font-heading uppercase tracking-widest px-10 py-6 rounded-none">
                  Apply for the Intensive
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};
