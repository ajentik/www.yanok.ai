import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Retently"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/retently.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Retently Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 95, 178, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Retently helps you measure customer satisfaction via NPS, CSAT, and CES surveys. Collect, analyze, and act on valuable customer feedback.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Survey Response</div>
  <div>Triggers when a new survey response is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Score Updated</div>
  <div>Triggers when the survey campaign’s score (NPS, CSAT, CES) is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Score Updated</div>
  <div>Triggers when a company’s score (NPS, CSAT, CES) is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Overall Metric Score Updated</div>
  <div>Triggers when the score is updated for a particular metric (NPS, CSAT, CES).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Unsubscribed</div>
  <div>Triggers when a customer opts out of surveys.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Customer</div>
  <div>Creates a new customer or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer and Send Survey</div>
  <div>Creates a new customer or updates and existing one and sends a transactional survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag a Survey Response</div>
  <div>Adds a tag to a survey response.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Customer</div>
  <div>Unsubscribes a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer by Email</div>
  <div>Find a customer in Retently by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find a company by domain, name, or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find Customer</div>
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
          <title>Retently</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
