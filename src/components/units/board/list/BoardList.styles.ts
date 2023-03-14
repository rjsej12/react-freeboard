import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 1200px;
	margin: 100px auto;
`;

export const TableTop = styled.div`
	border-top: 1px solid #000000;
`;

export const TableBottom = styled.div`
	border-bottom: 1px solid #000000;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	height: 52px;
	line-height: 52px;
	border-bottom: 1px solid #bdbdbd;
	font-weight: 400;
	color: #4f4f4f;
`;

export const ColumnHeaderBasic = styled.div`
	width: 10%;
	text-align: center;
	font-weight: 500;
	color: #000000;
`;

export const ColumnHeaderTitle = styled.div`
	width: 70%;
	text-align: center;
	font-weight: 500;
	color: #000000;
`;

export const ColumnBasic = styled.div`
	width: 10%;
	text-align: center;
`;

export const ColumnTitle = styled.div`
	width: 70%;
	text-align: center;
	cursor: pointer;

	:hover {
		font-weight: 700;
		color: #000000;
	}
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 40px;
`;

export const PencilIcon = styled.img`
	width: 18px;
	height: 18px;
`;

export const Button = styled.button`
	width: 172px;
	height: 52px;
	background-color: white;
	border: 1px solid #f2f2f2;
	border-radius: 10px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	cursor: pointer;

	:hover {
		background-color: #ffd600;
	}
`;
