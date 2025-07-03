"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    console.log(response);
    if (response.success) {
      console.log(data);
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    console.log(data);
    if (response.success) {
      console.log("You are registered");
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(response.error);
    }
  });
};
