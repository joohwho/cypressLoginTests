
import LoginPage from '../pages/login-page';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();

Given(`I open the login page`, () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
});

When(`I enter {string} in the username field`, (username) => {
    loginPage.fillUsername(username);
});

When(`I enter {string} in the password field`, (password) => {
    loginPage.fillPassword(password);
});

When(`I click the login button`, () => {
    loginPage.submitLogin();
});

Then(`I should see the dashboard page`, () => {
    cy.url().should('contain', '/logged-in-successfully');
});