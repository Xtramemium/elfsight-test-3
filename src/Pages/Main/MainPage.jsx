import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../Components';

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