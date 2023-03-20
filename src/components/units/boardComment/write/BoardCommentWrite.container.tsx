import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type {
	IMutation,
	IMutationCreateBoardCommentArgs,
	IMutationUpdateBoardCommentArgs,
} from 'src/commons/types/generated/types';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import type { IBoardCommentWriteProps, IUpdateBoardCommentInputProps } from './BoardCommentWrite.types';

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
	const router = useRouter();

	const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(
		CREATE_BOARD_COMMENT
	);
	const [updateBoardComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(
		UPDATE_BOARD_COMMENT
	);

	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [contents, setContents] = useState('');
	const [star, setStar] = useState(0);

	const handleChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
		setWriter(e.target.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
	};

	const handleClickWrite = async () => {
		if (typeof router.query.boardId !== 'string') return;

		if (writer && password && contents) {
			try {
				await createBoardComment({
					variables: {
						createBoardCommentInput: {
							writer,
							password,
							contents,
							rating: star,
						},
						boardId: router.query.boardId,
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

			setWriter('');
			setPassword('');
			setContents('');
			setStar(0);
		}
	};

	const handleClickUpdate = async () => {
		if (!contents && !star) {
			alert('내용 혹은 별점을 변경해주세요.');
			return;
		}

		if (!password) {
			alert('비밀번호를 입력해주세요.');
			return;
		}

		try {
			const updateBoardCommentInput: IUpdateBoardCommentInputProps = {};
			if (contents) updateBoardCommentInput.contents = contents;
			if (star !== 0 && star !== props.el?.rating) updateBoardCommentInput.rating = star;

			if (typeof props.el?._id !== 'string') return;
			await updateBoardComment({
				variables: {
					updateBoardCommentInput,
					password,
					boardCommentId: props.el?._id,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});
			props.setIsEdit?.(false);
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<BoardCommentWriteUI
			handleChangeWriter={handleChangeWriter}
			handleChangePassword={handleChangePassword}
			handleChangeContents={handleChangeContents}
			handleClickWrite={handleClickWrite}
			handleClickUpdate={handleClickUpdate}
			writer={writer}
			password={password}
			contents={contents}
			star={star}
			setStar={setStar}
			isEdit={props.isEdit}
			el={props.el}
		/>
	);
}
