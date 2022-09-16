import '../styles/globals.scss'
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/Navigation/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
