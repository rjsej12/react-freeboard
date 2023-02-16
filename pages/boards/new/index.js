import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
	Wrapper,
	Title,
	WriterWrapper,
	InputWrapper,
	Label,
	Writer,
	Password,
	Subject,
	Contents,
	ZipcodeWrapper,
	Zipcode,
	SearchButton,
	Address,
	Youtube,
	ImageWrapper,
	UploadButton,
	OptionWrapper,
	RadioButton,
	RadioLabel,
	ButtonWrapper,
	SubmitButton,
	Error,
} from '@/styles/boardwrite.js';

const CREATE_BOARD = gql`
	mutation CreateBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
		}
	}
`;

export default function BoardWriteUI() {
	const [writer, setWriter] = useState('');
	const [password, setPassword] = useState('');
	const [title, setTitle] = useState('');
	const [contents, setContents] = useState('');

	const [writerError, setWriterError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [contentsError, setContentsError] = useState('');

	const [createBoard] = useMutation(CREATE_BOARD);

	const handleChangeWriter = (e) => {
		setWriter(e.target.value);
		if (e.target.value !== '') setWriterError('');
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
		if (e.target.value !== '') setPasswordError('');
	};

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
		if (e.target.value !== '') setTitleError('');
	};

	const handleChangeContents = (e) => {
		setContents(e.target.value);
		if (e.target.value !== '') setContentsError('');
	};

	const handleClickSubmit = async () => {
		if (!writer) setWriterError('작성자를 입력해주세요');
		if (!password) setPasswordError('비밀번호를 입력해주세요');
		if (!title) setTitleError('제목을 입력해주세요');
		if (!contents) setContentsError('내용을 입력해주세요');

		if (writer && password && title && contents) {
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
			console.log(result);
			alert('게시물이 등록되었습니다.');
		}
	};

	return (
		<Wrapper>
			<Title>게시물 등록</Title>
			<WriterWrapper>
				<InputWrapper>
					<Label>작성자</Label>
					<Writer type="text" placeholder="이름을 적어주세요." onChange={handleChangeWriter} />
					<Error>{writerError}</Error>
				</InputWrapper>
				<InputWrapper>
					<Label>비밀번호</Label>
					<Password type="password" placeholder="비밀번호를 입력해주세요." onChange={handleChangePassword} />
					<Error>{passwordError}</Error>
				</InputWrapper>
			</WriterWrapper>
			<InputWrapper>
				<Label>제목</Label>
				<Subject type="text" placeholder="제목을 작성해주세요." onChange={handleChangeTitle} />
				<Error>{titleError}</Error>
			</InputWrapper>
			<InputWrapper>
				<Label>내용</Label>
				<Contents placeholder="내용을 작성해주세요." onChange={handleChangeContents} />
				<Error>{contentsError}</Error>
			</InputWrapper>
			<InputWrapper>
				<Label>주소</Label>
				<ZipcodeWrapper>
					<Zipcode placeholder="07250" />
					<SearchButton>우편번호 검색</SearchButton>
				</ZipcodeWrapper>
				<Address />
				<Address />
			</InputWrapper>
			<InputWrapper>
				<Label>유튜브</Label>
				<Youtube placeholder="링크를 복사해주세요." />
			</InputWrapper>
			<ImageWrapper>
				<Label>사진첨부</Label>
				<UploadButton>+</UploadButton>
				<UploadButton>+</UploadButton>
				<UploadButton>+</UploadButton>
			</ImageWrapper>
			<OptionWrapper>
				<Label>메인설정</Label>
				<RadioButton type="radio" id="youtube" name="radio-button" />
				<RadioLabel htmlFor="youtube">유튜브</RadioLabel>
				<RadioButton type="radio" id="image" name="radio-button" />
				<RadioLabel htmlFor="image">사진</RadioLabel>
			</OptionWrapper>
			<ButtonWrapper>
				<SubmitButton onClick={handleClickSubmit}>등록하기</SubmitButton>
			</ButtonWrapper>
		</Wrapper>
	);
}
