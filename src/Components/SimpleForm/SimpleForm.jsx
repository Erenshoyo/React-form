import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formName = e.target.Form_name.value;
    let formEmail = e.target.Form_email.value;
    console.log(formName);
    console.log(formEmail);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" name="Form_name" />
        <br />
        <input type="email" placeholder="Your email" name="Form_email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
