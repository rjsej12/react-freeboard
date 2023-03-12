import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'src/commons/layout';
import ApolloSetting from 'src/components/commons/apollo';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloSetting>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloSetting>
	);
}
