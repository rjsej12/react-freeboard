import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://backendonline.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
