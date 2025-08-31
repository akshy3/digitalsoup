# digitalsoup

DigitalSoup is a marketing website built with [Astro](https://astro.build/), Tailwind CSS, and TypeScript. It provides a modern, responsive starting point for a digital marketing agency.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

## Available Scripts

The project defines several npm scripts:

- `npm run dev` &ndash; start the Astro development server with hot reloading.
- `npm start` &ndash; alias for `npm run dev`.
- `npm run build` &ndash; type-check and build the site for production in the `dist/` folder.
- `npm run preview` &ndash; preview the production build locally.
- `npm run astro` &ndash; run arbitrary [Astro CLI](https://docs.astro.build/en/reference/cli-reference/) commands.

## Deployment

The project uses the `@astrojs/vercel` adapter, making it ready for deployment on [Vercel](https://vercel.com/). Build the site with:

```bash
npm run build
```

Deploy the generated `dist/` directory to your preferred hosting provider or connect the repository to Vercel for automatic deployments.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. Before submitting, ensure the site builds successfully with:

```bash
npm run build
```

---

Please keep this README updated as the project evolves.

