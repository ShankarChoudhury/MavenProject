$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features\\BDDtestDatatableSet.feature");
formatter.feature({
  "id": "orangelogin-hrm-with-set-of-users",
  "description": "This feature would test create ,delete user functionality.",
  "name": "Orangelogin HRM with set of users",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "orangelogin-hrm-with-set-of-users;test-orange-hrm-login",
  "tags": [
    {
      "name": "@one",
      "line": 3
    }
  ],
  "description": "",
  "name": "Test Orange HRM Login",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "A browser is available",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Login fields are displayed",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "valid user id \u0026 password is entered",
  "keyword": "When ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Admin",
        "admin"
      ],
      "line": 8
    }
  ]
});
formatter.step({
  "name": "User is able to Login",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "User Management section is clicked",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "System users must be displayed",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "add button is clicked",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "new user field must be displayed",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "user details are added and saved",
  "keyword": "When ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Hannah Flores",
        "Cucumber Tester95"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "System displays the user  save confirmation message",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "User is select \u0026 deleted from the system",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "user should not be displayed under User management screen",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "Logout of the application",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "Login page should not be displayed",
  "keyword": "But ",
  "line": 20
});
formatter.match({
  "location": "RunDatatableOrangeHRM.setUp()"
});
formatter.result({
  "duration": 14800381370,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLoginFields()"
});
formatter.result({
  "duration": 7186539015,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.enterCredentials(DataTable)"
});
formatter.result({
  "duration": 3493908130,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLogin()"
});
formatter.result({
  "duration": 2856134501,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.User_Management_section_is_clicked()"
});
formatter.result({
  "duration": 2255884947,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_users_must_be_displayed()"
});
formatter.result({
  "duration": 185830821,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.add_button_is_clicked()"
});
formatter.result({
  "duration": 1662740803,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.new_user_field_must_be_displayed()"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.user_details_are_added_and_saved(DataTable)"
});
formatter.result({
  "duration": 3532932902,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_displays_the_user_save_confirmation_message()"
});
formatter.result({
  "duration": 2153528035,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.User_is_select_deleted_from_the_system()"
});
formatter.result({
  "duration": 2277459969,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.user_should_not_be_displayed_under_User_management_screen()"
});
formatter.result({
  "duration": 15206585481,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.logOut()"
});
formatter.result({
  "duration": 1340093444,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.Login_page_should_nor_be_displayed()"
});
formatter.result({
  "duration": 1500221036,
  "status": "passed"
});
});