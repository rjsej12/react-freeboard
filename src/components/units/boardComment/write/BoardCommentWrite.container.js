import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';

export default function BoardCommentWrite() {
	const router = useRouter();
	const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [contents, setContents] = useState('');

	const handleChangeWriter = (e) => {
		setWriter(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeContents = (e) => {
		setContents(e.target.value);
	};

	const handleClickWrite = async () => {
		if (writer && password && contents) {
			try {
				await createBoardComment({
					variables: {
						createBoardCommentInput: {
							writer,
							password,
							contents,
							rating: 0,
						},
						boardId: router.query.boardId,
					},
				});
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<BoardCommentWriteUI
			handleChangeWriter={handleChangeWriter}
			handleChangePassword={handleChangePassword}
			handleChangeContents={handleChangeContents}
			handleClickWrite={handleClickWrite}
			contents={contents}
		/>
	);
}
