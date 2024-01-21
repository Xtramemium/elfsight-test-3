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
	justify-content: center;
	align-items: center;
	font-size: 13px;
	width: 150px;
	height: 50px;
`