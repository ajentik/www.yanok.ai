import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RingByName"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ringbyname.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RingByName Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 161, 250, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RingByName is a cloud-based phone service. It helps you build stronger relationships with your customers with CRM features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Ended</div>
  <div>Triggers when a call ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Recording</div>
  <div>Triggers when a call is recorded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Fax</div>
  <div>Triggers when a new fax is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Missed Call</div>
  <div>Triggers when a call is missed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail</div>
  <div>Triggers when a new voicemail is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Number</div>
  <div>Calls a number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Fax</div>
  <div>Sends a Fax.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact.</div>
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
          <title>RingByName</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
