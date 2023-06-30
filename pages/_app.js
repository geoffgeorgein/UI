import Layout from '@/src/components/layout/layout'
import '@/styles/globals.scss'
import '@/styles/general.scss'

export default function App({ Component, pageProps }) {

  
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
