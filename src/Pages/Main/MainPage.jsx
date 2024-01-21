import styled from 'styled-components';
import { Button } from '../../../../../../WebstormProjects/elfsight-test-3/src/Components';
import { Link } from 'react-router-dom';

const MainPageWrapper = ({ className }) => {



	return (
		<div className={( className )}>
			Добро пожаловать
			<Button><Link to="/Characters">Перейти к персонажам</Link></Button>
		</div>
	)
}

export const MainPage = styled(MainPageWrapper)`

`