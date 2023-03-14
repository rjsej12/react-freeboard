import type { ApolloQueryResult } from '@apollo/client';
import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types';

export interface IPaginationProps {
	refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
	count?: number;
}

export interface IPaginationUIProps {
	startPage: number;
	lastPage: number;
	activedPage: number;
	handleClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
	handleClickPrevPage: () => void;
	handleClickNextPage: () => void;
}

export interface IPageProps {
	isActive?: boolean;
}
