import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mailjoy"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailjoy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mailjoy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(93, 83, 209, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mailjoy is a DIY direct mail platform that makes real mail as easy and data-driven as email. Design, target, and track postcard & letter campaigns.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to Mailing List</div>
  <div>Triggers when a contact is added to a specific mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Removed From Mailing List</div>
  <div>Triggers when a contact is removed from a specific mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversion</div>
  <div>Triggers when a conversion event happens in a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Created</div>
  <div>Triggers when a new list is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add to Mailing List</div>
  <div>Add a contact to a specific mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Create a new contact and set their list membership. Can be used to update an existing contact too.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact from the Mailjoy database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Mailing List</div>
  <div>Remove a contact from a specific mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Find a Contact</div>
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
          <title>Mailjoy</title>
        </>
      ),
    },
  };
}
