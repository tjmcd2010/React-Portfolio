import React, { useState } from 'react';

//function to define initial values for form input and error fields
function MyComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: ''
  });

  const { name, email, message, nameError, emailError, messageError } = formData;

  //function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name}Error`]: ''
    }));
  };

  //function to validate input fields and ensure the email address input matches that standard email format
  const validateField = (fieldName, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${fieldName} is required`;
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Invalid email address format';
      }
    }
    return error;
  };

  //function to handle blur events on input fields, triggering validation for the corresponding field
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [`${name}Error`]: error
    }));
  };

  //This validates that all the required fields are input correctly before the form can be submitted and 
  //prepares error messages in the case that any required data is missing
  const validateForm = () => {
    const errors = {};
    errors.nameError = validateField('name', name);
    errors.emailError = validateField('email', email);
    errors.messageError = validateField('message', message);

    setFormData((prevState) => ({
      ...prevState,
      ...errors
    }));

    return Object.keys(errors).every((key) => !errors[key]);
  };

  //function to handle form submission, triggering the validation function and logging the 
  //form data to the console if valid. This also resets the form fields after submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form data
      console.log('Form data:', formData);
    }
  };

  return (
    <>
      <h3>
        If you have any questions about my portfolio or would like to contact me, please fill out the requested information below. Thank you!
      </h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <p>Name: {name}</p>
          <input name="name" value={name} onChange={handleChange} onBlur={handleBlur} />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
          <p>Email (must be valid email format): {email}</p>
          <input name="email" value={email} onChange={handleChange} onBlur={handleBlur} />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <p>Message: {message}</p>
          <textarea name="message" value={message} onChange={handleChange} onBlur={handleBlur} />
          {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
          <br /><br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default MyComponent;