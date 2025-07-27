import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PlusCircle, Upload, Leaf, Calculator } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FormData {
  title: string;
  description: string;
  category: string;
  exchangeType: string;
  quantity: string;
  location: string;
  contactInfo: string;
}

const PostSurplus = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    exchangeType: '',
    quantity: '',
    location: '',
    contactInfo: ''
  });

  const [estimatedImpact, setEstimatedImpact] = useState(0);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Calculate estimated CO2 impact when quantity changes
    if (field === 'quantity') {
      const quantityMatch = value.match(/(\d+)/);
      if (quantityMatch) {
        const kg = parseInt(quantityMatch[1]);
        setEstimatedImpact(kg * 4.5); // FAO metric: 4.5kg CO2 per kg waste
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'category', 'exchangeType', 'quantity', 'location'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate posting
    toast({
      title: "Surplus Posted Successfully! 🌱",
      description: `Your listing "${formData.title}" is now live and can help save ${estimatedImpact}kg of CO₂.`,
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      exchangeType: '',
      quantity: '',
      location: '',
      contactInfo: ''
    });
    setEstimatedImpact(0);
  };

  return (
    <section id="post" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Post Your Surplus
            </h2>
            <p className="text-lg text-muted-foreground">
              Turn your waste into someone else's resource. List your surplus and make an environmental impact.
            </p>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-primary" />
                Create New Listing
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Listing Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Overripe Tomatoes - 20kg"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your surplus, its condition, and any special handling requirements..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Category & Exchange Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agricultural">🌾 Agricultural</SelectItem>
                        <SelectItem value="restaurant">🍽️ Restaurant</SelectItem>
                        <SelectItem value="grocery">🏪 Grocery</SelectItem>
                        <SelectItem value="household">🏠 Household</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Best Use *</Label>
                    <Select value={formData.exchangeType} onValueChange={(value) => handleInputChange('exchangeType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exchange type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compost">🌱 Composting</SelectItem>
                        <SelectItem value="animal-feed">🐄 Animal Feed</SelectItem>
                        <SelectItem value="biogas">⚡ Biogas Production</SelectItem>
                        <SelectItem value="food-bank">🍞 Food Bank</SelectItem>
                        <SelectItem value="craft-material">🎨 Craft Material</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Quantity & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 20kg, 5 bags, 10 liters"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Berkeley Farm, CA"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <Label htmlFor="contactInfo">Contact Information</Label>
                  <Input
                    id="contactInfo"
                    placeholder="Phone number or email (optional)"
                    value={formData.contactInfo}
                    onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                  />
                </div>

                {/* Impact Estimation */}
                {estimatedImpact > 0 && (
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator className="w-5 h-5 text-success" />
                      <h3 className="font-semibold text-success">Estimated Environmental Impact</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-success" />
                      <span className="text-sm">
                        Your listing could save approximately <strong>{estimatedImpact}kg of CO₂</strong> from entering the atmosphere
                      </span>
                    </div>
                  </div>
                )}

                {/* Photo Upload Placeholder */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Add photos of your surplus</p>
                  <p className="text-xs text-muted-foreground">Click to upload or drag and drop (Coming soon)</p>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-gradient-hero text-lg py-6">
                  Post Surplus Listing
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PostSurplus;