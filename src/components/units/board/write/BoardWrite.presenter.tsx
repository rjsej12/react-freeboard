import Uploads from 'src/components/commons/uploads/Uploads.container';
import * as S from './BoardWrite.styles';
import { v4 as uuidv4 } from 'uuid';
import type { IBoardWriteUIProps } from './BoardWrite.types';

export default function BoardWriteUI(props: IBoardWriteUIProps) {
	return (
		<>
			{props.isOpen && (
				<S.AddressModal open={true} onOk={props.toggleAddressModal} onCancel={props.toggleAddressModal}>
					<S.AddressSearchInput onComplete={props.handleCompleteAddressSearch} />
				</S.AddressModal>
			)}
			<S.Wrapper>
				<S.Title>게시물 {props.isEdit ? '수정' : '등록'}</S.Title>
				<S.WriterWrapper>
					<S.InputWrapper>
						<S.Label>작성자</S.Label>
						<S.Writer
							type="text"
							placeholder="이름을 적어주세요."
							onChange={props.handleChangeWriter}
							defaultValue={props.data?.fetchBoard.writer ?? ''}
							readOnly={!!props.data?.fetchBoard.writer}
						/>
						<S.Error>{props.writerError}</S.Error>
					</S.InputWrapper>
					<S.InputWrapper>
						<S.Label>비밀번호</S.Label>
						<S.Password
							type="password"
							placeholder="비밀번호를 입력해주세요."
							onChange={props.handleChangePassword}
						/>
						<S.Error>{props.passwordError}</S.Error>
					</S.InputWrapper>
				</S.WriterWrapper>
				<S.InputWrapper>
					<S.Label>제목</S.Label>
					<S.Subject
						type="text"
						placeholder="제목을 작성해주세요."
						onChange={props.handleChangeTitle}
						defaultValue={props.data?.fetchBoard.title}
					/>
					<S.Error>{props.titleError}</S.Error>
				</S.InputWrapper>
				<S.InputWrapper>
					<S.Label>내용</S.Label>
					<S.Contents
						placeholder="내용을 작성해주세요."
						onChange={props.handleChangeContents}
						defaultValue={props.data?.fetchBoard.contents}
					/>
					<S.Error>{props.contentsError}</S.Error>
				</S.InputWrapper>
				<S.InputWrapper>
					<S.Label>주소</S.Label>
					<S.ZipcodeWrapper>
						<S.Zipcode
							placeholder="07250"
							readOnly
							value={(props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode) ?? ''}
						/>
						<S.SearchButton onClick={props.handleClickAddressSearch}>우편번호 검색</S.SearchButton>
					</S.ZipcodeWrapper>
					<S.Address readOnly value={(props.address || props.data?.fetchBoard.boardAddress?.address) ?? ''} />
					<S.Address
						onChange={props.handleChangeAddressDetail}
						defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail ?? ''}
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<S.Label>유튜브</S.Label>
					<S.Youtube
						placeholder="링크를 복사해주세요."
						onChange={props.handleChangeYoutubeUrl}
						defaultValue={props.data?.fetchBoard.youtubeUrl ?? ''}
					/>
				</S.InputWrapper>
				<S.ImageWrapper>
					<S.Label>사진첨부</S.Label>
					<S.UploadButtonWrapper>
						{props.fileUrls.map((el, index) => (
							<Uploads
								key={uuidv4()}
								index={index}
								fileUrl={el}
								handleChangeFileUrls={props.handleChangeFileUrls}
							/>
						))}
					</S.UploadButtonWrapper>
				</S.ImageWrapper>
				<S.OptionWrapper>
					<S.Label>메인설정</S.Label>
					<S.RadioButton type="radio" id="youtube" name="radio-button" />
					<S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
					<S.RadioButton type="radio" id="image" name="radio-button" />
					<S.RadioLabel htmlFor="image">사진</S.RadioLabel>
				</S.OptionWrapper>
				<S.ButtonWrapper>
					<S.SubmitButton
						isActive={props.isEdit ? true : props.isActive}
						onClick={props.isEdit ? props.handleClickUpdate : props.handleClickSubmit}
					>
						{props.isEdit ? '수정하기' : '등록하기'}
					</S.SubmitButton>
				</S.ButtonWrapper>
			</S.Wrapper>
		</>
	);
}
