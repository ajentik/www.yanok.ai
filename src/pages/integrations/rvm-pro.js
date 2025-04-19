import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RVM Pro"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rvm-pro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RVM Pro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 145, 254, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RVM Pro is a simple tool for advertisers to send ringless voicemails to potential customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Finished Campaigns</div>
  <div>Triggers when a campaign is completed or stopped</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Created Campaigns</div>
  <div>Triggers when a campaign is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bulk Campaign</div>
  <div>Create a campaign that sends voicemails to multiple phone numbers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bulk Campaign CSV</div>
  <div>Create a bulk campaign with phone numbers from a csv file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Single Number Campaign</div>
  <div>Create a campaign using a single phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe</div>
  <div>Remove a phone number from your call list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Campaign Status</div>
  <div>Start, pause or stop a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Overview</div>
  <div>View the details of a campaign.</div>
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
          <title>RVM Pro</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
