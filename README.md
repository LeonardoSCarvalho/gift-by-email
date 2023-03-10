## Features

- โ TypeScript
- ๐งช jest
- ๐ ESLint โ To find and fix problems in your code
- ๐ Prettier โ Code Formatter for consistent style
- ๐ถ Husky โ For running scripts before committing
- ๐ Commitlint โ To make sure your commit messages follow the convention
- ๐ซ lint-staged โ Run ESLint and Prettier against staged Git files
- โ๏ธ EditorConfig - Consistent coding styles across editors and IDEs
- ๐ Path Mapping โ Import components or images using the `@` prefix
- โฝ Either Error Handler - For error handling. (Either is designed to hold either a left or a right value but never both).

### Requirements

- Node.js >= 12.22.0
- npm our yarn

### Directory Structure

- [`.husky`](.husky) โ Husky configuration and hooks.<br>
- [`tests`](./tests) โ Tests source code,including domain, application, infrastructure, main and shared.<br>
- [`src`](./src) โ Application source code, including domain, application, infrastructure, main and shared.<br>

### Scripts

- `yarn/npm start:dev` โ Starts the application in development mode.
- `yarn/npm build` โ Creates an optimized production build of your application.
- `yarn/npm start` โ Starts the application in production mode.
- `yarn/npm test` โ Runs tests for all files in the `tests` directory.

### Path Mapping

TypeScript/Node are pre-configured with custom path mappings. To import components or files, use the `@` prefix.


 ### API Requirements

 - Register user on mailing list
 - Email user with bonus
