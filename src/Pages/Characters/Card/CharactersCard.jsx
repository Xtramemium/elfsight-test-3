import styled from 'styled-components';
import { unloadPicture } from '../../../Constants';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  } 

	img {
        max-width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;
	}
`;


export const CharacterCard = ({ character }) => {

	return (
		<>
			<CardContainer>
				<img src={character.image} alt={unloadPicture}/>
				<h3>Имя: {character.name}</h3>
				<p>Статус: {character.status}</p>
				<p>Пол: {character.gender}</p>
				{character.type && <p>Тип: {character.type}</p>}
				<p>Вид: {character.species}</p>
			</CardContainer>
		</>
	);
};

