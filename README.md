# Krzysztof Kocot - Portfolio

Personal portfolio website built with Astro, TypeScript and Tailwind CSS.

**Live:** [bard-dev.com](https://bard-dev.com)

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts:** Inter (Google Fonts)

## Features

- Dark theme with orange accent (Berrie-inspired)
- Multi-language support (English / Polish)
- Fully responsive design
- Scroll animations
- Static site generation (SSG)
- SEO optimized

## Project Structure

```
src/
├── components/
│   ├── icons/
│   ├── About.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── LanguageSwitch.astro
│   ├── Navbar.astro
│   ├── Projects.astro
│   └── Skills.astro
├── i18n/
│   ├── index.ts
│   └── translations.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro (EN)
│   └── pl/index.astro (PL)
└── styles/
    └── global.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com/). Simply connect the repository and deploy.

## Author

**Krzysztof Kocot**
- GitHub: [@KKocot](https://github.com/KKocot)
- LinkedIn: [Krzysztof Kocot](https://www.linkedin.com/in/krzysztof-kocot-b3043a220/)
- Email: k.kocot@bard-dev.com

## License

MIT
