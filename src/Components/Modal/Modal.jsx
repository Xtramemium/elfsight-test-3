import styled from 'styled-components';

const ModalWrapper = ({className, children}) => {
	const Content = styled.div`
	padding: 20px;
	border-radius: 15px;
	background-color: white;
	height: 200px;
	width: 400px;
	`

	return (
		<div className={className}>
			<Content/>
		</div>
	)
}

export const Modal = styled(ModalWrapper)`
	height: 100vh;
	width: 100vh;
	background-color:  rgba(0, 0 , 0 , 0.5);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`