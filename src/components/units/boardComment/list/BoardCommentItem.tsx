import * as S from './BoardCommentList.styles';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { getDate } from 'src/commons/libraries/utils';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';
import type { MouseEvent } from 'react';
import type { IMutation, IMutationDeleteBoardCommentArgs } from 'src/commons/types/generated/types';
import type { IBoardCommentItemProps } from './BoardCommentList.types';

export default function BoardCommentItem(props: IBoardCommentItemProps) {
	const router = useRouter();

	const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(
		DELETE_BOARD_COMMENT
	);

	const handleClickDelete = async (e: MouseEvent<HTMLImageElement>) => {
		const password = prompt('비밀번호를 입력하세요.');
		try {
			await deleteBoardComment({
				variables: {
					password,
					boardCommentId: e.currentTarget.id,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<S.ItemWrapper>
			<S.FlexWrapper>
				<S.Avatar src="/images/Avatar.svg" />
				<S.MainWrapper>
					<S.WriterWrapper>
						<S.Writer>{props.el.writer}</S.Writer>
						<S.Star value={props.el.rating} disabled />
					</S.WriterWrapper>
					<S.Contents>{props.el.contents}</S.Contents>
				</S.MainWrapper>
				<S.OptionWrapper>
					<S.UpdateIcon src="/images/boardComment/list/option_update_icon.svg" />
					<S.DeleteIcon
						id={props.el._id}
						src="/images/boardComment/list/option_delete_icon.svg"
						onClick={handleClickDelete}
					/>
				</S.OptionWrapper>
			</S.FlexWrapper>
			<S.DateString>{getDate(props.el.createdAt)}</S.DateString>
		</S.ItemWrapper>
	);
}
