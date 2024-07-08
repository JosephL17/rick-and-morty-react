import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function CharactersId() {
    const [character, setCharacter] = useState('');
     const { id } = useParams()

    useEffect(() => {
        const getCharacter = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(response.data)
        }
        getCharacter()
    }, []);

    if (character === '') {
        return <h1>Loading</h1>
    }

    return (
        <>
         <h2>{character.name}</h2>
      <img src={character.image}></img>
      <ul>
        <li>Status: {character.status}</li>
        <li>Location: {character.location.name}</li>
      </ul>
        </>
    )
}

export default CharactersId