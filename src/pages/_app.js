import 'styles/reset.scss';
import 'styles/globals.scss';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }) => (
  <main className={inter.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
