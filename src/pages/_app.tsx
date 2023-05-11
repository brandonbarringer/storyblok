import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '@/components/storyblok/Page';

/**
 * Next.js uses the App component to initialize pages. You can override it and control the page initialization.
 * Which allows you to do amazing things like:
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * All of that because _app actually does get executed at runtime!
 */

const components = {
  'page': Page,
}

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  apiOptions: { region: 'us' },
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}