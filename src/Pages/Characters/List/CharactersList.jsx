import React from 'react';
import styled from 'styled-components';
import { CharacterCard } from '../Card/CharactersCard';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const H1 = styled.h1`
	text-align: center;
`

export const CharacterList = ({ characters }) => {
	return (
		<>
			<H1>Просмотр персонажей Рик и Морти</H1>
			<ListContainer>
				{characters.map(character => (
					<CharacterCard key={character.id} character={character} />
				))}
			</ListContainer>
		</>

	);
};

