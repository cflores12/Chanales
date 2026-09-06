# Alex Chen Portfolio

A single-page developer portfolio built with Astro. The current content is placeholder data based on the supplied visual reference.

## Project Structure

The page is organized around a small Astro shell:

```text
/
├── public/               # Static favicon assets
├── src/layouts/          # Shared document shell and global styles
├── src/pages/index.astro # Portfolio content and page styles
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

The profile data, projects, experience, skills, and contact URLs live near the top of `src/pages/index.astro` so they can be replaced independently from the layout.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

The repository convention for a background development server is `astro dev --background`.
