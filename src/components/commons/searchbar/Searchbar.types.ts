import type { ApolloQueryResult } from '@apollo/client';
import type { ChangeEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types';

export interface ISearchbarProps {
	refetch: (
		variables?: Partial<IQueryFetchBoardsArgs> | undefined
	) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
	refetchBoardsCount: (variables?: any) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>;
	handleChangeKeyword: (value: string) => void;
}

export interface ISearchbarUIProps {
	handleChangeSearchbar: (e: ChangeEvent<HTMLInputElement>) => void;
}
