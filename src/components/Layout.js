import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const siteTitle = title ? `${title} | Yanok AI` : 'Yanok AI | AI PaaS';
  
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MRHTGMH8');
            `,
          }}
        />
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRHTGMH8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />

      <div id="content-wrapper" className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
