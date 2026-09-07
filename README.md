# Chanales Flores Portfolio

A responsive, single-page software engineering portfolio built with Astro. The site introduces Chanales Flores, highlights professional experience, and provides direct links to email, LinkedIn, and GitHub.

## Features

- Home, About, and Experience sections
- Responsive desktop and mobile navigation
- Light and dark themes with a persistent theme preference
- Active navigation that follows the visible page section
- Data-driven work-experience timeline
- Custom pixel-art hero artwork for both themes
- Accessible labels, keyboard focus states, and reduced-motion support

## Tech Stack

- [Astro](https://astro.build/)
- [Lucide](https://lucide.dev/) and [Astro Icon](https://www.astroicon.dev/) for icons
- Component-scoped CSS and vanilla JavaScript

## Requirements

- Node.js 22.12.0 or newer
- npm

## Getting Started

Install the dependencies:

```sh
npm install
```

Start the Astro development server in the background:

```sh
npx astro dev --background
```

Astro provides commands for managing the background server:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the development server in the foreground |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- <command>` | Run an Astro CLI command |

## Project Structure

```text
/
├── public/                  # Favicons and hero artwork
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Document shell and global styles
│   └── pages/
│       └── index.astro     # Portfolio content, interactions, and page styles
├── astro.config.mjs        # Astro and icon integration configuration
├── package.json            # Dependencies and npm scripts
└── tsconfig.json           # TypeScript configuration
```

The portfolio copy and work-experience data are maintained near the top of `src/pages/index.astro`. Static images and favicons are stored in `public/`.

## Production Build

Create and verify a production build before deployment:

```sh
npm run build
npm run preview
```

The generated static site is written to `dist/` and can be deployed to any static hosting provider.
