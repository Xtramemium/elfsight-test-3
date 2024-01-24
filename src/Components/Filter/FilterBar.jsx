import React, { useState } from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
    padding: 20px;
    background-color: rgba(237, 231, 225);
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    border-radius: 10px;
`;

const FilterSelect = styled.select`
    margin-right: 8px;
`;

export const FilterBar = ({ onFilterChange, characters }) => {

	// const charactersAttributes = characters.map(character => ({
	// 	status: character.status,
	// 	type: character.type,
	// 	species: character.species,
	// 	gender: character.gender
	// }))

	const getAttributes = {
		getCharStatus: () => {
			const charsAttr = Object.values(characters).map((char) => char.status)
			const uniqueStatusValues = [...new Set(charsAttr)];

			return uniqueStatusValues
		},

		getCharType: () => {
			const charsAttr = Object.values(characters).map((char) => char.type)
			const uniqueStatusValues = [...new Set(charsAttr)];

			return uniqueStatusValues
		},

		getCharGender: () => {
			const charsAttr = Object.values(characters).map((char) => char.status)
			const uniqueStatusValues = [...new Set(charsAttr)];

			return uniqueStatusValues
		},

		getCharName: () => {
			const charsAttr = Object.values(characters).map((char) => char.name)
			const uniqueStatusValues = [...new Set(charsAttr)];

			return uniqueStatusValues
		}

	}


	const charsAttr = Object.values(characters).map((char) => char.status)
	const uniqueStatusValues = [...new Set(charsAttr)];
	const handleSelectChange = (filter, e) => {
		const value = e.target.value;
		onFilterChange(filter, value);
	};

	return (
		<BarWrapper>
			<label>
				Name:
				<input
					type="text"
					onChange={(e) => handleSelectChange('name', e)}
				/>
			</label>
			<label>
				{getAttributes.getCharType().map((charType) => (
					<option>{charType}</option>
				))}
			</label>

			{/*<label>Статус:*/}
			{/*	<FilterSelect onChange={(e) => handleSelectChange(e)}>*/}
			{/*		<option>{getAttributes.getCharStatus()}</option>*/}
			{/*	</FilterSelect>*/}
			{/*</label>*/}
			{/*<label>Пол:*/}
			{/*	<FilterSelect onChange={(e) => handleSelectChange(e)}>*/}
			{/*		<option>{getAttributes.getCharGender()}</option>*/}
			{/*	</FilterSelect>*/}
			{/*</label>*/}
			{/*<label>Тип:*/}
			{/*	<FilterSelect onChange={(e) => handleSelectChange(e)}>*/}
			{/*		<option>{getAttributes.getCharType()}</option>*/}
			{/*	</FilterSelect>*/}
			{/*</label>*/}
			{/*<label>Вид:*/}
			{/*	<FilterSelect onChange={(e) => handleSelectChange(e)}>*/}
			{/*		<option>{getAttributes}</option>*/}
			{/*	</FilterSelect>*/}
			{/*</label>*/}


		</BarWrapper>
	);
};