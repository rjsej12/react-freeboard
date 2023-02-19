import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 1200px;
	margin: 100px auto;
	padding: 60px 100px 100px 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
`;

export const Title = styled.div`
	font-size: 36px;
	font-weight: 700;
`;

export const WriterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 40px;
`;

export const InputWrapper = styled.div`
	margin-top: 40px;
`;

export const Label = styled.div`
	margin-bottom: 16px;
`;

export const Writer = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
	width: 996px;
	height: 480px;
	padding-left: 16px;
	padding: 16px;
	border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Zipcode = styled.input`
	width: 80px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: #000000;
	color: #ffffff;
	cursor: pointer;
	border: none;
`;

export const Address = styled.input`
	width: 996px;
	height: 52px;
	margin-top: 16px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
	width: 996px;
	margin-top: 40px;
`;

export const UploadButton = styled.button`
	width: 80px;
	height: 80px;
	background-color: #bdbdbd;
	margin-right: 24px;
	border: none;
	outline: none;
	cursor: pointer;
`;

export const OptionWrapper = styled.div`
	width: 996px;
	margin-top: 40px;
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	margin-top: 40px;
`;

export const SubmitButton = styled.button`
	width: 180px;
	height: 52px;
	border: none;
	background-color: #ffd600;
	cursor: pointer;
`;

export const Error = styled.div`
	color: red;
	margin-top: 8px;
	font-size: 14px;
`;
