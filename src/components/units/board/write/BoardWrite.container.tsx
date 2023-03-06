import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';
import { IBoardWriteProps, IUpdateBoardInput } from './BoardWrite.types';
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from 'src/commons/types/generated/types';

export default function BoardWrite(props: IBoardWriteProps) {
	const router = useRouter();

	const [isActive, setIsActive] = useState(false);

	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');

	const [writerError, setWriterError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [contentsError, setContentsError] = useState('');

	const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);
	const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD);

	const handleChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
		setWriter(e.target.value);
		if (e.target.value !== '') setWriterError('');

		if (e.target.value && password && title && contents) {
			setIsActive(true);
		} else setIsActive(false);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		if (e.target.value !== '') setPasswordError('');

		if (writer && e.target.value && title && contents) {
			setIsActive(true);
		} else setIsActive(false);
	};

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		if (e.target.value !== '') setTitleError('');

		if (writer && password && e.target.value && contents) {
			setIsActive(true);
		} else setIsActive(false);
	};

	const handleChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(e.target.value);
		if (e.target.value !== '') setContentsError('');

		if (writer && password && title && e.target.value) {
			setIsActive(true);
		} else setIsActive(false);
	};

	const handleClickSubmit = async () => {
		if (!writer) setWriterError('작성자를 입력해주세요');
		if (!password) setPasswordError('비밀번호를 입력해주세요');
		if (!title) setTitleError('제목을 입력해주세요');
		if (!contents) setContentsError('내용을 입력해주세요');

		if (writer && password && title && contents) {
			try {
				const result = await createBoard({
					variables: {
						createBoardInput: {
							writer,
							password,
							title,
							contents,
						},
					},
				});

				router.push(`/boards/${result.data?.createBoard._id}`);
			} catch (error) {
				if (error instanceof Error) alert(error.message);
			}
		}
	};

	const handleClickUpdate = async () => {
		if (typeof router.query.boardId !== 'string') return;

		if (!title && !contents) {
			alert('수정한 내용이 없습니다.');
			return;
		}

		if (!password) {
			alert('비밀번호를 입력해주세요.');
			return;
		}

		const updateBoardInput: IUpdateBoardInput = {};
		if (title) updateBoardInput.title = title;
		if (contents) updateBoardInput.contents = contents;

		try {
			const result = await updateBoard({
				variables: {
					boardId: router.query.boardId,
					password,
					updateBoardInput,
				},
			});
			router.push(`/boards/${result.data?.updateBoard._id}`);
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<BoardWriteUI
			isActive={isActive}
			writerError={writerError}
			passwordError={passwordError}
			titleError={titleError}
			contentsError={contentsError}
			handleChangeWriter={handleChangeWriter}
			handleChangePassword={handleChangePassword}
			handleChangeTitle={handleChangeTitle}
			handleChangeContents={handleChangeContents}
			handleClickSubmit={handleClickSubmit}
			handleClickUpdate={handleClickUpdate}
			isEdit={props.isEdit}
			data={props.data}
		/>
	);
}
