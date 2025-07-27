# 🌾 ReHarvest – Reclaim. Reuse. Reharvest.

A circular economy platform that transforms food and agricultural surplus into community resources. Built in under 5 hours for the **Amazon Hackathon 2025**, ReHarvest enables farmers, restaurants, and composters to exchange surplus produce and byproducts — promoting food reuse, carbon footprint reduction, and sustainability at the local level.

---

## 🌍 Problem Statement

Farms and restaurants regularly discard perfectly reusable food and byproducts due to a lack of local reuse infrastructure. Meanwhile, composters, animal farms, food banks, and biogas producers are actively seeking low-cost organic inputs.  
**ReHarvest bridges this gap** through a smart, hyperlocal surplus exchange platform.

---

## ✨ Key Features

- ✅ **Post Listing**: Submit surplus food/agri byproducts (e.g., carrot tops, tomato scraps)
- 🔍 **Browse Listings**: View available waste resources from local users
- 🧠 **Smart Matching**: Simple logic recommends matches based on category + exchange type
- 📊 **Impact Dashboard**: Tracks total food diverted and CO₂ saved using FAO-based estimates
- 🧪 **Filter by Category/Type**: Quickly find the items you can use or donate
- 🧺 **Mock Data Preloaded**: Demo-ready with sample listings for instant testing

---

## 🛠 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js               |
| Styling      | Tailwind CSS           |
| State Mgmt   | React useState         |
| Routing      | React Router DOM       |
| Charting     | Chart.js / Recharts    |
| Backend (MVP)| Firebase Firestore (or local state) |
| Hosting      | Netlify / Vercel       |

---

## 📊 CO₂ Impact Estimation

We use FAO’s estimate of **4.5 kg of CO₂ equivalent per 1 kg of food waste** to quantify sustainability metrics.

```js
const co2Saved = totalQuantityKg * 4.5;
```
 The total CO₂ savings and food diverted are visualized on the Impact Dashboard using Chart.js or Recharts.
 
---

## 💼 Business Model
### Model	Description:
- Freemium SaaS	Free usage + premium analytics & alerts
- B2B Logistics Cut	Commission per pickup integration
- Carbon Credit Sales	Offset emissions tracking monetized via carbon markets
- Data-as-a-Service	Trend APIs sold to researchers and policy agencies
- City Licensing	White-labeled versions for municipalities & NGOs

---

## ♻️ Sustainability Impact
### Metric	Description:
- 🧺 Food Waste Diverted	Keeps usable byproducts out of landfills
- 💨 CO₂ Emissions Avoided	Prevents methane emissions using FAO baseline
- 🔁 Circular Practices	Waste becomes compost, animal feed, or biogas input
- 🌱 Soil Health	Encourages nutrient recycling through composting

---

## 👥 Community Impact
- Connects farmers, food businesses, composters & nonprofits
- Enables hyperlocal sustainability exchanges
- Helps small players access larger sustainability networks
- Drives behavioral change through education and metrics

---

🧠 Why ReHarvest Stands Out
- 🔁 Agri Byproduct Focus: Goes beyond edible food donation
- 📍 Hyperlocal Reuse: Enables circular systems in small communities
- 📊 Impact Tracking: Visual metrics tied to real environmental value
- ⚡ Hackathon Ready: Built in 5 hours, yet ready for scale
- 🌿 Built for Circularity: Not just a project — a vision for zero-waste loops

---

## 📄 License
MIT License © 2025 – Amazon Hackathon Project by [ReHarvest]
