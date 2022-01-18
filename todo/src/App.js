import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [cards, setCards] = useState(["creat me"])
  const [ columns, setColumns] = useState(["red", "white", "blue"])
  //use effect to update where the cards would be stored upon creation, or movement
  //get one column working where you can add cards and remove from
  //then add archived the removed cards go
  //then delete from that archived list
  //use styled components for the columns
  return (
    <div className="App">
      <div >
      {columns.map((i) => (
        <div className='blocks' style = {{backgroundColor: i}}> {i}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
