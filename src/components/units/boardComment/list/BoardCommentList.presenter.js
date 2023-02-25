import { getDate } from '@/src/commons/libraries/utils';
import * as S from './BoardCommentList.styles';

export default function BoardCommentListUI(props) {
	return (
		<>
			{props.data?.fetchBoardComments.map((el) => (
				<S.ItemWrapper>
					<S.FlexWrapper>
						<S.Avatar src="/images/Avatar.svg" />
						<S.MainWrapper>
							<S.WriterWrapper>
								<S.Writer>{el.writer}</S.Writer>
							</S.WriterWrapper>
							<S.Contents>{el.contents}</S.Contents>
						</S.MainWrapper>
						<S.OptionWrapper>
							<S.UpdateIcon src="/images/boardComment/list/option_update_icon.svg" />
							<S.DeleteIcon src="/images/boardComment/list/option_delete_icon.svg" />
						</S.OptionWrapper>
					</S.FlexWrapper>
					<S.DateString>{getDate(el.createdAt)}</S.DateString>
				</S.ItemWrapper>
			))}
		</>
	);
}
