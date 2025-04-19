import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OneSimpleApi"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onesimpleapi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OneSimpleApi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 99, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OneSimpleApi is a no-code API designed with all the things you need to get your no-code project to success: PDF generation, Currency Exchange, QR codes, Screenshots, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Calculate Discount Using PPP</div>
  <div>Provide fair discounts to your users based on PPP (Purchase Power Parity). Also included is the exchange rate for the customer\'s currency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Obtain an Exchange Rate</div>
  <div>Obtains the exchange rate for all available currencies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Image Metadata</div>
  <div>Retrieves EXIF information from an Image URL: Camera details, GPS Location, Aperture, Whitebalance, Flash usage, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Obtain Instagram Profile</div>
  <div>Obtains Instagram profile details, including name, followers, following, profile picture, and last 5 posts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Web Page Meta Data</div>
  <div>Retrieves Title, Description, Meta Tags, Open Graph, and Twitter Card details from an URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate PDF</div>
  <div>Creates a PDF file from a website URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate QR Code</div>
  <div>Generates a QR Code from a text or URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Take a Screenshot</div>
  <div>Takes a website screenshot from an URL easy and fast with pixel-perfect quality.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Obtain Spotify Profile</div>
  <div>Obtain Spotify profile, including the artist name, picture, external URL, the number of followers, popularity ranking, monthly listeners, biography, social media links, top songs and top ranked listening locations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create PDF From HTML</div>
  <div>Creates a PDF file from an HTML string. It can have embedded CSS or a link to a CSS file. Make sure that all external elements (images, CSS, etc) have absolute paths.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Image From HTML</div>
  <div>Creates a Screenshot Image from an HTML string. It can have embedded CSS or a link to a CSS file. Make sure that all external elements (images, CSS, etc) have absolute paths.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expand Shortened URL</div>
  <div>Retrieves the original URL from a shortened URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate an Email Address</div>
  <div>Validates an email address to weed out throwaway addresses, invalid domains, and non-canonical addresses.</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>OneSimpleApi</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
