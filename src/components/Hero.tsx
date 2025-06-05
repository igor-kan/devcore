
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <Badge variant="secondary" className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
          <GitBranch className="w-4 h-4 mr-2" />
          Commercial Open Source Companies
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
          DevCore
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
          Build Open Source Projects That
        </p>
        
        <div className="text-2xl md:text-3xl font-semibold mb-8 space-y-2">
          <div className="flex items-center justify-center gap-4 text-purple-300">
            <Users className="w-8 h-8" />
            <span>Engineers Love</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-blue-300">
            <Zap className="w-8 h-8" />
            <span>Enterprises Adopt</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-cyan-300">
            <GitBranch className="w-8 h-8" />
            <span>The World Depends On</span>
          </div>
        </div>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Technical founders have a unique advantage in building commercial open source companies. 
          Move faster, iterate with community feedback, and sell to engineers who understand the value.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
            Start Your OSS Company
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20 px-8 py-3 text-lg">
            View Success Stories
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-slate-500">
          <p>Inspired by Nicolas Dessaigne's vision • 150+ YC-funded OSS companies</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
