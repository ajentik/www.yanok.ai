import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DonorDock"
      description="DonorDock is a CRM designed for small nonprofits that helps you raise more money in less time."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/donordock.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DonorDock Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 99, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DonorDock is a CRM designed for small nonprofits that helps you raise more money in less time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Badge Added to Contact</div>
  <div>Triggers when a new badge is added to a contact record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Gift Batch Closed</div>
  <div>Triggered when a gift batch is closed in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to Marketing List</div>
  <div>Triggers when a contact is added to a marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity Created</div>
  <div>Triggers when a new activity is created in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appeal Created</div>
  <div>Triggers when a new appeal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Created</div>
  <div>Triggers when a new campaign is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Created</div>
  <div>Triggers when a new contact is added to DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Fund Created</div>
  <div>Triggers when a new fund is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gift Created</div>
  <div>Triggers when a new gift is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Badge to Contact</div>
  <div>Adds a badge to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appeal</div>
  <div>Creates a new Appeal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Creates a new campaign in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new Contact in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Fund</div>
  <div>Creates a new fund in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Gift</div>
  <div>Creates a new Gift in DonorDock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Marketing List</div>
  <div>Adds the contact to a specified marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Template Email</div>
  <div>Send a template-based email through the DonorDock email system.</div>
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
          <title>DonorDock</title>
          <meta name="description" content="DonorDock is a CRM designed for small nonprofits that helps you raise more money in less time." />
        </>
      ),
    },
  };
}
