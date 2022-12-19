
# Automation Challenge @Plooto


This is a suite of automated test cases written with Microsoft Playwright automation framework. These are written using the page objects model, with page object classes seperated in a folder labeled "pages". All spec file tests are housed in the "tests" folder, with a sub folder labeled "e2e" with one end to end workflow test. Since the site is mostly static and has limited functionality, some tests are failing from asserting on assumed functionality and behavior. 


## Installing


After cloning the repo, navigate to the root of the project and run 

```
npm install
```
to install necessary dependencies. 

## Running Automated Tests

As mentioned above, tests are split into two folders. There is a script to run the entire suite of tests, and another script to run just the end to end workflow test. Script commands are as follows:

#### 1. Run all tests 
* ``` npx playwright test ``` 


#### 2. Run end to end tests
* ``` npm run e2e ```

## Running Allure Reporter

By default, Playwright will execute its html reporter if any tests fail. You also have the option of running the allure reporter if you would prefer a different user interface with some additional information. After you have executed your first run of tests, you can run the command: 
* ``` npm run allure-report ``` 
to generate and run the allure report. 


## Additional notes

### There are comments in the failing tests mentioning what the expected or assumed functionality or behavior of the particular page is. Here's some additional information on those scenarios, per the email instructions: 
---
1. Login Allows the user to authenticate. "Sign In" button will navigate the user to the Company Selection screen
> * 3 tests failing because there are assertions for invalid email and passwords, expecting alerts letting the user to use proper formatting or to not leave the fields blank

2. Company Selection Displays a list of companies (and their status) available to the user. Only "Plooto Inc" company will lead to the Dashboard
> * 1 test failing from assertion on expected functionality for the search input field


3. Payment Approval Displays all the details about payment, its approval process, and the audit trail
> * 1 test failing from assumption on functionality of delete button. 
---



