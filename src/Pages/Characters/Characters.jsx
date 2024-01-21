import { useEffect, useState } from 'react';
import { defaultReq } from '../../Constants';
import styled from 'styled-components';
import { NonLoadedImage } from '../../../../../../WebstormProjects/elfsight-test-3/src/Components';

const CharactersWrapper = ({ className }) => {
	const [characterData, setCharacterData] = useState(null);

	useEffect(() => {
		fetch(defaultReq)
			.then(res => res.json())
			.then((data) => {
				setCharacterData(data)
			})
	}, []);
	console.log(characterData);
	return (
		<div className={( className )}>
			{characterData && characterData.results.map((char) => (
				<div>
					<div>
						<img src={char.image} alt={'https://zipbenzo.ru/image/placeholder.jpg'} />
					</div>
					<div>
						<section>
							<div>
								<span>
								{char.name}
								</span>
							</div>
						</section>
						<section>
							<div>
								<span>
								{char.status}
								</span>
							</div>
						</section>
						<section>
							<div>
								<span>
								{char.gender}
								</span>
							</div>
						</section>
					</div>
				</div>
			))}
		</div>
	)
}

export const Characters = styled(CharactersWrapper)`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
    grid-gap: 80px;
`