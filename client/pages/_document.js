import Document, { Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
          /> */}
          <meta name="description" content="Dev.log" />
          <meta
            name="keywords"
            content="blog,react,antd,webpack,css,javascript"
          />
          {/* <script
            async
            crossOrigin="true"
            type="text/javascript"
            src="https://developers.kakao.com/sdk/js/kakao.js"
          ></script> */}
          <script type="text/javascript" src="/static/kakao.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
