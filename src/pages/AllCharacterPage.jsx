import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CharCard from "../components/CharCard";


function AllCharacterPage() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async() => {
            const response = await axios.get("https://rickandmortyapi.com/api/character")
            setCharacters(response.data.results);
            console.log(setCharacters)
        }   
        getCharacters()

    }, []);

    return (
        <>
        {characters.length ? characters.map((c,i) => <CharCard key={i} character={c}/>): <div>Loading</div>}
        </>
    )
}

export default AllCharacterPage