import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VocalCola"
      description={`VocalCola is a Call Tracking Service. Track and record your phone calls from all forms of marketing. Pick unique local and toll free numbers to use on different advertisements, and chart your most effective lead sources.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vocalcola.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VocalCola Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(93, 199, 208, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">VocalCola is a Call Tracking Service. Track and record your phone calls from all forms of marketing. Pick unique local and toll free numbers to use on different advertisements, and chart your most effective lead sources.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when a Call is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Caller</div>
  <div>Triggers when a new Caller is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers when a new Campaign is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Number</div>
  <div>Triggers when a new Number is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Text</div>
  <div>Triggers when a new Text is registered.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Debug Echo</div>
  <div>This endpoint just responds back with the data you give it, to help testing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Send a text message through your tracking number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Details</div>
  <div>Get more information about a Call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Caller Details</div>
  <div>Get more information about a Caller.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Campaign Details</div>
  <div>Get more information about a Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Details</div>
  <div>Get more information about a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Number Details</div>
  <div>Get more information about a Number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Text Details</div>
  <div>Get more information about a Text Message.</div>
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
          <title>VocalCola</title>
          <meta name="description" content={`VocalCola is a Call Tracking Service. Track and record your phone calls from all forms of marketing. Pick unique local and toll free numbers to use on different advertisements, and chart your most effective lead sources.`} />
        </>
      ),
    },
  };
}
