# Workflow repo for the CA

This is a project for testing and working with workflows. The following instructions will guide you through setting up and running the project locally.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/workflow-repo-ca.git
   ```
   
2. Navigate to the project folder
 ```bash
   cd workflow-repo-ca
```

3. Install the dependencies:
 ```bash
npm install
```

## Scripts
Here are the scripts you can use with this project:

npm run dev: Starts the TailwindCSS watcher to compile styles.
npm run start: Runs the project locally using live-server on http://localhost:5500.
npm run test: Runs unit and end-to-end (e2e) tests using Vitest and Playwright.

## Testing
Unit Tests
Unit tests are written with Vitest. Run the following command to execute them:
```bash
npm run test
```

End-to-End Tests (e2e)
End-to-end tests use Playwright. Run the following command to execute them:
```bash
npx playwright test
```

To watch the tests running in the browser:

```bash
npx playwright test --headed
```

To see a test report:

```bash
npx playwright show-report
```

Required Environment Variables
