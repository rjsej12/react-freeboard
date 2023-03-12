import * as S from './LayoutHeader.styles';

export default function LayoutHeaderUI() {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.InnerLogo>
					<S.AccentColor>{'{ }'} </S.AccentColor>
					project
				</S.InnerLogo>
				<S.ButtonWrapper>
					<S.LoginButton>로그인</S.LoginButton>
					<S.SignupButton>회원가입</S.SignupButton>
				</S.ButtonWrapper>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
