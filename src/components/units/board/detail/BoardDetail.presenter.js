import * as S from './BoardDetail.styles';

export default function BoardDetailUI(props) {
	return (
		<S.Wrapper>
			<S.CardWrapper>
				<S.Header>
					<S.AvatarWrapper>
						<S.Avatar src="/images/avatar.svg" />
						<S.Info>
							<S.Writer>{props.data.fetchBoard.writer}</S.Writer>
							<S.CreatedAt>Date: {props.data.fetchBoard.createdAt}</S.CreatedAt>
						</S.Info>
					</S.AvatarWrapper>
				</S.Header>
				<S.Body>
					<S.Title>{props.data.fetchBoard.title}</S.Title>
					<S.Contents>{props.data.fetchBoard.contents}</S.Contents>
				</S.Body>
			</S.CardWrapper>
			<S.ButtonWrapper>
				<S.Button>목록으로</S.Button>
				<S.Button>수정하기</S.Button>
				<S.Button onClick={props.handleClickDeleteButton}>삭제하기</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
