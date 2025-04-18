import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Morningstar AdviserLogic"
      description="Morningstar AdviserLogic is a financial planning and business management solution that positions advisers to engage and impress clients while efficiently running their business and helping them meet compliance obligations."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/adviserlogic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Morningstar AdviserLogic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(199, 216, 107, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Morningstar AdviserLogic is a financial planning and business management solution that positions advisers to engage and impress clients while efficiently running their business and helping them meet compliance obligations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Client</div>
  <div>Triggers when a client is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Diary Event</div>
  <div>Triggers when a new event is added to your diary. Only triggers for events in the next 2 months.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update AdviserLogic Diary Event From Microsoft Outlook Ca...</div>
  <div>Triggers, when a new event is added in outlook calendar or existing event, is updated on outlook calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update AdviserLogic Diary Event From Microsoft Google Cal...</div>
  <div>Triggers, when a new event is added in the Google calendar or an existing event, is updated on Google calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Creates a new client, or updates to existing by Client ID or External ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Entity</div>
  <div>Updates the existing entity, otherwise creates a new entity.</div>
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
          <title>Morningstar AdviserLogic</title>
          <meta name="description" content="Morningstar AdviserLogic is a financial planning and business management solution that positions advisers to engage and impress clients while efficiently running their business and helping them meet compliance obligations." />
        </>
      ),
    },
  };
}
