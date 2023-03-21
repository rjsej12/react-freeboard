import type { ApolloQueryResult } from '@apollo/client';
import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types';

export interface IBoardListUIProps {
	data?: Pick<IQuery, 'fetchBoards'>;
	handleClickMoveToBoardNew: () => void;
	handleClickMoveToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void;
	refetch: (
		variables?: Partial<IQueryFetchBoardsArgs> | undefined
	) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
	refetchBoardsCount: (
		variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
	) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>;
	count?: number;
	keyword: string;
	handleChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
	isMatched: boolean;
}
