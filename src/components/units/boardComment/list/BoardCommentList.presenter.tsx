import { getDate } from 'src/commons/libraries/utils';
import * as S from './BoardCommentList.styles';
import type { IBoardCommentListUIProps } from './BoardCommentList.types';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
	return (
		<>
			{props.data?.fetchBoardComments.map((el) => (
				<S.ItemWrapper key={el._id}>
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
							<S.DeleteIcon
								id={el._id}
								src="/images/boardComment/list/option_delete_icon.svg"
								onClick={props.handleClickDelete}
							/>
						</S.OptionWrapper>
					</S.FlexWrapper>
					<S.DateString>{getDate(el.createdAt)}</S.DateString>
				</S.ItemWrapper>
			))}
		</>
	);
}
