# LUXE - Premium E-Commerce

A modern, responsive e-commerce shopping website built with React and Vite.

## Features

- Product catalog with filtering and sorting
- Product details with related items
- Shopping cart with quantity management
- User authentication pages (Login/Register)
- Responsive design for all devices
- Clean, modern UI

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `https://atelier-ecommerce.onrender.com/`

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout
│   ├── product/         # ProductCard
│   └── ui/              # Reusable UI components
├── context/             # Cart context
├── data/                # Product data
├── hooks/               # Custom hooks
├── pages/               # Page components
└── lib/                 # Utilities
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
