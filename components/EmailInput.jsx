"use client";

import { useState } from "react";

const EmailInput = () => {
  const [email, setemail] = useState("");

  async function handleSubmit() {
    try {
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  }
  return (
    <div className="sign-up">
      <input
        value={email}
        onChange={() => {
          setemail(event.target.value);
        }}
        placeholder="Email adress...."
      />
      <button className="button-card">Sign Up</button>
    </div>
  );
};

export default EmailInput;
