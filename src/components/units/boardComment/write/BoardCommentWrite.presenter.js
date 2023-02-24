import * as S from './BoardCommentWrite.styles';

export default function BoardCommentWriteUI() {
	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.PencilIcon src="/images/boardComment/write/pencil.svg" />
				<S.Title>댓글</S.Title>
			</S.TitleWrapper>
			<S.InputWrapper>
				<S.Input type="text" placeholder="작성자" />
				<S.Input type="password" placeholder="비밀번호" />
			</S.InputWrapper>
			<S.ContentsWrapper>
				<S.Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
				<S.BottomWrapper>
					<S.ContentsLength>0/100</S.ContentsLength>
					<S.Button>등록하기</S.Button>
				</S.BottomWrapper>
			</S.ContentsWrapper>
		</S.Wrapper>
	);
}
