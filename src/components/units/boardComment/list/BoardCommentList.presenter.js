import * as S from './BoardCommentList.styles';

export default function BoardCommentListUI() {
	return (
		<S.ItemWrapper>
			<S.FlexWrapper>
				<S.Avatar src="/images/Avatar.svg" />
				<S.MainWrapper>
					<S.WriterWrapper>
						<S.Writer>작성자</S.Writer>
					</S.WriterWrapper>
					<S.Contents>댓글 내용</S.Contents>
				</S.MainWrapper>
				<S.OptionWrapper>
					<S.UpdateIcon src="/images/boardComment/list/option_update_icon.svg" />
					<S.DeleteIcon src="/images/boardComment/list/option_delete_icon.svg" />
				</S.OptionWrapper>
			</S.FlexWrapper>
			<S.DateString>날짜</S.DateString>
		</S.ItemWrapper>
	);
}
