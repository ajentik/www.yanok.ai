import Head from 'next/head';
import Script from 'next/script';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, title, description, metaTitle, metaDescription }) {
  // Use metaTitle/metaDescription if provided, otherwise fallback to title/description
  const siteTitle = metaTitle || title ? `${metaTitle || title} | Yanok AI` : 'Yanok AI | AI PaaS';
  const metaDesc = metaDescription || description;
  
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        {metaDesc && <meta name="description" content={metaDesc} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
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
