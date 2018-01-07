# OCAS.SimpleSignUp.Web
Simple Sign Up

Development Tools:
Use VS2017 + .NetCore 2.0 + Angular 4 and bootstrap 

Procedure:
- Generate example code from VS2017 and remove all classes and code I don't need.
- Create one web api controller (SignupController)
- Load all Signup we already have and create a route for a new angular controller call sign-up
- Create a reactive form with basic validation.
- Send information on json form and capture that on signupcontroller and save it.
- Call route / to return to home and reload info automatically.

Improvements:
- Separate Model and Data classes in a project.
- Create a separate project for web api. However, web api on .net core has been improved and you are not longer needed a different 
project.
- Have logging and catch errors for troubleshotting in the future.
- Use a stronger data storage.
- Create directives to validate form controls.
- Implement karma tests and unit tests.
- User friendly (search on initial table).
- Better error message.
- Load activities from server.
