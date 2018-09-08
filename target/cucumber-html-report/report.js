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
  "description": "Sample scenario",
  "name": "Test Orange HRM Login",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "A browser is available",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "Login fields are displayed",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "valid user id \u0026 password is entered",
  "keyword": "When ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "Admin",
        "admin"
      ],
      "line": 9
    }
  ]
});
formatter.step({
  "name": "User is able to Login",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "User Management section is clicked",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "System users must be displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "add button is clicked",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "new user field must be displayed",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "user details are added and saved",
  "keyword": "When ",
  "line": 15,
  "rows": [
    {
      "cells": [
        "dora ewbflc",
        "Cucumber Tester98"
      ],
      "line": 16
    }
  ]
});
formatter.step({
  "name": "System displays the user  save confirmation message",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "User is select \u0026 deleted from the system",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "user should not be displayed under User management screen",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "Logout of the application",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "Login page should not be displayed",
  "keyword": "But ",
  "line": 21
});
formatter.match({
  "location": "RunDatatableOrangeHRM.setUp()"
});
formatter.result({
  "duration": 17427605071,
  "status": "passed"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLoginFields()"
});
formatter.result({
  "duration": 27960617493,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with css selector \u003d\u003d input#txtUsername (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.35.0\u0027, revision: \u00278df0c6bedf70ff9f22c647788f9fe9c8d22210e2\u0027, time: \u00272013-08-17 12:46:41\u0027\nSystem info: os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.7.0_80\u0027\nSession ID: 76390bcb-e7f3-440e-9324-94504a73719a\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{platform\u003dWINDOWS, javascriptEnabled\u003dtrue, elementScrollBehavior\u003d0, ignoreZoomSetting\u003dfalse, enablePersistentHover\u003dtrue, ie.ensureCleanSession\u003dfalse, browserName\u003dinternet explorer, enableElementCacheCleanup\u003dtrue, ie.enableFullPageScreenshot\u003dtrue, unexpectedAlertBehaviour\u003ddismiss, ie.fileUploadDialogTimeout\u003d3000, ie.forceShellWindowsApi\u003dfalse, version\u003d11, pageLoadStrategy\u003dnormal, ignoreProtectedModeSettings\u003dfalse, requireWindowFocus\u003dfalse, initialBrowserUrl\u003dhttp://localhost:2171/, ie.forceCreateProcessApi\u003dfalse, nativeEvents\u003dtrue, browserAttachTimeout\u003d0, ie.browserCommandLineSwitches\u003d}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:191)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:406)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat cucumberMavenPack.RunDatatableOrangeHRM.testLoginFields(RunDatatableOrangeHRM.java:40)\r\n\tat ✽.And Login fields are displayed(features\\BDDtestDatatableSet.feature:7)\r\n"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.enterCredentials(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.testLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.User_Management_section_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_users_must_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.add_button_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.new_user_field_must_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.user_details_are_added_and_saved(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RunDatatableOrangeHRM.System_displays_the_user_save_confirmation_message()"
});
formatter.result({
  "status": "skipped"
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