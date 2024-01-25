import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultReq as api } from '../../../utils';
import { FilterBar, Modal, PageSwitch } from '../../../Components';
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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		api.getCharacters(currentPage)
			.then((data) => {
				setCharacters(data);
				setFilteredCharacters(data);
			})
			.catch((error) => console.error('Ошибка запроса персонажей:', error));
	}, [currentPage]);

	useEffect(() => {
		api.getInfo()
			.then((info) => {
				setTotalPages(info.pages);
			})
			.catch((error) => console.error('Ошибка запроса информации:', error));
	}, []);

	const handleFilterChange = (filter, value) => {
		const updatedFilteredCharacters = characters.filter((character) =>
			character[filter].toLowerCase().includes(value.toLowerCase())
		);
		setFilteredCharacters(updatedFilteredCharacters);
	};

	const handleCardClick = ({ target }, character) => {
		setSelectedCharacter(character);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	return (
		<Wrapper>
			<PageSwitch
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
			<H1>Просмотр персонажей Рик и Морти</H1>
			<FilterBar onFilterChange={handleFilterChange} characters={characters} />
			<ListContainer>
				{filteredCharacters.map((character) => (
					<CharacterCard
						key={character.id}
						character={character}
						onCardClick={(event) => handleCardClick(event, character)}
					/>
				))}
			</ListContainer>
			{isModalOpen && (
				<Modal character={selectedCharacter} closeModal={closeModal} />
			)}
		</Wrapper>
	);
};
