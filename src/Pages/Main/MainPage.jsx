import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../Components';

const MainPageWrapper = ({ className }) => {

	const WelcomeBlock = styled.div`
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        background: rgba(0, 0, 0);
        padding: 20px;
        color: white;
        border-radius: 20px;
        width: 300px;
        height: 150px;
	`

	const H2 = styled.h2`
		text-align: center;
    	margin-bottom: 20px;
	`

	const StyledLink = styled(Link)`
        text-decoration: none;
		color: white;
		
		&:hover {
            color: orange;
        }
        `

	return (
		<div className={( className )}>
			<WelcomeBlock>
				<H2>Добро пожаловать</H2>
				<Button><StyledLink to="/Characters">Перейти к персонажам</StyledLink></Button>
			</WelcomeBlock>

		</div>
	)
}

export const MainPage = styled(MainPageWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`