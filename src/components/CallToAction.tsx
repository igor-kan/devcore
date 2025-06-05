
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, ArrowRight, Github, MessageCircle, BookOpen } from "lucide-react";

const CallToAction = () => {
  const nextSteps = [
    {
      icon: Github,
      title: "README & Launch Checklist",
      description: "Scaffold your first open source project with best practices"
    },
    {
      icon: MessageCircle,
      title: "Governance Models",
      description: "Set up sustainable community management and contribution processes"
    },
    {
      icon: BookOpen,
      title: "YC-Style Pitch Deck",
      description: "Craft your investor story for commercial OSS success"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border-purple-500/30">
            <Rocket className="w-4 h-4 mr-2" />
            Ready to Build?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Start Your OSS Journey
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            You have the expertise, the community is waiting. Let's build something that 
            <strong className="text-purple-300"> outlasts hype cycles</strong> and becomes the 
            <strong className="text-cyan-300"> default choice</strong> for developers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {nextSteps.map((step, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-600 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-semibold group">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-6 text-slate-500 text-sm">
            Join the next generation of commercial open source companies
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-600 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              "Open source companies move more quickly than closed source companies"
            </h3>
            <p className="text-slate-300 mb-2">— Nicolas Dessaigne</p>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Y Combinator Partner
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
