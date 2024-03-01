// ResetPasswordPage.js
import React, { useState } from 'react';

function ResetPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement reset password logic here
    // Similar to login, but you'll likely be calling a different API endpoint
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
