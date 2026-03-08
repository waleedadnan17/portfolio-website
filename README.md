# Personal Developer Portfolio

A modern, high-performance personal portfolio built specifically for a Computer Science student or Software Engineer. Features a dark-mode glassmorphism aesthetic with engaging scroll animations.

![Portfolio Preview Showcase](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200)

## 🌟 Features

- **Immersive Hero Section:** Animated typewriter effect and dynamic glowing background orbs.
- **Glassmorphism UI:** Premium frosted-glass cards with subtle blur and border effects applied using Tailwind CSS.
- **Smooth Scroll Navigation:** Integrated React Scroll for seamless anchor point navigation across the single-page application.
- **Projects Grid:** Featured project cards highlighting tech stacks, GitHub repos, and Live Demo links.
- **Vertical Experience Timeline:** An elegant timeline visualizing internships and education history.
- **Fully Responsive:** Mobile-first design perfectly adapted down to smartphone widths.
- **Contact Form ready:** Designed specifically for Formspree or direct `mailto:` actions.

## 🧱 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Others:** `react-simple-typewriter`, `react-scroll`

## 🚀 Getting Started Locally

To run this portfolio locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

## �️ Customization Guide

Edit the following files in the `src/components/` folder to make this portfolio your own:

- `Hero.jsx`: Name, tagline, and typewriter text.
- **Resume:** Place your specific CV PDF in the `/public` folder and name it `resume.pdf`.
- `About.jsx`: Short bio and current degree status.
- `Projects.jsx`: Update the `projects` array with your actual project data.
- `Experience.jsx`: Update the `timelineData` array with your work and education history.
- `Skills.jsx`: Modify your core competencies in the `skillCategories` array.
- `Contact.jsx` & `Footer.jsx`: Add your specific GitHub/LinkedIn links and update the Form action URL.

## 🌐 Deployment

This project is perfectly optimized for free hosting on [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Log into Vercel and click **Add New Project**.
3. Import this repository. Wait 30 seconds for the build to finish.
4. Your site is live!

---

*Designed and implemented with precision for the modern software engineer.*
