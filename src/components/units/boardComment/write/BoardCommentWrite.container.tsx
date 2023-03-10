import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { IMutation, IMutationCreateBoardCommentArgs } from 'src/commons/types/generated/types';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';

export default function BoardCommentWrite() {
	const router = useRouter();
	const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(
		CREATE_BOARD_COMMENT
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
		}
	};

	return (
		<BoardCommentWriteUI
			handleChangeWriter={handleChangeWriter}
			handleChangePassword={handleChangePassword}
			handleChangeContents={handleChangeContents}
			handleClickWrite={handleClickWrite}
			writer={writer}
			password={password}
			contents={contents}
			setStar={setStar}
		/>
	);
}
