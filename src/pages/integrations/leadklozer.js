import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LeadKlozer"
      description="LeadKlozer is an ad performance, conversation & sales tool for Facebook marketers."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/leadklozer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LeadKlozer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(109, 198, 220, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LeadKlozer is an ad performance, conversation & sales tool for Facebook marketers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Products, Stages, Tags Added</div>
  <div>Triggers when a contact gets a new Product, Stage or Tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Info Updated</div>
  <div>Triggers when a new contact info is added or updated. This trigger returns all contact info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a lead form from Facebook is completed by a contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create Contact. If a contact ID is provided. Then it will update the contact with the same name and Contact ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Search</div>
  <div>Search for a contact using multiple conditions. Empty fields will be ignored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Search for a contact using multiple conditions. Empty fields will be ignored.</div>
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
          <title>LeadKlozer</title>
          <meta name="description" content="LeadKlozer is an ad performance, conversation & sales tool for Facebook marketers." />
        </>
      ),
    },
  };
}
