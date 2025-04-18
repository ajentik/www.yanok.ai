import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="essensys Operate"
      description="essensys Operate is a workspace management platform that helps space-as-a-service operators run their workspace from lead to cash and everything in between."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/essensys.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        essensys Operate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 46, 83, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">essensys Operate is a workspace management platform that helps space-as-a-service operators run their workspace from lead to cash and everything in between.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Account</div>
  <div>Triggers when an account is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Calendar Event</div>
  <div>Triggers when a Calendar Event is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Charge Sheet</div>
  <div>Triggers when a new charge sheet is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Charge Sheet</div>
  <div>Triggers when a new charge sheet is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Charge Sheet</div>
  <div>Triggers when a new charge sheet is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Contact</div>
  <div>Triggers when a contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when new lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Licence</div>
  <div>Triggers when a new licence is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when new opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Charge Sheet</div>
  <div>Creates a new charge sheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tour</div>
  <div>Creates a new tour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Find Opportunity.</div>
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
          <title>essensys Operate</title>
          <meta name="description" content="essensys Operate is a workspace management platform that helps space-as-a-service operators run their workspace from lead to cash and everything in between." />
        </>
      ),
    },
  };
}
