import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 32px;
`;

export const Header = styled.header`
	display:flex;
	align-items: center;
	justify-content: space-between;

	strong {
		color: #222;
		font-size: 24px;
	}

	a {
		color: ${({ theme }) => theme.colors.primary.main};
		font-weight: bold;

		padding: 8px 16px;
		text-decoration: none;

		border-radius: 4px;
		border: 2px solid ${({ theme }) => theme.colors.primary.main};

		transition: all .2s ease-in;

		&:hover {
			color: #FFF;
			background: ${({ theme }) => theme.colors.primary.main};
		}
	}
`;
