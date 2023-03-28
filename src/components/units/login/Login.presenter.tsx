import * as S from './Login.styles';

export default function LoginUI() {
	return (
		<S.Wrapper>
			<S.InnerLogo>
				<S.AccentColor>{'{ }'} </S.AccentColor>
				project
			</S.InnerLogo>
			<S.LoginForm>
				<S.Email type="text" placeholder="이메일을 입력하세요" />
				<S.Error />
				<S.Password type="password" placeholder="비밀번호를 입력하세요" />
				<S.Error />
				<S.LoginButton>로그인</S.LoginButton>
			</S.LoginForm>
			<S.InnerWrapper>
				<S.Text>아직 회원이 아니시라면?</S.Text>
				<S.MoveToSignUp>회원가입</S.MoveToSignUp>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
