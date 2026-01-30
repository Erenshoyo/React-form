import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;

    setPassword(value);

    if (value.length < 6) {
      setError("Password must be at least 6 characters long!");
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isInvalid = password.length < 6;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          onChange={handleEmailChange}
          defaultValue={email}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
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
