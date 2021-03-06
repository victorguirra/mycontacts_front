import styled, { css } from 'styled-components';

export default styled.input`
	width: 100%;
	height: 52px;

	padding:0 16px;

	background: #FFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	border: 2px solid transparent;
	border-radius: 4px;

	font-size: 16px;

	outline: none;
	transition:border-color .2s ease-in;
	appearance: none;

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.primary.main};
	}

	${({ theme, error }) => error && css`
		color: ${theme.colors.danger.main};
		border-color: ${theme.colors.danger.main} !important;
	`};
`;
