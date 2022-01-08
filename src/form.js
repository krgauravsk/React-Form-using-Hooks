import React, { useState } from "react";
import "./form.css";

function form() {
  //for store the data
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  //for success-submit the whole forms
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  // for show firstName,lastName,email
  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  //form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/*show the success message */}
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}

        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameChange}
        />
        {/*show the error message */}
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameChange}
        />
        {/*show the error message */}
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailChange}
        />
        {/*show the error message */}
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button class="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default form;
