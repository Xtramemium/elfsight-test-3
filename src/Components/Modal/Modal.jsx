import React from 'react';
import styled from 'styled-components';
import { unloadPicture } from '../../Constants';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ModalImage = styled.img`
    max-width: 100%;
    border-radius: 5px;
`;

export const Modal = ({ character, closeModal }) => {
	const characterEntries = Object.entries(character);
	return (
		<ModalOverlay onClick={closeModal}>
			<ModalContent>
				{character.image && typeof character.image === 'string' ? (
					<ModalImage src={character.image} alt={character.name} />
				) : (
					<p>{unloadPicture}</p>
				)}
				{characterEntries.map(([key, value]) => (
					value && typeof value === 'string' && (
						<p key={key}>
							{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
						</p>
					)
				))}
			</ModalContent>
		</ModalOverlay>
	);
};
