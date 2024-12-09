[![Coverage Status](https://coveralls.io/repos/github/rafinutshaw/unit-testing-task/badge.svg?branch=main)](https://coveralls.io/github/rafinutshaw/unit-testing-task?branch=main)

# Local Environment Setup and Testing Guide

This section provides detailed instructions for setting up the local environment, running unit tests, and generating coverage reports locally.

## **Required Tools**

To set up the local environment, ensure the following tools are installed on your system:

- **Git**
- **Node.js**
- **npm**

---

## **Environment Setup**

1. Clone the repository from GitHub using the following command:
git clone https://github.com/rafinutshaw/unit-testing-task.git



2. Navigate to the project directory:
cd unit-testing-task



3. Install project dependencies:
npm install



---

## **Executing Tests Locally**

After setting up the environment, follow these steps to execute tests locally:

1. Open the project in your IDE (e.g., **VSCode**) and open a terminal, or navigate to the project directory through a terminal.

2. Run all test cases along with the coverage report using the following command:
npm run test



---

## **Viewing Coverage Report**

1. After running the tests, the generated coverage report will be located in the `coverage/` folder of the project.

2. To view a detailed and interactive coverage report:
- Navigate to `coverage/lcov-report/`.
- Open the `index.html` file in your browser.


