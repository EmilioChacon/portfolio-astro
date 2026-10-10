# Emilio De La Peña Chacón - Developer Portfolio

A fast, static portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/). It is designed to showcase my backend engineering experience (Java, Spring Boot, PostgreSQL) alongside modern frontend capabilities.

## 🚀 Tech Stack

- **Framework**: Astro (Static Site Generation)
- **Styling**: Tailwind CSS v4
- **Content Management**: Astro Content Collections (Markdown)
- **Deployment**: Netlify via GitHub Actions (CI/CD)

## 💻 Local Development

To run this project locally, make sure you have Node.js version 22+ installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:4321`.

## 📁 Project Structure

```text
/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── components/         # Reusable Astro UI components (Hero, FeaturedProject, etc.)
│   ├── content/            # Markdown files for portfolio projects
│   ├── layouts/            # Global HTML wrapper
│   ├── pages/              # Routing (index.astro)
│   └── styles/             # Global CSS and Tailwind theme configurations
├── .github/workflows/      # CI/CD deployment pipeline to Netlify
└── astro.config.mjs        # Astro configuration
```

## 📝 Adding New Projects

This portfolio uses Astro Content Collections to manage projects. To add a new project, simply create a new Markdown file in the `src/content/projects/` directory.

Example `src/content/projects/my-new-project.md`:

```markdown
---
title: "My New API"
description: "A high-performance REST API built with Spring Boot."
githubUrl: "https://github.com/EmilioChacon/repo"
tags: ["Java 21", "Spring Boot", "Docker"]
order: 6
---
```
The site will automatically parse this markdown file and render it on the homepage in the correct order.

## 🚢 Deployment (CI/CD)

This project uses a Continuous Integration/Continuous Deployment (CI/CD) pipeline via GitHub Actions.

Any code pushed to the `main` branch will automatically trigger the `.github/workflows/deploy.yml` workflow, which builds the static Astro site and pushes it directly to Netlify.
