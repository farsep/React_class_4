/*
import React, { useEffect, useState } from 'react';
import DBS_Data from '../data/DBS_Data.ts';

export default function DBS_Characters_List() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        DBS_Data.then(data => setCharacters(data));
    }, []);
    return (
        <div>
            <h1>Dragon Ball Super Characters</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}*/


export const DBS_Characters_List = (props) => {
    return (
        <article>
            <h1>{props.name}</h1>
            <img src={props.image} />
        </article>
    );
};
