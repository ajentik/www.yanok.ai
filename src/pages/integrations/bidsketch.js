import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bidsketch"
      description="Bidsketch helps you create professional proposals in minutes."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bidsketch.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bidsketch Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(14, 99, 110, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bidsketch helps you create professional proposals in minutes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggered when a client is created through the API or in the Bidsketch app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Accepted or Declined</div>
  <div>Triggers when a proposal is either accepted or declined</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Proposal</div>
  <div>Triggers when a proposal is saved for the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Sent to Client</div>
  <div>Triggers each time a proposal is sent to a client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Viewed</div>
  <div>Triggers each time a proposal is viewed by a client</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Fee</div>
  <div>Creates a new fee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Proposal</div>
  <div>This starts a new proposal</div>
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
          <title>Bidsketch</title>
          <meta name="description" content="Bidsketch helps you create professional proposals in minutes." />
        </>
      ),
    },
  };
}
