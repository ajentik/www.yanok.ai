import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Deadline Funnel"
      description="Gives your prospects a unique, authentic deadline so they have a reason to buy now"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/deadline-funnel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Deadline Funnel Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 105, 82, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Gives your prospects a unique, authentic deadline so they have a reason to buy now</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New ConvertHub Portal</div>
  <div>Triggers when a new portal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New ConvertHub Subscriber</div>
  <div>Triggers when a new subscribers submits ConvertHub opt-in form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Event</div>
  <div>Triggers when a new custom event is created in Deadline Funnel.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Event</div>
  <div>Creates a custom event in DF</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Deadline</div>
  <div>Starts a deadline for a specific lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track Purchase</div>
  <div>Creates a sales tracking event.</div>
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
          <title>Deadline Funnel</title>
          <meta name="description" content="Gives your prospects a unique, authentic deadline so they have a reason to buy now" />
        </>
      ),
    },
  };
}
