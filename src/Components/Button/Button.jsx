import styled from 'styled-components';

const ButtonWrapper = ({ children, className, ...props }) => {
	return (
		<button className={className} { ...props}>
			{children}
		</button>
	)
}

export const Button = styled(ButtonWrapper)`
	display: flex;
	background-color: black;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	border-radius: 20px;
	height: 30%;
	border: none;
`