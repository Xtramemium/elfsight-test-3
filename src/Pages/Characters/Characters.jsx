import { useEffect, useState } from 'react';
import { defaultReq } from '../../Constants';
import styled from 'styled-components';

const CharactersWrapper = ({ className }) => {
	const [characterData, setCharacterData] = useState(null);

	const CharsDiv = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 10px;

	`;

	const InfoDiv = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
	`;

	const FilterDiv = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
	`;

	const Header = styled.header`
		display: flex;
		justify-content: space-between;
		margin-bottom: 50px;
		
	`

	useEffect(() => {
		fetch(defaultReq)
			.then(res => res.json())
			.then((data) => {
				setCharacterData(data);
			});
	}, []);

	return (
		<div className={(className)}>
			<FilterDiv>
				<Header>Перед вами персонажи РИМ</Header>
				{characterData && characterData.results.map((char) => (
					<div>
						<CharsDiv>
							<section>
								<img src={char.image} alt={'Character image'} />
							</section>
							<InfoDiv>
								<section>
									<p>{char.name}</p>
								</section>
								<section>
									<p>{char.status}</p>
								</section>
								<section>
									<p>{char.gender}</p>
								</section>
							</InfoDiv>
						</CharsDiv>

					</div>

				))}
		</FilterDiv>
</div>
)
	;
};

export const Characters = styled(CharactersWrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;