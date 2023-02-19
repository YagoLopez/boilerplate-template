import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { REACT_QUERY_CONFIG } from '@/constants'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient(REACT_QUERY_CONFIG)}>
      <ReactQueryDevtools />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
