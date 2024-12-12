# Workflow repo for the CA

This project is part of the Workflow course assignment from Front-End Development (FED2) program at Noroff School of Technology and Digital Media. The goal is to apply tools and testing techniques to enhance the quality of the website and streamline the development process.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Anaid0616/workflow-repo-ca.git
   cd workflow-repo-ca
   ```

2. Switch to the workflow branch:

   ```bash
   git checkout workflow
   ```

3. Continue making changes, committing, and pushing to the workflow branch.

## Scripts

The following scripts are available:

- npm run dev: Start the development server.
- npm run start: Start the production server.
- npm run lint: Run ESLint to check for issues.
- npm run format: Format all files using Prettier.
- npm run test: Run all tests (unit and end-to-end).
- npm run e2e: Run Playwright end-to-end tests.

## Environment Variables

The project requires the following environment variables:

- TEST_USER_EMAIL: Email for testing user login.
- TEST_USER_PASSWORD: Password for testing user login.
  Create a .env file in the root directory with these variables, or refer to the .env.example file included in this repository.

## Running Tests

1. Unit Tests
   Run unit tests with Vitest:

```bash
npm run test
```

2. End-to-End Tests
   Run end-to-end tests with Playwright:

```bash
npm run e2e
```

## How to Contribute

- Create a new branch for your changes.
- Ensure your changes are in the workflow branch or its sub-branches.
- Run npm run lint and npm run test before committing your changes.

## Assignment Checklist

[x] ESLint and Prettier are installed and configured.
[x] Pre-commit hooks are set up to handle linting and formatting.
[x] Vitest is installed, and all unit tests pass.
[x] Playwright is installed, and all e2e tests pass.
[x] The README includes setup instructions, scripts, and environment variable details.

## License

This project is for educational purposes only.
