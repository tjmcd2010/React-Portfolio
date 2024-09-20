import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name}Error`]: ''
    }));
  };

  const validateField = (fieldName, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${fieldName} is required`;
    } else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email address format';
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [`${name}Error`]: error
    }));
  };

  const validateForm = () => {
    const errors = {
      nameError: validateField('name', name),
      emailError: validateField('email', email),
      messageError: validateField('message', message),
    };
    setFormData((prevState) => ({
      ...prevState,
      ...errors
    }));
    return Object.keys(errors).every((key) => !errors[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Reset form or handle submission
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>
        If you have any questions about my portfolio or would like to contact me, please fill out the requested information below. Thank you!
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" value={name} onChange={handleChange} onBlur={handleBlur} />
            <FormErrorMessage>{nameError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={emailError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" value={email} onChange={handleChange} onBlur={handleBlur} />
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={messageError}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" name="message" value={message} onChange={handleChange} onBlur={handleBlur} />
            <FormErrorMessage>{messageError}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="blue" type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default MyComponent;