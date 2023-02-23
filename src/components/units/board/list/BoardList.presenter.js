import * as S from './BoardList.styles';

export default function BoardListUI() {
	return (
		<S.Wrapper>
			<S.TableTop />
			<S.Row>
				<S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
				<S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
				<S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
				<S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
			</S.Row>
			<S.Row>
				<S.ColumnBasic>id</S.ColumnBasic>
				<S.ColumnTitle>게시물 제목입니다.</S.ColumnTitle>
				<S.ColumnBasic>작성자</S.ColumnBasic>
				<S.ColumnBasic>2022.02.23</S.ColumnBasic>
			</S.Row>
			<S.TableBottom />
			<S.Footer>
				<S.Button>
					<S.PencilIcon src="/images/board/list/write.svg" />
					게시물 등록하기
				</S.Button>
			</S.Footer>
		</S.Wrapper>
	);
}
