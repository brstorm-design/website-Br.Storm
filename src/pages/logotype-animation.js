import { React, useEffect } from 'react';
import LogoType from 'src/components/presentation/LogoType';
import Head from 'next/head';

export default function LogoTypeAnimation() {

  useEffect(() => {
    document.body.classList.add('animation-page');
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Logo Animation</title>
      </Head>

      <main data-scroll-container>
        <LogoType />
      </main>
    </>
  )
}