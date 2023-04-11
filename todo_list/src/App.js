import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [
  {
    id: '1',
    input: 'Get your black belt',
    checked: false,
  },
  {
    id: '2',
    input: 'Get your full stack job',
    checked: false,
  },
];

const App = () => {
  const [list, setList] = useState(initialList);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ input, id: uuidv4(), checked: false });
    console.log(newList);
    setList(newList);

    setInput('');
  }

  function handleCheck(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(newList);
  }

  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <div className='main'>
      <div>
        <input type='text' value={input} onChange={handleChange} />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <label className={item.checked ? 'strikeThrough' : ''}>
              {item.input}
              <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
            </label>

            <input
              type='submit'
              onClick={() => handleDelete(item.id)}
              value='Delete'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
