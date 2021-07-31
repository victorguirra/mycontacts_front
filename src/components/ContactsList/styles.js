import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 32px;
`;

export const Header = styled.header`
	display:flex;
	align-items: center;
	justify-content: space-between;

	strong {
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

export const ListContainer = styled.div`
	margin-top: 24px;

	header {
		margin-bottom: 8px;

		button {
			background: transparent;
			border: none;

			display:flex;
			align-items: center;

			span {
				color: ${({ theme }) => theme.colors.primary.main};
				font-weight: bold;
				margin-right: 8px;
			}
		}
	}
`;

export const Card = styled.div`
	background: #FFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	padding: 16px;
	border-radius: 4px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& + & {
		margin-top: 16px;
	}

	.info {
		.contact-name {
			display: flex;
			align-items: center;

			small {
				color: ${({ theme }) => theme.colors.primary.main};
				background-color: ${({ theme }) => theme.colors.primary.lighter};
				border-radius:4px;

				font-weight: bold;
				text-transform: uppercase;

				padding:4px;
				margin-left: 8px;
			}
		}

		span {
			color: ${({ theme }) => theme.colors.gray[200]};
			font-size: 14px;
			display: block;
		}
	}

	.actions {
		display: flex;
		align-items: center;

		button {
			background: transparent;
			border: none;
			margin-left: 8px;
		}
	}
`;
