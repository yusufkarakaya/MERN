import React, { useState } from 'react';
const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  const [birthday, setBirthday] = useState(age);
  function handleClick() {
    setBirthday(birthday + 1);
  }

  return (
    <div>
      <h1>
        {firstName}, {lastName}
      </h1>
      <p>Age: {birthday}</p>
      <p>Hair Color: {hairColor}</p>

      <button onClick={handleClick}>Birthday button for {firstName}</button>
    </div>
  );
};

export default PersonCard;
