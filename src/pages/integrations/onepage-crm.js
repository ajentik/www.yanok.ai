import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OnePageCRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onepage-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OnePageCRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 147, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OnePageCRM converts the complexity of CRM into a simple to-do list. Built using GTD (Getting Things Done) productivity principles, its streamlined approach to sales helps you convert leads to customers, reach targets and grow your business fast. By focusing on that one Next Action, your sales team are organized and empowered to move a deal forward. OnePageCRM strives to offer a product that is as easy to use as email and helps your company achieve zero admin.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Closed Sales Cycle</div>
  <div>Triggers when a sales cycle is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Next Action</div>
  <div>Triggers when a next action is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Next Action</div>
  <div>Triggers when a new next action is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when a new call is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal</div>
  <div>Triggers when a deal is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Close Sales Cycle</div>
  <div>Closes the sales cycle for a specific contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Next Action</div>
  <div>Creates a new Next Action for contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Call</div>
  <div>Adds a new call to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in OnePageCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Adds a new note to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact in OnePageCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates an existing deal in OnePageCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact in OnepageCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Find a deal in OnepageCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Contact</div>
  <div>Find an existing contact in OnePageCRM or create a new one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Deal</div>
  <div>Find an existing deal in OnePageCRM or create a new one.</div>
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
          <title>OnePageCRM</title>
        </>
      ),
    },
  };
}
