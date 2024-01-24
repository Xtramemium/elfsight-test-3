import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultReq as api } from '../../../utils';
import { FilterBar, Modal } from '../../../Components';
import { CharacterCard } from '../Card/CharactersCard';


const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const H1 = styled.h1`
  text-align: center;
`;

export const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	const [filteredCharacters, setFilteredCharacters] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	useEffect(() => {
		api.getCharacters()
			.then((data) => {
				setCharacters(data);
				setFilteredCharacters(data);
			})
			.catch((error) => console.error('Error fetching characters:', error));
	}, []);

	const handleFilterChange = (filter, value) => {

		const updatedFilteredCharacters = characters.filter(character =>
			character.name.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredCharacters(updatedFilteredCharacters);
	};

	const handleCardClick = (character) => {
		setSelectedCharacter(character);
	};

	const closeModal = () => {
		setSelectedCharacter(null);
	};

	const charactersInfoInArr = Object.values(characters)


	return (
		<Wrapper>
			<H1>Просмотр персонажей Рик и Морти</H1>
			<FilterBar onFilterChange={handleFilterChange} characters={charactersInfoInArr} />
			<ListContainer>
				{filteredCharacters && filteredCharacters.map(character => (
					<CharacterCard key={character.id} character={character} onCardClick={handleCardClick} />
				))}
			</ListContainer>
			{selectedCharacter && <Modal character={selectedCharacter} onClose={closeModal} />}
		</Wrapper>
	);
};

