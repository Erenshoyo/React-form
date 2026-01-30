import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;

    setPassword(value);

    if (value.length < 6) {
      setError("Password must be at least 6 characters long!");
    } else {
      setError("");
    }
  };

  const isInvalid = password.length < 6;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input
          type="submit"
          value="Submit"
          disabled={isInvalid}
          style={{
            cursor: isInvalid ? "not-allowed" : "pointer",
            opacity: isInvalid ? 0.5 : 1,
          }}
        />
      </form>
      <p style={{ color: "#d4353d" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
