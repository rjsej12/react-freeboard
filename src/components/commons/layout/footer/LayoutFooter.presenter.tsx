import * as S from './LayoutFooter.styles';

export default function LayoutFooterUI() {
	return (
		<S.Wrappr>
			<S.InnerWrapper>
				<S.IconWrapper>
					<S.FacebookIcon />
					<S.InstagramIcon />
					<S.YoutubeIcon />
				</S.IconWrapper>
				<S.HorizontalLine />
				<S.Copyright>@2023 react free board</S.Copyright>
			</S.InnerWrapper>
		</S.Wrappr>
	);
}
