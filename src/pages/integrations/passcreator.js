import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Passcreator"
      description={`Create digital Wallet passes using our visual editor. Distribute store cards, coupons, event tickets and membership cards to your customers.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/passcreator.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Passcreator Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create digital Wallet passes using our visual editor. Distribute store cards, coupons, event tickets and membership cards to your customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Pass Scanned</div>
  <div>Triggers when a new app scan has been recorded in Passcreator. This will either happen when you use the Passcreator Companion App or when a scan is created using the API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Wallet Pass Created</div>
  <div>Triggers when a new Wallet pass is created within Passcreator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pass Marked Voided</div>
  <div>Triggers when a pass is marked voided, means the barcode is greyed out and the pass is no longer valid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Saves Wallet Pass on Smartphone</div>
  <div>Triggers when a user saves a pass on his Smartphone and registers for push notifications.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deletes Wallet Pass From Smartphone</div>
  <div>Triggers when a user deletes a Wallet pass from his Smartphone or deactivates Push Notifications.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Wallet Pass</div>
  <div>Creates a new Wallet pass using the selected Pass-Template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Pass</div>
  <div>Deletes a Pass by looking for the given Identifier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Wallet Pass</div>
  <div>Updates an existing Wallet pass using the data provided. If a user has saved the pass on his smartphone he\'ll see a Push Notification showing the new data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Pass</div>
  <div>Allows you to search for an existing pass based on a search string.</div>
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
          <title>Passcreator</title>
          <meta name="description" content={`Create digital Wallet passes using our visual editor. Distribute store cards, coupons, event tickets and membership cards to your customers.`} />
        </>
      ),
    },
  };
}
