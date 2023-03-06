import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 1200px;
	margin: 100px auto;
`;

export const CardWrapper = styled.div`
	border: 1px solid black;
	padding: 80px 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
	padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Avatar = styled.img`
	margin-right: 16px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
`;

export const Writer = styled.div`
	font-size: 24px;
	font-weight: 500;
	color: #000000;
`;

export const CreatedAt = styled.div`
	color: #828282;
`;

export const Body = styled.div`
	width: 100%;
	min-height: 800px;
`;

export const Title = styled.h1`
	margin-top: 80px;
`;

export const Contents = styled.div`
	margin-top: 40px;
	margin-bottom: 120px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 80px;
	gap: 24px;
`;

export const Button = styled.button`
	width: 180px;
	height: 52px;
	background-color: #ffffff;
	border: 1px solid #bdbdbd;
	font-weight: 500;
	cursor: pointer;

	:hover {
		background-color: #ffd600;
		border-color: #ffffff;
	}
`;
