// LoginForm.jsx
import React from 'react';

function LoginForm() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form id="login-form">
        {/* Email and Password input fields go here */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
