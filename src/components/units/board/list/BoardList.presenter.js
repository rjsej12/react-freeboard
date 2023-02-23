import * as S from './BoardList.styles';
import { getDate } from '@/src/commons/libraries/utils';

export default function BoardListUI(props) {
	return (
		<S.Wrapper>
			<S.TableTop />
			<S.Row>
				<S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
				<S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
				<S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
				<S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
			</S.Row>
			{props.data?.fetchBoards.map((el) => (
				<S.Row key={el._id}>
					<S.ColumnBasic>{el._id.slice(-4)}</S.ColumnBasic>
					<S.ColumnTitle id={el._id} onClick={props.handleClickMoveToBoardDetail}>
						{el.title}
					</S.ColumnTitle>
					<S.ColumnBasic>{el.writer}</S.ColumnBasic>
					<S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
				</S.Row>
			))}
			<S.TableBottom />
			<S.Footer>
				<S.Button onClick={props.handleClickMoveToBoardNew}>
					<S.PencilIcon src="/images/board/list/write.svg" />
					게시물 등록하기
				</S.Button>
			</S.Footer>
		</S.Wrapper>
	);
}
