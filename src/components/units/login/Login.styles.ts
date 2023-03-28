import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 200px;
`;

export const InnerLogo = styled.div`
	font-size: 28px;
	font-weight: 700;
	cursor: pointer;
`;

export const AccentColor = styled.span`
	color: #ffd600;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
	width: 240px;
	margin-top: 32px;
`;

export const Email = styled.input`
	padding: 12px 12px;
	width: 100%;
`;

export const Password = styled.input`
	padding: 12px 12px;
	width: 100%;
`;

export const Error = styled.div`
	color: red;
	font-size: 12px;
`;

export const LoginButton = styled.button`
	padding: 16px 10px;
	width: 100%;
	background-color: #ffd600;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	color: #000000;
	font-size: 16px;
`;

export const InnerWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Text = styled.span``;

export const MoveToSignUp = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	color: #bdbdbd;
	text-decoration: underline;
	font-size: 16px;
`;
