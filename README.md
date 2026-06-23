# 🍟 Crunch Chaos — India's Boldest College Snack

Crunch Chaos is a premium, high-fidelity marketing site for a fictional campus snack brand. Built with **React**, **Vite**, **Framer Motion**, and **Vanilla CSS Modules**, this project features interactive animations, a custom responsive grid, dual theme system, and complete SEO/performance optimizations.

---

## 🌟 Key Features

- **Responsive Design System**: Tailored for viewports from `320px` up to `1440px`+ with a standardized visual grid.
- **Micro-interactions & Animations**: Powered by **Framer Motion** for staggered fade-ups, page transitions, and smooth hover scales.
- **Dual-Theme Support**: System-wide theme context switcher (Light / Dark mode) using CSS Custom Variables.
- **Production Enhancements**:
  - Custom playful 404 (NotFound) handler.
  - Initial loader/mount screen with logo pulse animation.
  - Active page SEO (metadata tags and tab title injector).
  - High-performance SVGs, custom image preservation, and proportion scaling rules.
  - Interactive social anchors and keyboard navigation accessibility support.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), Vite 8.
- **Styling**: Vanilla CSS Modules (Variables-driven theme mapping).
- **Motion**: Framer Motion 12.
- **Routing**: React Router DOM 7.

---

## 📂 Project Structure

```
c:/Projects/CC/
├── src/
│   ├── assets/              # SVG vectors (icons, mascot, products)
│   ├── components/          # Reusable UI Blocks (Navbar, Footer, Hero, etc.)
│   ├── context/             # ThemeContext (light/dark state provider)
│   ├── hooks/               # useTheme consumer hook
│   ├── pages/               # Page views (Home, Products, Nutrition, About, Contact, NotFound)
│   ├── styles/              # Global variables, light/dark values, resets
│   ├── App.jsx              # Main App entry with Loading and Router setup
│   └── main.jsx             # React DOM loader
├── index.html               # Baseline HTML index with Favicon and OG meta tags
├── package.json             # Build config and dependency definitions
└── vite.config.js           # Vite bundle presets
```

---

## 💻 Installation & Local Execution

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Steps
1. Navigate to the project root directory:
   ```bash
   cd c:/Projects/CC
   ```
2. Install package dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the web app in your browser at `http://localhost:5173`.

---

## 🎨 Theme System Mechanics

Themes are controlled via the `ThemeContext` under `src/context/ThemeContext.jsx`. The root `<html>` element is tagged with a custom attribute `data-theme="light"` or `data-theme="dark"`.
Styles map parameters (such as `--background`, `--text`, and `--primary`) to standard tokens matching light/dark classes defined in:
- `src/styles/variables.css`
- `src/styles/light.css`
- `src/styles/dark.css`

---

## 📸 Screenshots & Showcase

The website supports light and dark themes out-of-the-box. Below are references for staging visual layouts:

### Staging Layouts
- **Home Page**: Hero segment with staggered badge fades, real-time campus statistics strip, and campus hunger situations card grid.
- **Products Page**: Four curated flavours (Spicy Mango Chaat, Smoky Tandoori Lime, Cheese Bomb Masala, and the Exam Survivor Pack) mapped alongside interactive spice-meters, price ratios, and compatibility metrics.
- **Nutrition Page**: Detail breakdowns of carbohydrates, fats, sodium index, and FSSAI manufacturer compliance.
- **About Page**: Hostel story card transitions alongside the group mascot mascot (`Chacha`).
- **Contact Page**: Logistics delivery speeds, campus locations map markers, and interactive channels links.

---

## 🚀 Future Improvements

- **Direct Cart Checkout**: Hook a headless E-commerce store (e.g. Shopify / MedusaJS API) for direct checkout functionality.
- **Dynamic Blogs**: Connect a headless CMS (Sanity / Contentful) to stream latest campus community blog posts.
