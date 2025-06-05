
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Users, DollarSign } from "lucide-react";

const SuccessStories = () => {
  const companies = [
    {
      name: "GitLab",
      description: "DevOps platform that grew from OSS to enterprise powerhouse",
      metrics: { users: "30M+", valuation: "$60B IPO", model: "Open Core" },
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Supabase",
      description: "Firebase alternative with open source core and paid cloud",
      metrics: { users: "200K+", valuation: "$2B", model: "OSS + Cloud" },
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Airbyte",
      description: "Open source ELT pipelines with commercial cloud offering",
      metrics: { users: "15K+", valuation: "$1.5B", model: "Open Core" },
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Redpanda",
      description: "Kafka-compatible event streaming with commercial support",
      metrics: { users: "10K+", valuation: "$600M", model: "OSS + Support" },
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-200 border-green-500/30">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learn from the Best
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            These companies started as open source projects and became the standard choice for engineers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-600 backdrop-blur-sm hover:border-slate-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${company.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {company.name[0]}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {company.name}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">{company.metrics.users}</div>
                    <div className="text-xs text-slate-500">Users</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">{company.metrics.valuation}</div>
                    <div className="text-xs text-slate-500">Valuation</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <GitBranch className="w-4 h-4 text-purple-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">{company.metrics.model}</div>
                    <div className="text-xs text-slate-500">Model</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30">
            <span className="mr-2">🏆</span>
            YC has funded 150+ open source companies
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
