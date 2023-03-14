import type { AppProps } from 'next/app';
import ApolloSetting from 'src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/commons/styles/globalStyles';
import Layout from 'src/components/commons/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloSetting>
			<>
				<Global styles={globalStyles} />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</>
		</ApolloSetting>
	);
}
