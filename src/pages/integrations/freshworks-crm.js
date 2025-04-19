import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Freshsales Suite"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freshworks-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Freshsales Suite Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 168, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Freshsales Suite is an online, cloud-based CRM with integrated phone and email, user behavior tracking, lead scoring and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Meeting to Deal</div>
  <div>This action will help to create meeting for given deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Contact</div>
  <div>Adds a note to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Deal</div>
  <div>Adds a note to a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>update an existing deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Search an existing Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Unique Fields</div>
  <div>Find an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email</div>
  <div>Find an existing contact by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search the matching Contacts</div>
  <div>Find an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search the matching Contacts</div>
  <div>Find an existing contact by email.</div>
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
          <title>Freshsales Suite</title>
        </>
      ),
    },
  };
}
