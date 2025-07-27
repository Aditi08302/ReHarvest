import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrowseListings from "@/components/BrowseListings";
import PostSurplus from "@/components/PostSurplus";
import ImpactDashboard from "@/components/ImpactDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BrowseListings />
      <PostSurplus />
      <ImpactDashboard />
      <Footer />
    </div>
  );
};

export default Index;
