Feature: Login

Scenario: Login with valid credentials
    Given I open the login page
    When I enter "student" in the username field
    And I enter "Password123" in the password field
    And I click the login button
    Then I should see the dashboard page