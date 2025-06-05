
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, MessageSquare, Rocket, Target } from "lucide-react";

const TechnicalFounderAdvantage = () => {
  const advantages = [
    {
      icon: Lightbulb,
      title: "Ship Fast",
      description: "Early adopters become contributors. Your technical expertise accelerates development cycles.",
      highlight: "10x faster iteration"
    },
    {
      icon: MessageSquare,
      title: "Engineer-to-Engineer",
      description: "Natural sales motion talking to users who are engineers just like you. No enterprise sales BS.",
      highlight: "Authentic communication"
    },
    {
      icon: Rocket,
      title: "Community Feedback",
      description: "Iterate openly with roadmap driven by real usage. The community becomes your product team.",
      highlight: "Built-in product-market fit"
    },
    {
      icon: Target,
      title: "Technical Merit Wins",
      description: "Success relies on technical excellence rather than strong sales tactics. Build the best tool.",
      highlight: "Quality over pitch"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-200 border-purple-500/30">
            Technical Founder Edge
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Technical Founders Win
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your engineering background isn't just an advantage—it's a superpower in the open source ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {advantage.title}
                      </h3>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                        {advantage.highlight}
                      </Badge>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
          <p className="text-center text-lg text-purple-200">
            <strong>The bottom line:</strong> Technical founders can build, iterate, and sell more naturally in the open source ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFounderAdvantage;
