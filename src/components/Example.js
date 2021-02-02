import React,{useState} from 'react';
//import { useEffect } from "react";
const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    const useEffect=() => {
        fetch('https://pokeapi.co/api/v2/pokemon??limit=807&offset=0.')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    } 
 
    return (
        <div>
            <button onClick={useEffect} >Fetch Pokemon</button>
            { pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Example;