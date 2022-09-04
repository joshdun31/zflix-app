import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      // ...
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="google-site-verification"
            content="Y18D4bzANlD1TP1aLl21MutvmIAcf8QIIwnmjhVfZ1o"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8FMMTY6M6W"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8FMMTY6M6W', { page_path: window.location.pathname });
              `,
            }}
          />
          <script dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "dihgkuvusl");`}}
          />
          {/* <!-- Google Tag Manager --> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){
              w[l] = w[l] || [];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N4N8H7V');`,
            }}
          /> */}
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
