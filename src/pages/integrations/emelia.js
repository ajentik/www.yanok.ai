import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Emelia"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/emelia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Emelia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(225, 128, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Emilia is the only platform dedicated to Growth Marketing teams and B2B automation companies that has 3 e-mail addresses for cold-emailing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Activity</div>
  <div>Triggers when a new activity is detected on a campaign.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Blacklist</div>
  <div>Adds a contact to your Emelia blacklist. This contact will not be contacted anymore</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to a Campaign</div>
  <div>Add a contact to an existant campaign. If the campaign is marked as finished, it will automatically change it to running mode.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to a List</div>
  <div>Add a contact to an existant list. If this list is already in a campaign, we recommend you to use the "Add Contact to a Campaign" action instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark a Contact From All Campaigns as Interested</div>
  <div>Marks a contact as Interested status in every campaigns where this contact is included</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set a Custom Field to a Contact</div>
  <div>Sets a custom field to an existant contact in a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact</div>
  <div>Search a specific contact on Emelia. All the matches are returned, an empty array is returned if there isn\'t any match.</div>
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
          <title>Emelia</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
