import { useEffect, useState } from 'react';
import { defaultReq } from '../../Constants';
import styled from 'styled-components';

const CharactersWrapper = ({ className }) => {
	const [characterData, setCharacterData] = useState(null);

	useEffect(() => {
		fetch(defaultReq)
			.then(res => res.json())
			.then((data) => {
				setCharacterData(data)
			})
	}, []);

	return (
		<div className={( className )}>
			{characterData && characterData.results.map((char) => (
				<div>
					<div>
						{char.name}
						<div>{char.status}</div>
						<div>{char.gender}</div>
					</div>
				</div>
			))}
		</div>
	)
}

export const Characters = styled(CharactersWrapper)`
	display: flex;
	justify-content: center;
`