import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FreedomSoft"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freedomsoft.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FreedomSoft Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(123, 185, 52, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FreedomSoft is an all-in-one lead generation and real-estate automation system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Buyer Lead Status Updated</div>
  <div>Triggers when a buyer lead status is updated to a new value, including during bulk status updates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Buyer Lead</div>
  <div>Triggers when a new buyer lead is created, including during bulk imports.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact record is created, including during bulk imports.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Seller Lead</div>
  <div>Triggers when a new seller lead is created, including during bulk imports.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Seller Lead Status Updated</div>
  <div>Triggers when a seller lead status is updated to a new value, including during bulk status updates.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Buyer Lead</div>
  <div>Creates a buyer lead, optionally associated with a lead campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Seller Lead</div>
  <div>Creates a seller lead, optionally associated with a lead campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Buyer Lead Status</div>
  <div>Update the status of an existing buyer lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Seller Lead Status</div>
  <div>Update the status of an existing seller lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Buyer Lead</div>
  <div>Finds a buyer lead based on phone number, email, or full name, scoped by lead campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Seller Lead</div>
  <div>Finds a seller lead based on phone number, email, or full name, scoped by lead campaign.</div>
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
          <title>FreedomSoft</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
