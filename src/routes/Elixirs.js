import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';

export default function Elixirs() {
  const [elixirs, setElixirs] = useState([]);
  
  const ENDPOINT = 'Elixirs';
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setElixirs(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setWizards(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Elixirs</h2>
      {elixirs.map((elixir) => <Elixir key={elixir.id} />)}
    </main>
  );
}

const Elixir = ({ elixir }) => {
  return (
    <div className='col-3'>
      {elixir.name && <h2>{elixir.name}</h2>}
      {elixir.effect && <div>Effect: {elixir.effect}</div>}
      {elixir.sideEffects && <div>Side Effects: {elixir.sideEffects}</div>}
      {elixir.characteristics && <div>Characteristics: {elixir.characteristics}</div>}
      {elixir.ingredients && elixir.ingredients.length > 0 && <div>Ingredients: {elixir.ingredients.map((ingredient) => ingredient.name).join(', ')}</div>}
      {elixir.time && <div>Time: {elixir.time}</div>}
      {elixir.difficulty && <div>Difficulty: {elixir.difficulty}</div>}
      {elixir.manufacturer && <div>Manufacturer: {elixir.manufacturer}</div>}
    </div>
  )
}