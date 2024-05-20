"use strict";
$(document).ready(() => {
    // move focus to first text box
    $("#login").focus();
    //
// the handler for the click event of the submit button in login page
    $("#login_form").submit(event => {
        let isValid = true;
        // validate the email entry with a regular expression
        //const Pattern = /\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}|[A-Za-z\s]{6,}|(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}\d{1,4})\b/;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const namePattern = /^[A-Za-z].{3,}$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        const login = $("#login_form #login").val().trim();
        if (login == "") {
            $("#login_form #login").closest('.form-group').find('label span').text("This field is required.");
        } else if (!emailPattern.test(login)  ) {
            if(!phonePattern.test(login)){
                if(!namePattern.test(login)){
                    $("#login_form #login").closest('.form-group').find('label span').text("Must be a valid field");
                    isValid = false;
                }else {
                    $("#login_form #login").closest('.form-group').find('label span').text("");
                }
            }else {
                $("#login_form #login").closest('.form-group').find('label span').text("");
            }
        } else {
            $("#login_form #login").closest('.form-group').find('label span').text("");
        }
        $("#login").val(login);

        // validate the password entry
        const password = $("#login_form #password").val().trim();
        if (password == "") {
            $("#login_form #password").closest('.form-group').find('label span').text("This field is required.");
            isValid = false;
        } else if (password.length < 8) {
            $("#login_form #password").closest('.form-group').find('label span').text("Must be 8 or more characters.");
            isValid = false;
        } else {
            $("#login_form #password").closest('.form-group').find('label span').text("");
        }
        $("#login_form #password").val(password);
        // prevent the submission of the form if any entries are invalid
        if (isValid == false) {
            event.preventDefault();
        }
    });
    // the handler for the click event of the submit button in register page
    $("#register_form").submit(event => {
        let isValid =true;
        // validate the username entry
        const username = $("#register_form #name").val().trim();
        if(username == ""){
            $("#register_form #name").closest('.form-group').find('label span').text("This field is required.");
            isValid =false;
        }else{
            $("#register_form #name").closest('.form-group').find('label span').text("");
        }
        $("#register_form #name").val(username);
        // validate the email entry
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#register_form #email").val().trim();
        if(email == ""){
            $("#register_form #email").closest('.form-group').find('label span').text("This field is required.");
            isValid =false;
        }else if(!emailPattern.test(email)){
            $("#register_form #email").closest('.form-group').find('label span').text("Must be a valid email address.");
            isValid =false;
        } else{
            $("#register_form #email").closest('.form-group').find('label span').text("");
        }
        $("#register_form #email").val(email);
        // validate the password entry
        const password = $("#register_form #password").val().trim();
        if(password == ""){
            $("#register_form #password").closest('.form-group').find('label span').text("This field is required.");
            isValid =false;
        }else if(password.length < 8){
            $("#register_form #password").closest('.form-group').find('label span').text("Must be 8 or more characters.");
            isValid =false;
        } else{
            $("#register_form #password").closest('.form-group').find('label span').text("");
        }
        $("#register_form #password").val(password);
        // validate the verify entry
        const verify = $("#register_form #password_confirmation").val().trim();
        if(verify == ""){
            $("#register_form #password_confirmation").closest('.form-group').find('label span').text("This field is required.");
            isValid =false;
        } else if(verify !== password ){
            $("#register_form #password_confirmation").closest('.form-group').find('label span').text("Must match first password entry.");
            isValid =false;
        }else{
            $("#register_form #password_confirmation").closest('.form-group').find('label span').text("");
        }
        $("#register_form #password_confirmation").val(verify);

        // prevent the submission of the form if any entries are invalid
        if (isValid == false) {
            event.preventDefault();
        }
    });

})
