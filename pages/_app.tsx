import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';
import Layout from 'src/commons/layout';

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://backendonline.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
