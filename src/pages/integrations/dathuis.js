import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DatHuis"
      description="DatHuis is a marketing automation platform for professionals working in residental real estate. With DatHuis you can generate leads and turn leads into customers."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dathuis.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DatHuis Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(35, 69, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DatHuis is a marketing automation platform for professionals working in residental real estate. With DatHuis you can generate leads and turn leads into customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Flow Sends Contact</div>
  <div>Triggers when a Zapier flow action is run.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact Tag</div>
  <div>Adds a tag to a contact by their email or contactId</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact by Event</div>
  <div>Creates a new contact and event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event for a contact.</div>
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
          <title>DatHuis</title>
          <meta name="description" content="DatHuis is a marketing automation platform for professionals working in residental real estate. With DatHuis you can generate leads and turn leads into customers." />
        </>
      ),
    },
  };
}
