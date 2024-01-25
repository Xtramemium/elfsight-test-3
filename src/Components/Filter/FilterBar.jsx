import React from 'react';
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
	const getAttributes = {
		getCharType: () => [...new Set(Object.values(characters).map((char) => char.type).filter(Boolean))],
		getCharSpecies: () => [...new Set(Object.values(characters).map((char) => char.species))],
		getCharGender: () => [...new Set(Object.values(characters).map((char) => char.gender))],
	};

	const handleSelectChange = (filter, e) => {
		const value = e.target.value;
		onFilterChange(filter, value);
	};

	return (
		<BarWrapper>
			<label>
				Name:
				<input type="text" onChange={(e) => handleSelectChange('name', e)} />
			</label>

			<label>
				Type:
				<FilterSelect onChange={(e) => handleSelectChange('type', e)}>
					<option value="">All</option>
					{getAttributes.getCharType().map((charType) => (
						<option key={charType} value={charType}>
							{charType}
						</option>
					))}
				</FilterSelect>
			</label>

			<label>
				Species:
				<FilterSelect onChange={(e) => handleSelectChange('species', e)}>
					<option value="">All</option>
					{getAttributes.getCharSpecies().map((charSpecies) => (
						<option key={charSpecies} value={charSpecies}>
							{charSpecies}
						</option>
					))}
				</FilterSelect>
			</label>

			<label>
				Gender:
				<FilterSelect onChange={(e) => handleSelectChange('gender', e)}>
					<option value="">All</option>
					{getAttributes.getCharGender().map((charGender) => (
						<option key={charGender} value={charGender}>
							{charGender}
						</option>
					))}
				</FilterSelect>
			</label>
		</BarWrapper>
	);
};
