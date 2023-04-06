import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className='App'>
      <PersonCard
        firstName={'Doe'}
        lastName={'Jane'}
        age={45}
        hairColor={'black'}
      />

      <PersonCard
        firstName={'Smith'}
        lastName={'Jhon'}
        age={88}
        hairColor={'brown'}
      />

      <PersonCard
        firstName={'Fillmore'}
        lastName={'Millard'}
        age={33}
        hairColor={'red'}
      />

      <PersonCard
        firstName={'Smith'}
        lastName={'Mar'}
        age={35}
        hairColor={'purple'}
      />
    </div>
  );
}

export default App;
