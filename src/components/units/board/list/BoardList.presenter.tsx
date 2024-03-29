import * as S from './BoardList.styles';
import { getDate, splitTextWithKeyword } from 'src/commons/libraries/utils';
import type { IBoardListUIProps } from './BoardList.types';
import Pagination from 'src/components/commons/pagination/Pagination.container';
import Searchbar from 'src/components/commons/searchbar/Searchbar.container';
import { v4 as uuidv4 } from 'uuid';

export default function BoardListUI(props: IBoardListUIProps) {
	return (
		<S.Wrapper>
			<Searchbar
				refetch={props.refetch}
				refetchBoardsCount={props.refetchBoardsCount}
				handleChangeKeyword={props.handleChangeKeyword}
			/>
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
						{splitTextWithKeyword(el.title, props.keyword).map((el) => (
							<S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
								{el}
							</S.TextToken>
						))}
					</S.ColumnTitle>
					<S.ColumnBasic>{el.writer}</S.ColumnBasic>
					<S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
				</S.Row>
			))}
			<S.TableBottom />
			<S.Footer>
				<Pagination refetch={props.refetch} count={props.count} />
				<S.Button onClick={props.handleClickMoveToBoardNew}>
					<S.PencilIcon src="/images/board/list/write.svg" />
					게시물 등록하기
				</S.Button>
			</S.Footer>
		</S.Wrapper>
	);
}
