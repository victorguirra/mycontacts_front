import styled from 'styled-components';

export const Container = styled.header`
	margin-top: 74px;

	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 201px;
	}
`;

export const InputSeachContainer = styled.div`
	width: 100%;
	margin-top: 48px;

	input {
		width: 100%;
		height: 50px;

		padding: 0 16px;

		background: #FFF;
		box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.04);

		border: none;
		border-radius: 25px;

		outline: 0;

		&::placeholder {
			color:#BCBCBC;
		}
	}
`;
