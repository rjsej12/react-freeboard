import styled from '@emotion/styled';

export const Wrapper = styled.div`
	height: 156px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InnerWrapper = styled.div`
	width: 1200px;
	display: flex;
	justify-content: space-between;
`;

export const InnerLogo = styled.div`
	font-size: 28px;
	font-weight: 700;
	cursor: pointer;
`;

export const AccentColor = styled.span`
	color: #ffd600;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
`;

export const LoginButton = styled.button`
	padding: 12px 16px;
	font-weight: 700;
	font-size: 16px;
	background: none;
	border: none;
	cursor: pointer;
`;

export const SignupButton = styled.button`
	padding: 12px 16px;
	font-weight: 700;
	font-size: 16px;
	border: none;
	border-radius: 10px;
	background-color: #ffd600;
	cursor: pointer;
`;
