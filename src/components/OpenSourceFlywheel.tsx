
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Users, Building, DollarSign } from "lucide-react";

const OpenSourceFlywheel = () => {
  const steps = [
    {
      icon: Code,
      title: "Open Source Core",
      description: "MIT/Apache licensed, actively maintained, transparent roadmap",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Developer Adoption",
      description: "Community growth, contributions, mindshare in engineering teams",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      title: "Enterprise Interest",
      description: "Companies seek support, compliance, SLAs for critical workloads",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: DollarSign,
      title: "Commercial Layer",
      description: "Hosted SaaS, enterprise features, support contracts",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/30">
            The Open Source Flywheel
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From Project to Business
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The proven path from open source project to commercial success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
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
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-slate-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceFlywheel;
