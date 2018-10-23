## Shankar
@LoginKimai
Feature: Test login feature in Kimai Timesheet application
@ValidCred
Scenario: ValidCred
Given I am on home page of Kimai Application
When I login with valid credentials
Then I should see home page
And I logout of the application