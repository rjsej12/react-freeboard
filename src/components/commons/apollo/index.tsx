import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from 'src/commons/store';

interface IApolloSettingProps {
	children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

	useEffect(() => {
		const result = localStorage.getItem('accessToken');
		// console.log(result);
		if (result) setAccessToken(result);
	}, []);

	const uploadLink = createUploadLink({
		uri: 'https://backendonline.codebootcamp.co.kr/graphql',
		headers: { Authorization: `Bearer ${accessToken}` },
	});

	const client = new ApolloClient({
		link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
		cache: GLOBAL_STATE,
	});

	// prettier-ignore
	return (
        <ApolloProvider client={client}>
			{props.children}
		</ApolloProvider>
    )
}
