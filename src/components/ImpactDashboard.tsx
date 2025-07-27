import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Recycle, Users, Award, Leaf, Scale } from "lucide-react";
import { impactData } from "@/data/mockData";

const ImpactDashboard = () => {
  const impactMetrics = [
    {
      title: "CO₂ Saved",
      value: `${impactData.totalCO2Saved}kg`,
      description: "Equivalent to planting 22 trees",
      icon: Leaf,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Waste Diverted",
      value: `${impactData.totalWasteDiverted}kg`,
      description: "From ending up in landfills",
      icon: Recycle,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Active Users",
      value: impactData.activeUsers,
      description: "Community members participating",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Exchanges Completed",
      value: impactData.completedExchanges,
      description: "Successful resource transfers",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Community Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real-world impact our community is making through circular resource sharing.
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-1">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Environmental Impact */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-success" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success/10 rounded-lg p-4">
                <h3 className="font-semibold text-success mb-2">CO₂ Emissions Prevented</h3>
                <div className="text-2xl font-bold text-success mb-1">{impactData.totalCO2Saved}kg</div>
                <p className="text-sm text-muted-foreground">
                  Based on FAO methodology: 4.5kg CO₂ equivalent per kg of food waste diverted from landfills
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-primary">22</div>
                  <div className="text-xs text-muted-foreground">Trees equivalent</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-accent">2.1</div>
                  <div className="text-xs text-muted-foreground">Cars off road (days)</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Growth */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Community Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2">Monthly Growth</h3>
                <div className="text-2xl font-bold text-primary mb-1">+{impactData.monthlyGrowth}%</div>
                <p className="text-sm text-muted-foreground">
                  New users and listings continue to grow as awareness spreads
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Listings</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg. Response Time</span>
                  <span className="font-semibold">2.3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Success Rate</span>
                  <span className="font-semibold">89%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stories */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Impact Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-accent text-white">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-semibold mb-2">Farm to Compost</h4>
                <p className="text-sm opacity-90">
                  "Green Valley Farms' tomato surplus became rich compost for our community garden, 
                  feeding 15 local families with fresh vegetables."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🐄</div>
                <h4 className="font-semibold mb-2">Restaurant to Ranch</h4>
                <p className="text-sm opacity-90">
                  "Our daily veggie trimmings now feed happy livestock at Sunset Ranch, 
                  creating a perfect circular loop from kitchen to farm."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-success text-white">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Waste to Energy</h4>
                <p className="text-sm opacity-90">
                  "Grain processing byproducts are now powering biogas production, 
                  generating clean energy for our local community center."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;