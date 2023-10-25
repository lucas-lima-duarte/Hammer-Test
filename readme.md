# Hammer Test

# Execution Guide

Welcome to the Hammer Test Execution Guide! In this guide, we'll walk you through the process of running existing Cypress test specifications to verify the functionality of a web application.

## Prerequisites

Before you begin, make sure you have the following:

- A web browser (Google Chrome recommended) installed on your machine.
- Git Installed
- Node Installed

## Running Cypress Tests

1. **Clone the Repository**: If you haven't already, clone the repository to your local machine using the following command:

git clone 'repository_ur'

2. **Install Dependencies**: Navigate to the project folder and install the necessary dependencies by running:

cd hammertest
npm i

3. **Open Cypress Test Runner**: To execute the Cypress tests, open the Cypress Test Runner with the command:

npm run open-dev
npm run open-hml
npm run open-prod

4. **Select a Test to Run**: In the Cypress Test Runner window, you'll see a list of available test specifications (specs) on the left. Click on a spec to run its associated tests.

5. **View Test Execution**: The selected test specification will open in a new browser window, and you'll see the tests being executed step by step.

6. **Review Test Results**: Once the tests are complete, you'll see a detailed report of test results. Green checkmarks indicate successful tests, while red exclamation marks indicate failed tests.

## Interpreting Test Results

- **Passed Tests**: Green checkmarks next to test names indicate that the tests have passed successfully.

- **Failed Tests**: If a test fails, you'll see a red exclamation mark next to the test name. You can click on a failed test to view the details of the failure, including any error messages.

## Running Tests in Headless Mode (in progress)

If you prefer running tests in the command-line interface (CI/CD pipelines, automation), you can use the following command:

npm run cicd-dev
npm run cicd-hml
npm run cicd-prod
