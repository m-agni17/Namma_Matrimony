import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    password: '',
    email_id: '',
    gender: '',
    Date_of_Birth: '',
    First_Name: '',
    Last_Name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="email" name="email_id" placeholder="Email" onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
      <input type="date" name="Date_of_Birth" placeholder="Date of Birth" onChange={handleChange} />
      <input type="text" name="First_Name" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="Last_Name" placeholder="Last Name" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
