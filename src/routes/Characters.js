// 6. make character route page

import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'; 
import { getData } from '../utils/data'; 

export default function Characters() {
    const URL = 'https://hp-api.herokuapp.com/api/characters';
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let data = getLocalStorage(URL);
        if (data.length > 0) {
            setCharacters(data);
        } else {
            getData(URL)
                .then((data) => {
                    setCharacters(data);
                    setLocalStorage(URL, data);
                })
        }
    }, []);

    return (
        <main style={{ padding: "1rem 0" }} className="container">
            <div className="row text-center justify-content-center gap-2">
                <h2>Characters with Unicorn Tail-Hair Wand Cores</h2>
                {characters.filter((character) => character.wand.core === 'unicorn tail-hair').map((character) => <Character key={character.id} character={character} />)}
            </div>
        </main>
    );
}

const Character = ({ character }) => {
    return (
        <div className='card col-3'>
        <div className="card-body">
          {character.name && <h2 className='card-title'>{character.name}</h2>}
          <div><strong>House:</strong> {character.house}</div>
          <div><strong>Ancestry:</strong> {character.ancestry}</div>
          <div><strong>Hogwart Student:</strong> {character.hogwartsStudent}</div>
          <div><strong>Actor:</strong> {character.actor}</div>
          <div><strong>Wand Core:</strong> {character.wand.core}</div>
        </div>
      </div>
    )
}