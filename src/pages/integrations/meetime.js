import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Meetime"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/meetime.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Meetime Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 204, 83, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Meetime Inside Sales Platform. With Meetime you can create Workflows for sales prospects. Meetime organizes the activities of your sales development representatives based on the cadences you set up, according to the type of clients you want to reach. We also integrate with your CRM to keep your data always on sync.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity Finished</div>
  <div>Triggers when an activity is finished by the user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Ignored</div>
  <div>Triggers when as activity is ignored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Lost</div>
  <div>Trigger when a lead is lost</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Won</div>
  <div>Triggers when a lead is won</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Start a New Prospection</div>
  <div>Starts a new prospection with an existing/new lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Translate Webhook</div>
  <div>Translate Meetime Webhook Object</div>
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
          <title>Meetime</title>
        </>
      ),
    },
  };
}
