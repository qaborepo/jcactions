# TYB-UI-AUTOMATION

### Base Tecnology
- Node.js / Typescript
- webdriverio
- mocha-framework
- allure-reports
- TimeLine report
- soft-asserts
- supertest

### Structure / Folders
- resources/images : files to upload and create brands/reps
- test/pageobjects : code and classes to find and handling the web elements. (https://webdriver.io/docs/pageobjects/)
- test/specs : code and classes to test the application - testing scenarios.
- utils : functions to format strings, numbers, dates and etc;
- services : functions handle some request backend, how to get the email, for example;

### Good Practices for UI Automation 
- The scenarios should be independent
- We are following the PageObjects pattern.

### How to execute
- to run all tests execute the command:
```
npm run test
```

### Evidences
- to generate the allure-report (you should have the Java JDK installed: https://www.oracle.com/java/technologies/downloads/)
```
npm run report
```
- For the TimeLine report, the static html will generated at "./ui-automation/timeline-report.html"