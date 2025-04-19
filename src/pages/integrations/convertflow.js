import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ConvertFlow"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/convertflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ConvertFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 73, 222, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ConvertFlow is an all-in-one platform for converting visitors. Create, personalize and launch forms, popups, surveys and landing pages, without coding.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Form/Survey Submission (New)</div>
  <div>Triggers when a form or survey element is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CTA Form/Survey Submission (Legacy)</div>
  <div>Triggers when a specific CTA has a form or survey element submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Contact</div>
  <div>Triggers when a tag is added to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Contact</div>
  <div>Triggers when a tag is removed from a contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a contact record in ConvertFlow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Tag</div>
  <div>Adds a tag to an existing contact. A new contact will be created if no contact matching given email address is present in ConvertFlow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>This will perform a full deletion of the contact record in ConvertFlow. Useful for GDPR workflows.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a Tag</div>
  <div>Removes a tag from an existing contact.</div>
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
          <title>ConvertFlow</title>
        </>
      ),
    },
  };
}
