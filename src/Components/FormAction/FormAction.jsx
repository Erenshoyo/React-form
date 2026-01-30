import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get('form_name'));
    console.log(formData.get('form_email'));
  };
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="form_name" placeholder="Name" />
        <br />
        <input type="email" name="form_email" placeholder="Email" />
        <br />
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
