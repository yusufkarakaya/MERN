import { useState } from 'react';

export default function RegisterPage() {
  const [register, setRegister] = useState({ username: '', password: '' });

  function registerHandler(e) {
    e.preventDefault();
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: register.username,
        password: register.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form className='register' onSubmit={registerHandler}>
      <h1>Register</h1>
      <input
        type='text'
        placeholder='username'
        value={register.username}
        name='username'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        value={register.password}
        name='password'
        onChange={handleChange}
      />
      <button type='submit'>Register</button>
    </form>
  );
}
