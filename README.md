# VNSH Laser Strike Training System

A modern, responsive React/Next.js application for the VNSH Laser Strike Training System.

## Features

- **Modern React with TypeScript**: Type-safe codebase for better developer experience
- **Next.js 13 with App Router**: For optimal performance and SEO
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Fully Responsive**: Works on all device sizes
- **Optimized Performance**: Fast loading and smooth animations
- **Accessibility**: Built with accessibility in mind

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vnsh-drm-nextjs-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Project Structure

```
src/
  app/                  # App router
    globals.css         # Global styles
    layout.tsx          # Root layout
    page.tsx            # Home page
  components/
    layout/             # Layout components (Header, Footer, etc.)
    sections/           # Page sections
    ui/                 # Reusable UI components
  public/               # Static files
    images/             # Image assets
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Deployment

This project is configured for static export and can be deployed to any static hosting service:

1. Build the static files:
   ```bash
   npm run build
   npm run export
   ```

2. Deploy the `out` directory to your hosting service.

## License

This project is proprietary and confidential.
