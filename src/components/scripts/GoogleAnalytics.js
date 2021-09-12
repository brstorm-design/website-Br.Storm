import React from 'react';

export default function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQGH4BZSRJ"/>
      <script dangerouslySetInnerHTML={{
        __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQGH4BZSRJ');`
      }}/>
    </>
  )
}