import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Houses() {
  const ENDPOINT = 'Houses';
  const [houses, setHouses] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setHouses(data);
    } else {
      getData(ENDPOINT)
        .then(() => {
          setHouses();
          setLocalStorage();
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Houses</h2>
      {houses.map((house) => <House key={house.id} house={house} />)}
    </main>
  );
}


const House = () => {
  return (
    <div className='col-3'>
      <h2>{house.name}</h2>
      <div>Colors: {house.houseColours}</div>
      <div>Founder: {house.founder}</div>
      <div>Animal: {house.animal}</div>
      <div>Element: {house.element}</div>
      <div>Ghost: {house.ghost}</div>
      <div>Common Room: {house.commonRoom}</div>
    </div>
  )
}