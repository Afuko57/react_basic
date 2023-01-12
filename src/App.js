import React, {useEffect, useState} from 'react';
import './css/App.css';
import MyBar from './MyBar';
import MyCard from './MyCard';



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then((result) => { 
        setData(result); 
      })
  }, [])

  return (
    <>
    <MyBar />
    <h1>Attractions</h1>
    <div className='grid-container'>
    {data.map(item => (
      <MyCard key={item} fname={item.fname} avatar={item.avatar} username={item.username}/>
    ))}
    </div>
    </>
  );
}

export default App;
