/**
 * FileName: app.js
 * 
 * @author Hina Patel
 * @date July 6, 2016
 * 
 * StudentID: 821021425
 * website: http://comp125-s2016-821021425-lab4.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    //This is a User Class
    var User = (function () {
        //Constructor
        function User(userName, userPassword) {
            this.userName = userName;
            this.userPassword = userPassword;
        }
        return User;
    } ());

    /*
    var User = (function () {
        //Constructor method
        function User() {
        }
        User.prototype.SetUserName = function (username) {
            this.userName = username;
        };
        User.prototype.GetUserName = function () {
            return this.userName;
        };
        User.prototype.SetPassword = function (password) {
            this.password = password;
        };
        User.prototype.GetPassword = function () {
            return this.password;
        };
        return User;
    }());
    */


     /**
     * This function Display User Informaiton on console 
     * 
     * @function printUserInfo
     * @returns {void}
     */    
    function printUserInfo(user) {
        console.log("User Name = " + user.userName);
        console.log("Password = " + user.userPassword);
        //console.log("UserName = " + user.getUserName());
        //console.log("Password = " + user.getUserPassword());
    }
     /**
     * This is an event handler for the Login Form submit event
     * 
     * @function onFormSubmit
     * @returns {void}
     */
    function onFormSubmit(event) {
        event.preventDefault();
        // get user details from the login form
        var userName = document.getElementById("userName");
        var userPassword = document.getElementById("password");
        // create user object
        var user = new User(userName.value, userPassword.value);
        //var user = new User();
        //user.setUserName(userName.value);
        //user.setUserPassword(userPassword.value);
        printUserInfo(user);
        loginForm.reset();
    }
    // get the login form reference and add form event listener
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", onFormSubmit);


})();