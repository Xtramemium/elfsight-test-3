import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultReq } from './Constants';
import { CharacterList } from './Pages';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(defaultReq)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            });
    }, []);


    return (
        <Container>
            <CharacterList characters={characters} />
        </Container>
    );
};

export default App;
