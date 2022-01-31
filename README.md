# NextJS & TS Web App Template

This template can be used to quickly generate a boilerplate web app with NextJS and TypeScript integration. It provides all the basic packages, structure and configuration needed to get up and running with NextJS! To use it simply press the green _"Use this template"_ button at the top of the page.

## Plop (Generators)

To make sure you don't have to type out the same things over and over again, and to maintain consistency throughout the project, this app comes with [plop generators](https://plopjs.com) pre-configured - these will allow you to quickly generate new pages and components without losing time.

To generate a new page, run the below command in the root of the project. This will create a new folder under `@src/pages` as well as export your page to next's `pages` folder.

```bash
$ yarn new:page
```

To create a new component, along with separate `.styles`, `.models` and `.test` files (for styles, props and tests respectively), run the below command:

```bash
$ yarn new:component
```

## Tech stack

The basic packages included in this template are:

- NextJS
- Axios (can be substituted for your network library of choice)
- Styled Components (base styles are pre-configured, see `@theme/globalStyles.ts`)
- Eslint (with several plugins and rules pre-configured)
- Jest & RTL (for unit and snapshot tests)
- Husky (including a pre-commit hook to run unit tests)

## Other features

- Convenient shortcuts for often reused CSS - [see here](https://github.com/PiotrRut/nextjs-ts-template/blob/main/src/theme/shortcuts.ts)
- Object of tokens containing some common pixel values, which returns their value in `rem` - good for responsive layouts and for keeping consistency throughout the project - [see here](https://github.com/PiotrRut/nextjs-ts-template/blob/main/src/theme/sizes.ts)
