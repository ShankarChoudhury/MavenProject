Feature: Orangelogin HRM with set of users
This feature would test create ,delete user functionality.
@one
  Scenario: Test Orange HRM Login
  Sample scenario
    Given A browser is available
    And Login fields are displayed
    When valid user id & password is entered
      | Admin | admin |
    Then User is able to Login
    When User Management section is clicked
    Then System users must be displayed
    When add button is clicked
    Then new user field must be displayed
    When user details are added and saved
      | Hannah Flores | Cucumber Tester96|
    Then System displays the user  save confirmation message
    When User is select & deleted from the system
    Then user should not be displayed under User management screen
    Then Logout of the application
    But Login page should not be displayed
