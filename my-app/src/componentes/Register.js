import React from "react";
const Register = () => (
  <Register>
    <form>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"></input>
      </div>

      <div>
        <label for="email">email:</label>
        <input type="email" id="email" name="email"></input>
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"></input>
      </div>

      <div>
        <label for="confirmPassword">Confirm password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword"></input>
      </div>
      <butoon type="submit">submit</butoon>
    </form>
  </Register>
);
export default Register;
