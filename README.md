# ROOMEE - Real Estate Marketplace 🏢

**Live Demo:** [https://roomee-trial.vercel.app](https://roomee-trial.vercel.app)

ROOMEE is a modern, fast, and responsive real estate marketplace tailored specifically for **Tier 2 and Tier 3 cities** in India (such as Indore, Bhopal, Jabalpur, Gwalior, Rewa, and Satna). The platform focuses on solving the primary pain points of renting: eliminating heavy 10-month deposits, removing brokers, and facilitating hassle-free mid-term rentals for students and young professionals.

---

## 🎯 Project Objectives

1. **Regional Focus:** Shift the rental market focus from saturated metropolitan hubs to rapidly growing Tier 2 and Tier 3 cities where digital real estate solutions are scarce.
2. **Affordability:** Reflect realistic, affordable pricing models (e.g., rents ranging from ₹4,000 to ₹25,000) rather than inflated metro pricing.
3. **Accessibility & Usability:** Provide a premium, dark-mode focused UI that is fully responsive and highly accessible across all devices.

---

## ✨ Key Features

- **Authentication System:** Integrated Context API based authentication handling login, signup, and session persistence (via localStorage) with dynamic header updates.
- **Dynamic Property Listings:** Browsable catalog of 12 distinct, highly detailed properties complete with local, realistic AI-generated imagery for Tier 2 homes.
- **Advanced Search & Filtering:**
  - Filter by specific Tier 2/3 cities.
  - Granular price slider tailored to affordable regional rents (Max ₹30k+).
  - Quick toggles for *Bachelor Friendly*, *Near Metro*, *Furnished*, and *Verified* properties.
- **Immersive Property Details:** 
  - Comprehensive image gallery.
  - Detailed landlord profiles and property amenities.
  - Interactive booking/reservation form modal with seamless date selection.
  - Embedded Google Maps for accurate local area representation.
- **Post a Property Flow:** A sleek, multi-step form allowing landlords to list properties with context-aware placeholders (e.g., suggesting local landmarks like "Civil Lines" or "Palasia Square").
- **Responsive Design:** A mobile-first approach using Tailwind CSS, ensuring pixel-perfect layouts on smartphones, tablets, and desktops.

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with custom glassmorphism effects and modern UI patterns)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 🚀 Local Installation & Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/7Aryannn/roomee-trial.git
   cd roomee-trial
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to `http://localhost:5173`.

---

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (Auth modals, Buttons, Cards)
│   ├── home/         # Homepage specific components (Hero, Testimonials, Stats)
│   └── ...
├── context/          # React Context providers (AuthContext)
├── data/             # Mock database and static assets (mockProperties.ts)
├── layouts/          # Global layout wrappers (Header, Footer)
├── pages/            # Primary route views (Home, SearchListings, PropertyDetail, PostProperty)
├── types/            # Global TypeScript interfaces and type definitions
├── App.tsx           # Main application entry point and router configuration
└── index.css         # Global stylesheet and Tailwind directives
```

---

## 🎨 Design & Assets
- **Aesthetic:** Dark mode, neon accents (blue/violet/emerald), glassmorphism (frosted glass overlays), and dynamic micro-animations.
- **Images:** All property images are custom-generated, locally hosted realistic assets specifically designed to represent modest Indian homes, PG rooms, and apartments, ensuring they never suffer from dead or broken external links.

---

## 📅 Future Roadmap
- Integration with Supabase for real-time backend database and production authentication.
- Real-time chat functionality between prospective tenants and landlords.
- Digital rent agreement generation and electronic signing.
- Integration of a payment gateway for secure deposit handling.
