# IT3040 Assignment 1 - Translator Testing Automation

## Student Information
- **Registration Number:** IT23201378
- **Course:** IT3040 - IT Project Management
- **Submission Date:** 30th January 2026

## Project Overview
Automated Playwright tests for Singlish to Sinhala translator (https://www.swifttranslator.com/).

## Test Coverage
- **24 Positive Functional Tests** - System works correctly
- **10 Negative Functional Tests** - System fails as expected  
- **3 UI Tests** (1 Positive, 1 Negative) - Real-time conversion & UI behavior
- **Total:** 36 Test Cases

## Installation
```bash
# 1. Install Node.js (v16 or higher)
# 2. Extract the zip file
# 3. Open terminal in project folder
npm install
npx playwright install chromium

## Generating Reports

To view interactive test reports with trace viewer:
```bash
npx playwright test --reporter=html --ui

github link - https://github.com/Saj-03/IT3040--IT-Project-Management-Assignment-1 