$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features\\BDDtestDatatableSet.feature");
formatter.feature({
  "line": 1,
  "name": "Orangelogin HRM with set of users",
  "description": "This feature would test create ,delete user functionality.",
  "id": "orangelogin-hrm-with-set-of-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test Orange HRM Login",
  "description": "",
  "id": "orangelogin-hrm-with-set-of-users;test-orange-hrm-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@one"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "A browser is available",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login fields are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "valid user id \u0026 password is entered",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is able to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Management section is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "System users must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "add button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "new user field must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user details are added and saved",
  "rows": [
    {
      "cells": [
        "Hannah Flores",
        "Cucumber Tester96"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "System displays the user  save confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User is select \u0026 deleted from the system",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user should not be displayed under User management screen",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Logout of the application",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Login page should not be displayed",
  "keyword": "But "
});
formatter.match({
  "location": "RunDatatableOrangeHRM.setUp()"
});
formatter.result({
  "duration": 26897280851,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLoginFields()"
});
formatter.result({
  "duration": 1527371832,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.enterCredentials(DataTable)"
});
formatter.result({
  "duration": 4717936555,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLogin()"
});
formatter.result({
  "duration": 423376319,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.User_Management_section_is_clicked()"
});
formatter.result({
  "duration": 2712573771,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_users_must_be_displayed()"
});
formatter.result({
  "duration": 201089419,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.add_button_is_clicked()"
});
formatter.result({
  "duration": 2153847056,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.new_user_field_must_be_displayed()"
});
formatter.result({
  "duration": 24926,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.user_details_are_added_and_saved(DataTable)"
});
formatter.result({
  "duration": 4887258344,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_displays_the_user_save_confirmation_message()"
});
formatter.result({
  "duration": 15365837261,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //a[text()\u003d\u0027Cucumber Tester96\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.33 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.35.0\u0027, revision: \u00278df0c6bedf70ff9f22c647788f9fe9c8d22210e2\u0027, time: \u00272013-08-17 12:46:41\u0027\nSystem info: os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:11942/, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 142aab99-3277-4f88-a37b-833477e2cd73\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:191)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat cucumberMavenPack.RunDatatableOrangeHRM.System_displays_the_user_save_confirmation_message(RunDatatableOrangeHRM.java:139)\r\n\tat ✽.Then System displays the user  save confirmation message(features\\BDDtestDatatableSet.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.User_is_select_deleted_from_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.user_should_not_be_displayed_under_User_management_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.logOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.Login_page_should_nor_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
});