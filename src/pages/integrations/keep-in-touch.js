import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Keep In Touch"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/keep-in-touch.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Keep In Touch Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(208, 0, 6, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Keep In Touch is a cloud based CRM system for Builders looking to improve their sales process and follow up enquiries automatically using software that can be learnt in under 60 minutes… guaranteed.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Adds a deal to the database via an http form post. A successful post will return a success message and the dealid for the new contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal</div>
  <div>Adds a new deal to Keep In Touch.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Adds a contact to the database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact by Email</div>
  <div>Delete a contact by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Deals</div>
  <div>Lists Deals for an account based on information sent via an http form post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Note</div>
  <div>Update a contact in the database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create (Set) Opt in Status</div>
  <div>Set the opt in Status of an email address. You cannot overwrite an email address already marked as Spam, Opt Out or Bounce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update (Run) Action Set</div>
  <div>Run an Action Set on a contact in the database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update (Assign) Autoresponder</div>
  <div>Assign an Autoresponder to a contact in the database (the contact must be opted in before an Autoresponder can be assigned).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a contact in the database via an http form post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Flags</div>
  <div>Update a contact\'s flags in the database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update (Assign) to Do Plan</div>
  <div>Assign an To-Do Plan to a contact in the database via an http form post.</div>
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
          <title>Keep In Touch</title>
        </>
      ),
    },
  };
}
