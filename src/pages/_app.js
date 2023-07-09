import MainLayout from '@/components/layout/MainLayout'
import { ThemeContextProvider } from '@/store/theme-context';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeContextProvider>
  );
}
