import { useState } from 'react';
import './App.css';
import tourData from './tourData';
import Section from './components/Section';
import Header from './components/Header';

function App() {

  const [tours, setTours] = useState(tourData);

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  const refreshPage = () => {
    setTours([...tourData])
  };

  return (
    <div className="app">
      <Header tours={tours} onRefresh={refreshPage}/>
      <Section tours={tours} onDelete={deleteTour}/>
    </div>
  );
}

export default App;
