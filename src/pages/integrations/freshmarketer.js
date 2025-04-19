import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Freshmarketer"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freshmarketer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Freshmarketer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(235, 91, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Freshmarketer is a marketing automation suite. It helps your marketing teams run powerful engagement campaigns, drip automation, sync with CRM, capture leads via forms and much more. The tools also help you to track & optimise your website with Heatmaps, A/B testing, Session replay, Polls & Feeback, Form analytics.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added</div>
  <div>Triggers when a contact is newly added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to a List</div>
  <div>Triggers when a contact is newly added to list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Removed From List</div>
  <div>Triggers when a contact is removed from the list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed</div>
  <div>Triggers when a contact opts out from one or many subscription type(s)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update a Contact to a List</div>
  <div>Add or Update a contact to a list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Contact</div>
  <div>Add or Update a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From a List</div>
  <div>Remove contact from a list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a contact</div>
  <div>Find a contact by Email</div>
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
          <title>Freshmarketer</title>
        </>
      ),
    },
  };
}
