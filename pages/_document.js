import { background } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{background: "black !important;"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
