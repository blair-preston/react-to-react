import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Wizards() {
  const ENDPOINT = 'Wizards';
  const [wizards, setWizards] = useState();
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setWizards(data);
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
      <h2>Wizards</h2>
    </main>
    {wizards.map((wizard) => <Wizard key={wizard.id} wizard={wizard} />)}
  );
}

const Wizard = ({ wizard }) => {
  return (
    <div className='col-3'>
      {(wizard.firstName && wizard.lastName) && <h2>{wizard.firstName}{' '}{wizard.lastName}</h2>}
    </div>
  )
}