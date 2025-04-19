
import HeroSection from "@/components/HeroSection";

import FeatureCourses from "@/components/FeatureCourse";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Saurabh Verma</h1>
      <HeroSection />
      <FeatureCourses/>
      <WhyChooseUs/>  
    </main>
  );
}
