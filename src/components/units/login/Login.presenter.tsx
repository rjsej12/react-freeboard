import * as S from './Login.styles';
import type { ILoginUIProps } from './Login.types';

export default function LoginUI(props: ILoginUIProps) {
	return (
		<S.Wrapper>
			<S.InnerLogo onClick={props.handleClickLogo}>
				<S.AccentColor>{'{ }'} </S.AccentColor>
				project
			</S.InnerLogo>
			<S.LoginForm onSubmit={props.handleSubmit}>
				<S.Email type="text" placeholder="이메일을 입력하세요" {...props.register('email')} />
				<S.Error>{props.formState.errors.email?.message}</S.Error>
				<S.Password type="password" placeholder="비밀번호를 입력하세요" {...props.register('password')} />
				<S.Error>{props.formState.errors.password?.message}</S.Error>
				{props.isSignup && (
					<>
						<S.Name type="text" placeholder="이름을 입력하세요" {...props.register('name')} />
						<S.Error>{props.formState.errors.name?.message}</S.Error>
					</>
				)}
				<S.LoginButton>{props.isSignup ? '가입하기' : '로그인'}</S.LoginButton>
			</S.LoginForm>
			<S.InnerWrapper>
				{props.isSignup ? (
					<>
						<S.Text>이미 회원이시라면?</S.Text>
						<S.MoveToSignUp onClick={props.handleClickMoveToLogin}>로그인</S.MoveToSignUp>
					</>
				) : (
					<>
						<S.Text>아직 회원이 아니시라면?</S.Text>
						<S.MoveToSignUp onClick={props.handleClickMoveToSignUp}>회원가입</S.MoveToSignUp>
					</>
				)}
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
