# Amonz Digital Gateway

A modern, responsive website for Amonz Group - a leading provider of security solutions, property maintenance, and cleaning services in South Africa.

## About

Amonz Group has been serving clients across South Africa since 2019, offering:
- **Security Solutions**: 24/7 security monitoring, armed response, CCTV installation, and access control systems
- **Property Maintenance**: Complete property care including electrical, plumbing, structural repairs, and renovations
- **Cleaning Services**: Professional commercial and residential cleaning with eco-friendly products

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach with excellent mobile experience
- 🚀 Fast performance with Vite build tool
- ♿ Accessible UI components
- 📧 Contact form with WhatsApp integration
- 🖼️ Gallery showcasing company work
- 🌐 SEO-friendly structure

## Technologies

This project is built with:

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **shadcn/ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd amonz-digital-gateway-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── layout/     # Layout components (Navbar, Footer, etc.)
│   └── ui/         # Reusable UI components (shadcn/ui)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Vercel (see `vercel.json`). You can also deploy to:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting**: Upload the `dist` folder after building

## Contact Information

- **Phone**: +27 83 980 6168
- **Email**: info@amonzgroup.co.za
- **Location**: South Africa (Nationwide service)

## License

This project is private and proprietary.

## Contributing

This is a private project. For any changes or updates, please contact the project maintainers.
