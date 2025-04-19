import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="thanks.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/thanksio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        thanks.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(237, 66, 47, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Thanks.io is a way to automatically send ‘handwritten’ postcards, letters, notecards, and giftcards at scale for as low as \$.59 per card.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Order Details</div>
  <div>Get details of past order by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Delivered</div>
  <div>Triggers when a postcard, letter, notecard, or giftcard is delivered to a recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient Added</div>
  <div>Triggers when a Recipient is added to one of your mailing lists via the API, Zapier, landing pages, retargeting, or card builder manual add.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">QR Code Scan</div>
  <div>Triggers when a QR Code on a postcard, letter, or notecard is scanned. This will also trigger when a giftcard is redeemed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient</div>
  <div>Adds a recipient to your account and to an optional list. Only US or Canadian addresses are accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Giftcard</div>
  <div>Sends a giftcard to a customer using the provided template ID or a body, as well as contact and address information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Letter</div>
  <div>Sends a letter to a customer using the provided template ID or a body, as well as contact and address information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Letter via Radius Search</div>
  <div>Sends a letter to multiple customers using the provided template ID or a body, as well as an address to search for nearest neighbors. There is a \$.05 lookup fee for each record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Notecard</div>
  <div>Sends a notecard to a customer using the provided template ID or a body, as well as contact and address information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Notecard via Radius Search</div>
  <div>Sends a notecard to multiple customers using the provided template ID or a body, as well as an address to search for nearest neighbors. There is a \$.05 lookup fee for each record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Postcard</div>
  <div>Sends a postcard to a customer using the provided template ID or a body, as well as contact and address information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Postcard via Radius Search</div>
  <div>Sends a postcard to multiple customers using the provided template ID or a body, as well as an address to search for nearest neighbors. There is a \$.05 lookup fee for each record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Windowless Letter</div>
  <div>Sends a windowless letter to a customer using the provided template ID or a body, as well as contact and address information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Windowless Letter via Radius Search</div>
  <div>Sends a windowless letter to multiple customers using the provided template ID or a body, as well as an address to search for nearest neighbors. There is a \$.05 lookup fee for each record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Recipient</div>
  <div>Deletes a Recipient from Mailing List.</div>
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
          <title>thanks.io</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
