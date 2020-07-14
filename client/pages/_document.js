import Document, { Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          <meta name="description" content="Dev.log" />
          <meta
            name="keywords"
            content="blog,react,antd,webpack,css,javascript"
          />
          <script
            async
            crossOrigin="true"
            type="text/javascript"
            // src="https://developers.kakao.com/sdk/js/kakao.js"
            src="//developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              window.Kakao.init('28ff1d35692191420def0e22e9d6941b');
         
              window.Kakao.PlusFriend.createAddFriendButton({
                container: '#plusfriend-addfriend-button',
                plusFriendId: '_xcLqmC' 
              });
                  `,
            }}
          ></script> */}

          {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
          {/* <script
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=630a8052a4660040b734d38ab936dce9"
    ></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
