import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`I open the login page`, () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
});

When(`I enter {string} in the username field`, (username) => {
    cy.pending('Step implementation');
});

When(`I enter {string} in the password field`, (password) => {
    cy.pending('Step implementation');
});

When(`I click the login button`, () => {
    cy.pending('Step implementation');
});

Then(`I should see the dashboard page`, () => {
    cy.pending('Step implementation');
});