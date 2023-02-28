import './App.css';
import data from './data.json';
import DisplayData from './components/DisplayData';
import { useEffect, useState } from 'react';
import Mush from './components/mush';
import mydata from './components/Mush.json';
function App() {
  const [name, setName] = useState([]);
  useEffect(() => {
    const results = data.map((names) => names.name);
    console.log(results);
    setName(results);
  }, []);
  return (
    <>
      <div className='App'>
        <h1>Names of People</h1>
        <DisplayData names={name} />
      </div>
      <div className='mycontainer'>
        <h1>the deadly squad</h1>
        <div className='mush'>
          {mydata.map((single) => {
            return <Mush {...single} key={single.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
