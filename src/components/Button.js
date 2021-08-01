import styled from 'styled-components';

export default styled.button`
	height: 52px;
	padding:0 16px;

	border: none;

	color: #FFF;
	background-color: ${({ theme }) => theme.colors.primary.main};
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	font-size: 16px;
	font-weight: bold;

	border-radius: 4px;

	transition: background-color .2s ease-in;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.light};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	&:disabled {
		background-color: #CCC;
		cursor: not-allowed;
	}
`;
