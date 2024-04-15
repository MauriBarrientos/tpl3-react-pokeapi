import React, { useState, useEffect } from 'react';

const App = () => {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        const fetchPokedex = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=553');
                const data = await response.json();
                setPokedex(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPokedex();
    }, []);

    const eliminarPoke = index => {
        const pokeactualizado = pokedex.filter((_, i) => i !== index);
        setPokedex(pokeactualizado);
    };

    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                {pokedex.map((pokemon, index) => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                        <button className="btn btn-danger" onClick={() => eliminarPoke(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
