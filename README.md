# Vue3 Single-page Application Template

vue3-spa-template is a GitHub template repository for quickly starting new Vue.js single-page application projects.

Visit the project's [Wiki](https://github.com/tcornl/vue3-spa-template/wiki) for more information and https://tcornl.github.io/vue3-spa-template/#/ to view the latest release hosted on GitHub Pages.

## Overview

vue3-spa-template was bootstrapped using the official Vue project scaffolding tool [create-vue](https://github.com/vuejs/create-vue), via the command `npm init vue@latest`.

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

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Getting started

### Creating a repository from a template

See the [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for more information.

1. Visit https://github.com/tcornl/vue3-spa-template and click the "Use this template" button. You can also visit https://github.com/tcornl/vue3-spa-template/generate directly.
2. Fill out the new repository's general information and settings. The "Include all branches" checkbox is unchecked by default. This documentation will cover the creation of a `gh-pages` branch for deploying to GitHub Pages in its own section.
3. In a terminal, `cd` to the repository's desired parent directory.
4. Clone the repository from GitHub to your local machine with the command `git clone https://github.com/<USERNAME>/<REPO>.git`.
5. `cd <REPO>` and set up the project for development with the command `npm install`.
6. Change the repository's environment variables and repo name instances to represent your project.

<!-- ### Merge latest template changes -->

## Development

### Recommended IDE Setup

#### VS Code + Extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Scripts (see package.json)

- `install` - Project Setup
- `dev` - Compile and Hot-Reload for Development
- `build` - Compile and Minify for Production
- `preview` - Locally preview production build
- `test:unit` - Run Unit Tests with Vitest
- `test:unit:coverage` - Get unit test coverage
- `test:e2e` - Run End-to-End Tests with Cypress
- `test:e2e:ci` - Headless testing
- `lint` - Lint with ESLint
- `format` - Format with Prettier

## Tech stack

### Source

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)

### Dev Tools

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vue Devtools](https://devtools.vuejs.org/)

### Application + Build

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Vite](https://vitejs.dev/)
- [Vue.js](https://vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
  - [Pinia](https://pinia.vuejs.org/)

### Testing

- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)
- [Vue Test Utils](https://test-utils.vuejs.org/)

### Production

- [GitHub Pages](https://pages.github.com/)
- [Sentry](https://sentry.io/welcome/)

### Future Integrations

- [Testing Library](https://testing-library.com/)
- [Codecov](https://about.codecov.io/)
- [Storybook](https://storybook.js.org/)
- [GitHub Actions](https://github.com/features/actions)
