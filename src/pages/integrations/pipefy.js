import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pipefy"
      description={`The easy button for processes and workflows Easily organize and run all your processes in one place, leaving the inefficient patchwork of apps, forms, spreadsheets and e-mail threads forever in the past`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipefy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pipefy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 178, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The easy button for processes and workflows Easily organize and run all your processes in one place, leaving the inefficient patchwork of apps, forms, spreadsheets and e-mail threads forever in the past</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Done Card</div>
  <div>Triggers when a card is done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Overdue Card</div>
  <div>Triggers when a card is overdue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expired Card</div>
  <div>Triggers when a card is expired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Card Field</div>
  <div>Triggers when a card field is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Late Card</div>
  <div>Triggers when a card is late.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Moved Card</div>
  <div>Triggers when a card is moved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card</div>
  <div>Triggers when a new card is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Database Record</div>
  <div>Triggers when a new record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Record Field</div>
  <div>Triggers when a record field is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Creates a new card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card</div>
  <div>Move a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Record</div>
  <div>Creates a new table record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card Field</div>
  <div>Update a card field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Card</div>
  <div>Finds a card by Title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Card</div>
  <div>Finds a card by Title.</div>
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
          <title>Pipefy</title>
          <meta name="description" content={`The easy button for processes and workflows Easily organize and run all your processes in one place, leaving the inefficient patchwork of apps, forms, spreadsheets and e-mail threads forever in the past`} />
        </>
      ),
    },
  };
}
