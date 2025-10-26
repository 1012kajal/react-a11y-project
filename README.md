# Incubyte String Calculator

## Overview

This project contains a **String Calculator** built using **React**, enhanced with accessibility features and Test-Driven Development (TDD) best practices.  

The goal of this project was to implement a fully functional calculator that supports multiple delimiters, ignores numbers above 1000, handles negative numbers, supports arithmetic operators (+, -, *, /), and provides user-friendly alerts for invalid inputs.

The UI has been improved to be responsive, accessible for screen readers, and navigable via keyboard.

---

## Project Structure

- **src/**
  - `App.tsx`: Main React component with improved accessibility and responsive UI.
  - `stringCalculator.ts`: Implementation of the String Calculator logic with TDD.
  - `stringCalculator.test.ts`: Unit tests for the calculator functions.
- **README.md**: This file.
- **package.json**: Project dependencies and scripts.

---

## Features Implemented

1. **String Calculator Functionalities**
   - Returns `0` for empty input.
   - Returns the number itself for a single number input.
   - Sums multiple numbers separated by comma, newline, or custom delimiters.
   - Supports multiple custom delimiters.
   - Ignores numbers greater than 1000.
   - Throws errors for negative numbers.
   - Supports basic arithmetic operators: `+`, `-`, `*`, `/`.
   - Alerts the user if invalid text or extremely large numbers are entered.

2. **UI Enhancements**
   - Responsive and centered image.
   - Buttons styled with improved CSS.
   - Proper label for input with clear instructions.
   - Accessible `Result` and `Error` messages with ARIA roles.
   - `About` button shows an alert describing the project and features.

3. **Accessibility**
   - Screen reader-friendly labels.
   - Alerts for errors and invalid inputs.
   - Keyboard navigable buttons and inputs.

4. **Testing**
   - Implemented TDD using **Vitest**.
   - Test cases cover:
     - Empty string
     - Single number
     - Multiple numbers
     - Custom delimiters
     - Negative numbers
     - Numbers > 1000
     - Multiple custom delimiters

---

## Getting Started

1. **Clone the Repository**

```bash
git clone https://github.com/1012kajal/react-a11y-project.git
cd react-a11y-incubyte
