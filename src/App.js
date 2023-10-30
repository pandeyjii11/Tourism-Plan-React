
import './App.css';
import Tours from './Components/Tours'
import data from './data'
import React, { useState } from 'react';

function App() {

  const [tour, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tour.filter( tours => tours.id!==id);
    setTours(newTours);
  }

  if(tour.length === 0)
  {
    return(
      <div className='refresh'>
        <h2>
          No Tours Left
        </h2>
        <button className='btn-white' onClick={() => {setTours(data)}}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tour={tour} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
