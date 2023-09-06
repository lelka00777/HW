import './App.css';
import { HW1 } from './HW/1/HW1';
import { HW2 } from './HW/2/HW2';
import { HW3 } from './HW/3/HW3';
import { HW4 } from './HW/4/HW4';

function App() {


  
  return (
    <div className="App">
      <List/>
      <HW1 />
      <HW2 />
      <HW3 />
      <HW4 />
    </div>
  );
}

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

 function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

export default App;
