import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleAnalytics from 'src/components/scripts/GoogleAnalytics'
import GoogleTagManager from 'src/components/scripts/GoogleTagManager'
import NoScript from 'src/components/scripts/NoScript'
import { isDev } from 'src/utils/env'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {
            isDev ? null : (
              <>
                <GoogleAnalytics />
                <GoogleTagManager />
              </>
            )
          }
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
          <meta property="og:image" content="/images/cover.png" />
        </Head>
        <body>
          <NoScript />
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument