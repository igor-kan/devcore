
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Server, Database, Shield, Workflow } from "lucide-react";

const ProductIdeas = () => {
  const categories = [
    {
      id: "frameworks",
      title: "Frameworks & Tooling",
      icon: Code,
      color: "purple",
      ideas: [
        "Next-gen React alternatives (Solid, Qwik style)",
        "Serverless-native frameworks",
        "Edge-first API frameworks",
        "Real-time/streaming data for IoT, multiplayer, AI"
      ]
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      icon: Server,
      color: "blue",
      ideas: [
        "GitOps-first deployment tools",
        "ML Ops for mid-size companies",
        "Kubernetes cost optimization",
        "Multi-cloud orchestration platforms"
      ]
    },
    {
      id: "data",
      title: "Data & AI",
      icon: Database,
      color: "cyan",
      ideas: [
        "Open-source vector database for RAG",
        "Multi-modal data pipelines (video, audio, sensors)",
        "Explainable ML dashboards",
        "Privacy-first analytics frameworks"
      ]
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: Shield,
      color: "green",
      ideas: [
        "Dev-friendly policy engines (better UX than OPA)",
        "SAST/DAST for monorepos/microservices",
        "Privacy-compliant analytics",
        "Zero-trust security for developers"
      ]
    },
    {
      id: "workflow",
      title: "Workflow & Collaboration",
      icon: Workflow,
      color: "orange",
      ideas: [
        "Document-based apps with real-time sync",
        "IDE plugins for AI code suggestions",
        "Code review automation tools",
        "Developer productivity analytics"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600 bg-purple-500/20 text-purple-200 border-purple-500/30",
      blue: "from-blue-500 to-blue-600 bg-blue-500/20 text-blue-200 border-blue-500/30",
      cyan: "from-cyan-500 to-cyan-600 bg-cyan-500/20 text-cyan-200 border-cyan-500/30",
      green: "from-green-500 to-green-600 bg-green-500/20 text-green-200 border-green-500/30",
      orange: "from-orange-500 to-orange-600 bg-orange-500/20 text-orange-200 border-orange-500/30"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-200 border-cyan-500/30">
            Product Inspiration
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Product Ideas
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Build in your domain of expertise. Here are proven categories where OSS companies thrive.
          </p>
        </div>

        <Tabs defaultValue="frameworks" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-slate-800/50 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                <category.icon className="w-4 h-4 mr-1" />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.ideas.map((idea, index) => (
                      <div key={index} className="p-4 bg-slate-900/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors">
                        <p className="text-slate-300">{idea}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-600">
          <p className="text-center text-slate-300">
            <strong>Remember:</strong> Start with a single killer feature that's 10x easier/better than alternatives. 
            Build around a pain that devs complain about daily in Slack/Reddit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductIdeas;
