import * as S from './BoardCommentList.styles';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { getDate } from 'src/commons/libraries/utils';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { IMutation, IMutationDeleteBoardCommentArgs } from 'src/commons/types/generated/types';
import type { IBoardCommentItemProps } from './BoardCommentList.types';
import BoardCommentWrite from '../write/BoardCommentWrite.container';

export default function BoardCommentItem(props: IBoardCommentItemProps) {
	const router = useRouter();

	const [isEdit, setIsEdit] = useState(false);

	const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(
		DELETE_BOARD_COMMENT
	);

	const handleClickUpdate = () => {
		setIsEdit(true);
	};

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
		<>
			{!isEdit && (
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
							<S.UpdateIcon
								src="/images/boardComment/list/option_update_icon.svg"
								onClick={handleClickUpdate}
							/>
							<S.DeleteIcon
								id={props.el._id}
								src="/images/boardComment/list/option_delete_icon.svg"
								onClick={handleClickDelete}
							/>
						</S.OptionWrapper>
					</S.FlexWrapper>
					<S.DateString>{getDate(props.el.createdAt)}</S.DateString>
				</S.ItemWrapper>
			)}
			{isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
		</>
	);
}
