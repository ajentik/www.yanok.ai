import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Handwrytten"
      description="Handwrytten is a way to automatically send real cards and notes written in pen and ink."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/handwrytten.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Handwrytten Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(79, 200, 197, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Handwrytten is a way to automatically send real cards and notes written in pen and ink.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Address List</div>
  <div>Triggers when Recipient Addresses are needed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Order</div>
  <div>Cancels an existing order that has not yet been written. The credit is returned to the user\'s account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Card</div>
  <div>Creates a new custom 5x7 card with full bleed cover, using specified images, fonts, and logos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new address book entry for the Handwrytten address book. (Note: other zaps don\'t really use the address book, but the rest of Handwrytten does.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an entry in the Handwrytten address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Card</div>
  <div>Schedules a card to a new recipient. Same as "send card" but with date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Card</div>
  <div>Sends a card to a new recipient. All information is provided (i.e., you do not use address objects to build up the record.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Custom Image</div>
  <div>Adds an image to Handwrytten for use in custom card designs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact in your address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contacts</div>
  <div>Finds a contact in your address book.</div>
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
          <title>Handwrytten</title>
          <meta name="description" content="Handwrytten is a way to automatically send real cards and notes written in pen and ink." />
        </>
      ),
    },
  };
}
