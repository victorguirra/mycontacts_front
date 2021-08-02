import styled from 'styled-components';

export const Overlay = styled.div`
	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);

	position: absolute;
	left: 0;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 450px;

	background: #FFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	border-radius: 4px;
	padding: 24px;

	h1 {
		font-size: 22px;
		color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
	}

	p {
		margin-top: 8px;
	}
`;

export const Footer = styled.footer`
	margin-top: 32px;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	.cancel-button {
		color: ${({ theme }) => theme.colors.gray[200]};
		background: transparent;

		border: none;

		font-size: 16px;
		margin-right: 8px;
	}
`;
