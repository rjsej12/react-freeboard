import * as S from './LayoutHeader.styles';
import type { ILayoutHeaderProps } from './LayoutHeader.types';

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.InnerLogo onClick={props.handleClickLogo}>
					<S.AccentColor>{'{ }'} </S.AccentColor>
					project
				</S.InnerLogo>
				<S.ButtonWrapper>
					<S.LoginButton onClick={props.handleClickMoveToLogin}>로그인</S.LoginButton>
					<S.SignupButton onClick={props.handleClickMoveToSignup}>회원가입</S.SignupButton>
				</S.ButtonWrapper>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
