
import Hero from "@/components/Hero";
import OpenSourceFlywheel from "@/components/OpenSourceFlywheel";
import TechnicalFounderAdvantage from "@/components/TechnicalFounderAdvantage";
import SuccessStories from "@/components/SuccessStories";
import ProductIdeas from "@/components/ProductIdeas";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <OpenSourceFlywheel />
      <TechnicalFounderAdvantage />
      <ProductIdeas />
      <SuccessStories />
      <CallToAction />
    </div>
  );
};

export default Index;
