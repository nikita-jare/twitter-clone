import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {GoogleOAuthProvider} from '@react-oauth/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <GoogleOAuthProvider clientId='819035851570-j49m6951o0lfknfvv33is3mi64cb8v30.apps.googleusercontent.com'>
    <Component {...pageProps} />
    </GoogleOAuthProvider>
    </div>
}
