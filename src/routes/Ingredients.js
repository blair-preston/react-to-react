import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setIngredients(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setIngredients(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient) => <Ingredient key={ingredient.id} ingredient={ingredient} />)}
    </main>
  );
}

const Ingredient = ({ ingredient }) => {
  return (
    <div className='col-3'>
      {ingredient.name && <h2>{ingredient.name}</h2>}
    </div>
  )
}