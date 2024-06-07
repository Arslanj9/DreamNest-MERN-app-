import { useState } from 'react';
import '../styles/pages/Register.scss'

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} required/>
          <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} required/>
          <input type="email" placeholder="Email" name="email" value={formData.email} required/>
          <input type="password" placeholder="Password" name="password" value={formData.password} required/>
          <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} required/>
          <input id="image" type="file" name="profileImage" accept="image/*" style={{ display: "none" }} required/>
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile image" />
            <p>Upload Your Photo</p>
          </label>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login Here</a> </p>
      </div>
    </div>
  )
}

export default Register