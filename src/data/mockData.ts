export interface SurplusListing {
  id: string;
  title: string;
  description: string;
  category: 'agricultural' | 'restaurant' | 'grocery' | 'household';
  exchangeType: 'compost' | 'animal-feed' | 'biogas' | 'food-bank' | 'craft-material';
  quantity: string;
  location: string;
  postedBy: string;
  postedDate: string;
  estimatedCO2Saved: number; // kg
  status: 'available' | 'pending' | 'completed';
  images?: string[];
}

export const mockListings: SurplusListing[] = [
  {
    id: '1',
    title: 'Overripe Tomatoes - 20kg',
    description: 'Fresh tomatoes that are past retail quality but perfect for composting or animal feed. Organic, pesticide-free.',
    category: 'agricultural',
    exchangeType: 'compost',
    quantity: '20kg',
    location: 'Berkeley Farm, CA',
    postedBy: 'Green Valley Farms',
    postedDate: '2024-01-20',
    estimatedCO2Saved: 90,
    status: 'available'
  },
  {
    id: '2',
    title: 'Coffee Grounds & Filters',
    description: 'Daily coffee grounds and paper filters from our café. Great nitrogen source for composting.',
    category: 'restaurant',
    exchangeType: 'compost',
    quantity: '5kg daily',
    location: 'Downtown Café, Portland',
    postedBy: 'Brew & Bean Café',
    postedDate: '2024-01-19',
    estimatedCO2Saved: 22.5,
    status: 'available'
  },
  {
    id: '3',
    title: 'Vegetable Trimmings',
    description: 'Mixed vegetable peels and trimmings from food prep. Includes carrots, potatoes, onions.',
    category: 'restaurant',
    exchangeType: 'animal-feed',
    quantity: '15kg',
    location: 'Farm-to-Table Restaurant, Austin',
    postedBy: 'Harvest Kitchen',
    postedDate: '2024-01-18',
    estimatedCO2Saved: 67.5,
    status: 'pending'
  },
  {
    id: '4',
    title: 'Stale Bread & Pastries',
    description: 'Day-old bread and pastries, still good quality but not sellable. Great for animal feed or food banks.',
    category: 'grocery',
    exchangeType: 'food-bank',
    quantity: '8kg',
    location: 'Artisan Bakery, Seattle',
    postedBy: 'Golden Grain Bakery',
    postedDate: '2024-01-17',
    estimatedCO2Saved: 36,
    status: 'available'
  },
  {
    id: '5',
    title: 'Grain Chaff & Husks',
    description: 'Wheat and oat processing byproducts. Excellent for biogas production or animal bedding.',
    category: 'agricultural',
    exchangeType: 'biogas',
    quantity: '50kg',
    location: 'Heritage Mills, Iowa',
    postedBy: 'Midwest Grain Co.',
    postedDate: '2024-01-16',
    estimatedCO2Saved: 225,
    status: 'available'
  },
  {
    id: '6',
    title: 'Fruit Pulp from Juicing',
    description: 'Apple and orange pulp from fresh juice production. High in nutrients, perfect for composting.',
    category: 'restaurant',
    exchangeType: 'compost',
    quantity: '12kg',
    location: 'Fresh Squeeze Juice Bar, LA',
    postedBy: 'Vitamin Boost Juicery',
    postedDate: '2024-01-15',
    estimatedCO2Saved: 54,
    status: 'completed'
  }
];

export const impactData = {
  totalCO2Saved: 495, // kg CO2 equivalent
  totalWasteDiverted: 110, // kg of waste
  activeUsers: 47,
  completedExchanges: 12,
  monthlyGrowth: 23 // percentage
};

export const categoryOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'agricultural', label: 'Agricultural' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'grocery', label: 'Grocery' },
  { value: 'household', label: 'Household' }
];

export const exchangeTypeOptions = [
  { value: 'all', label: 'All Exchange Types' },
  { value: 'compost', label: 'Composting' },
  { value: 'animal-feed', label: 'Animal Feed' },
  { value: 'biogas', label: 'Biogas Production' },
  { value: 'food-bank', label: 'Food Bank' },
  { value: 'craft-material', label: 'Craft Material' }
];