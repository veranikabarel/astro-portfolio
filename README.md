💫 This is a free template to make your portfolio website using **[Astro 2.0](https://astro.build/blog/astro-2/) + [Tailwind CSS](https://tailwindcss.com/)**.

<img src="" alt="Astro Portfolio website screenshot">

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Project structure](#project-structure)
- [Commands](#commands)
- [Contributing](#contributing)

## Demo

📌 [https://astro-fe-portfolio.netlify.app/](https://astro-fe-portfolio.netlify.app/)

## Features

- ✔️ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)) supporting **Dark mode**.
- ✔️ Uses the following integrations:
- @astrojs/mdx
- @astrojs/image
- @astrojs/tailwind
- astro-icon
- astro-seo
- ✔️ Unit tests ([@Vitest](https://github.com/vitest-dev/vitest)) and e2e ([@Playwright](https://github.com/microsoft/playwright)) are setted up.
- 🔜 Blog

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── ui/
│   │   |   ├── BackToTop.astro
|   |    |   └── ...
│   │   ├── About.astro
│   │   ├── Contact.astro
|   |     └── ...
│   ├── content/
│   │   ├── projects/
│   │   │   ├── project-1.md
│   │   │   ├── project-1.md
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   ├── tests/
│   │   ├── index.spec.ts
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/images/`.

Blog and documentation content are created as collections of Markdown or MDX files in `src/content`.

Any static assets, eg. images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn`              | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |
| `yarn test`         | Run Vitest tests                                   |

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.
