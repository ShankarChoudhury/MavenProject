Feature: Test google search feature
  This is  sample scenarioto test Gherkin feature
  This feature contains keywords as well

  Scenario Outline: Test google search feature with multiple keywords
    Given Launch browser
    When browser is launched
    Then Send a "<keyword>"
    And close the Browser

    Examples: 
      Data driven Testing values below

      | keyword                 |
      | TestNG Framework        |
      | Maven Repository        |
      | Appium                  |
      | Selendroid              |
      | Mobile espresso testing |
      | Cucumber                |
      | Serenity                |
      | Jbehave                 |