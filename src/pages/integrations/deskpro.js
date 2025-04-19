import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Deskpro"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/deskpro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Deskpro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(66, 149, 210, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Deskpro is a web-based helpdesk software with multiple channel support.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Reply</div>
  <div>Triggers when a ticket is answered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Update</div>
  <div>Triggers when a ticket is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Message to Ticket</div>
  <div>Add a new note to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Create a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a new ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Update an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Find an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket</div>
  <div>Finds an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Find or Create an Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Find or Create a Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Ticket</div>
  <div>Find or Create a Ticket</div>
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
          <title>Deskpro</title>
        </>
      ),
    },
  };
}
