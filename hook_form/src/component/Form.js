import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type='text'
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type='text'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type='password'
            onChange={(event) => setConfirmpassword(event.target.value)}
          />
        </div>
      </form>

      <div>
        <h3>Your form data: </h3>
        <p>First Name: {username}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p>
      </div>
    </div>
  );
}
