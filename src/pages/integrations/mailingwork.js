import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MAILINGWORK"
      description={`MAILINGWORK is your professional platform for marketing automation, email marketing & lead management.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailingwork.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MAILINGWORK Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 25, 48, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MAILINGWORK is your professional platform for marketing automation, email marketing & lead management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Opt-In</div>
  <div>Triggers when a new opt-in is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opt-Out</div>
  <div>Triggers when a new opt-out is received.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send an Email</div>
  <div>Sends an email by subscriber id and email id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt-In a Subscriber</div>
  <div>Create an opt-in for subscriber data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Subscriber</div>
  <div>Create a subscriber with fields and lists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Subscriber</div>
  <div>Updates a subscriber by subscriber id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Subscriber</div>
  <div>Find a Subscriber by field id and field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscriber</div>
  <div>Find a Subscriber by field id and field value.</div>
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
          <title>MAILINGWORK</title>
          <meta name="description" content={`MAILINGWORK is your professional platform for marketing automation, email marketing & lead management.`} />
        </>
      ),
    },
  };
}
