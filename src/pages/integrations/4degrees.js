import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="4Degrees"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/4degrees.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        4Degrees Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(135, 83, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">4Degrees is a relationship development tool that helps professionals build stronger, more rewarding networks.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deal Updated</div>
  <div>Triggers when a deal is updated. WARNING: This will effectively send all of your deals to zapier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated. WARNING: This will effectively send all of your contacts to zapier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Exported Contact</div>
  <div>Triggers when a contact is exported to Zapier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created. The Deal is exported to zapier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reminder</div>
  <div>Trigger when a new reminder is created. The reminder is exported to Zapier.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Interaction</div>
  <div>Creates a Contact Interaction</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a deal on a given list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal Note</div>
  <div>Creates a note on an existing deal in 4degrees</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Deal</div>
  <div>Edits a an existing deal.</div>
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
          <title>4Degrees</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
