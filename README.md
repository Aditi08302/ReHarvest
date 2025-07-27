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

## 📂 Folder Structure

reharvest/
├── public/
├── src/
│ ├── components/
│ │ ├── PostForm.jsx
│ │ ├── BrowseListings.jsx
│ │ ├── ListingCard.jsx
│ │ ├── ImpactDashboard.jsx
│ │ ├── ImpactChart.jsx
│ │ ├── FilterBar.jsx
│ │ └── Navbar.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
└── README.md
