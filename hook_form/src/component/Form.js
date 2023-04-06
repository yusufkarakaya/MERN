import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [lastname, setLastname] = useState('');
  const [lastnameError, setLastnameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmpassword, setConfirmpassword] = useState('');
  const [confirmpasswordError, setConfirmpasswordError] = useState('');

  const handleFirstname = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length < 2) {
      setUsernameError('Title must be at least 2 character.');
    } else {
      setUsernameError('');
    }
  };

  const handleLastname = (event) => {
    setLastname(event.target.value);
    if (event.target.value.length < 2) {
      setLastnameError('Last name must bee at least 2 character.');
    } else {
      setLastnameError('');
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length < 2) {
      setEmailError('Email must bee at least 2 character.');
    } else {
      setEmailError('');
    }
  };

  const passwordHandle = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError('Password must bee at least 8 character.');
    } else {
      setPasswordError('');
    }
  };

  const confirmpasswordHandle = (event) => {
    setConfirmpassword(event.target.value);
    if (password !== event.target.value) {
      setConfirmpasswordError('Passwords must match');
    } else {
      setConfirmpasswordError('');
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input type='text' onChange={handleFirstname} />
          {usernameError ? <div>{usernameError}</div> : ''}
        </div>

        <div>
          <label>Last Name:</label>
          <input type='text' onChange={handleLastname} />
          {lastnameError ? <div> {lastnameError} </div> : ''}
        </div>

        <div>
          <label>Email:</label>
          <input type='text' onChange={handleEmail} />
          {emailError ? <div> {emailError} </div> : ''}
        </div>

        <div>
          <label>Password:</label>
          <input type='password' onChange={passwordHandle} />
          {passwordError ? <div> {passwordError}</div> : ''}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type='password' onChange={confirmpasswordHandle} />
          {confirmpasswordError ? <div>{confirmpasswordError}</div> : ''}
        </div>
      </form>
    </div>
  );
}
