import { useState } from "react";

function UserService() {
  const handleSignIn = (email, password) => {
    const data = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8080/api/users/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        var userid = JSON.parse(data);
        console.log(userid);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    handleSignIn,
  };
}
export default new UserService();
