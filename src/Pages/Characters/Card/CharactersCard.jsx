import styled from 'styled-components';
import { unloadPicture } from '../../../Constants';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
    }

    img {
        max-width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;
    }
`;

export const CharacterCard = ({ character, onCardClick }) => {
	return (
		<>
			<CardContainer onClick={onCardClick}>
				<img src={character.image} alt={character.name} />
				<h3>Имя: {character.name}</h3>
				<p>Статус: {character.status}</p>
				<p>Пол: {character.gender}</p>
				{character.type && <p>Тип: {character.type}</p>}
				<p>Вид: {character.species}</p>
			</CardContainer>
		</>
	);
};


