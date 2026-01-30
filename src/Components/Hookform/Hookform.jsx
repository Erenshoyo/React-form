import React from "react";
import useInputField from "../../hooks/useInputField";

const Hookform = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={nameOnChange}
          defaultValue={name}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailOnChange}
          defaultValue={email}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={passwordOnChange}
          defaultValue={password}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Hookform;
