import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

export const TitleWrapper = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const PencilIcon = styled.img``;

export const Title = styled.div``;

export const InputWrapper = styled.div`
	margin-top: 40px;
	display: flex;
	gap: 24px;
`;

export const Input = styled.input`
	width: 180px;
	height: 52px;
	padding-left: 20px;
	border: 1px solid #bdbdbd;
`;

export const ContentsWrapper = styled.div`
	margin-top: 20px;
	border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
	width: 100%;
	min-height: 108px;
	border: none;
	padding: 20px;

	::placeholder {
		color: #bdbdbd;
		font-weight: 500;
	}
`;

export const BottomWrapper = styled.div`
	border-top: 1px solid #f2f2f2;
	display: flex;
`;

export const ContentsLength = styled.div`
	width: 100%;
	height: 52px;
	display: flex;
	align-items: center;
	padding-left: 20px;
	color: #bdbdbd;
	font-weight: 500;
`;

export const Button = styled.button`
	width: 92px;
	height: 52px;
	background-color: #000000;
	color: #ffffff;
	font-weight: 500;
	cursor: pointer;
`;
