# Vue3 Single-page Application Template

vue3-spa-template is a boilerplate GitHub template repository for quickly starting new Vue.js single-page application projects.

Visit <https://tcornl.github.io/vue3-spa-template/#/> to view the latest release served by GitHub Pages.

## Overview

vue3-spa-template was bootstrapped using the official Vue project scaffolding tool [create-vue](https://github.com/vuejs/create-vue), via `npm init vue@latest`.

### Scaffolding Feature Selections

- Project name: ... vue3-spa-template
- Add TypeScript? ... **No** / Yes
- Add JSX Support? ... No / **Yes**
- Add Vue Router for Single Page Application development? ... No / **Yes**
- Add Pinia for state management? ... No / **Yes**
- Add Vitest for Unit testing? ... No / **Yes**
- Add Cypress for both Unit and End-to-End testing? ... No / **Yes**
- Add ESLint for code quality? ... No / **Yes**
- Add Prettier for code formatting? ... No / **Yes**

## Getting started

### Creating a repository from a template

See the [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for more information.

1. Visit <https://github.com/tcornl/vue3-spa-template> and click the "Use this template" button. You can also navigate directly to <https://github.com/tcornl/vue3-spa-template/generate>.
2. Fill out your repository's general information and settings. The "Include all branches" checkbox is unchecked by default. Deploying to GitHub Pages via a `gh-pages` branch is covered in [Deploy to GitHub Pages](#deploy-to-github-pages).
3. `cd` to the desired parent directory (e.g. `Projects`).
4. Clone the repository from GitHub via `git clone https://github.com/<USERNAME>/<REPO>.git`.
5. `cd <REPO>` and install the project's dependencies via `npm install`.

<!-- #### Post-clone cleanup -->

### Sync with the latest template

1. Add the `vue3-spa-template` repository as a remote named `template`.

   ```sh
   git remote add template https://github.com/tcornl/vue3-spa-template.git
   ```

2. Create a `template-integration` branch used to pull the latest changes from `vue3-spa-template` to be merged into master.

   ```sh
   git branch template-integration
   git checkout template-integration
   ```

3. Sync with `vue3-spa-template`.

   ```sh
   git pull template master --allow-unrelated-histories
   ```

4. Merge `template-integration` into `master`.

## Development

### Recommended IDE Setup

#### VS Code + Extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Scripts

- `dev` - Compile and Hot-Reload for Development
- `build` - Compile and Minify for Production
- `preview` - Locally preview production build
- `test:unit` - Run unit tests with Vitest
- `test:unit:coverage` - Get unit test coverage
- `test:e2e` - Run end-to-end tests with Cypress
- `test:e2e:ci` - Headless testing
- `lint` - Lint with ESLint
- `format` - Format with Prettier

### Deploy to GitHub Pages

See the [Vite documentation](https://vitejs.dev/guide/static-deploy.html#github-pages) for more information.

```sh
npm run build
cd dist
git init
git add -A
git commit -m "Deploy."
git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages
```

## Tech stack

- [Node.js](https://nodejs.org/en/)
- [Vite](https://vitejs.dev/)
- [Vue.js](https://vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
  - [Pinia](https://pinia.vuejs.org/)
- [GitHub Pages](https://pages.github.com/)
