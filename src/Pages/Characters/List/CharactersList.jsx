import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CharacterCard } from '../Card/CharactersCard';
import { defaultReq } from '../../../Constants';

const Wrapper = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const H1 = styled.h1`
	text-align: center;
`

export const CharacterList = () => {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch(defaultReq)
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results);
			});
	}, []);

	return (
		<Wrapper>
			<H1>Просмотр персонажей Рик и Морти</H1>
			<ListContainer>
				{characters && characters.map(character => (
					<CharacterCard key={character.id} character={character} />
				))}
			</ListContainer>
		</Wrapper>

	);
};

