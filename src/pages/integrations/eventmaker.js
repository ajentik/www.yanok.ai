import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Eventmaker"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/eventmaker.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Eventmaker Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 150, 136, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Eventmaker is a platform for professional event managers and organizers. It provides everything required for a successful event such as registrations, badges, access control, check-ins, and statistics.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Checkin</div>
  <div>Triggers when a guest is checked in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Arrived at Event</div>
  <div>Triggers when a Contact shows up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Created Contact</div>
  <div>Triggers when a Contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt-in/Opt-Out Contact</div>
  <div>Triggers when a Contact\'s opt-in field is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Registered at Event</div>
  <div>Triggers when a Contact registers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a Contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Guest</div>
  <div>Triggers when a new guest is added (all status).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Guest</div>
  <div>Triggers when a guest is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt-in/Opt-Out Guest</div>
  <div>Triggers when a Guest\'s opt-in fields are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registered Guest</div>
  <div>Triggers when a guest registers (status registered).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Guest</div>
  <div>Triggers when a Guest is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Guest</div>
  <div>Creates a new guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Guest</div>
  <div>Update a guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Guest</div>
  <div>Finds a guest by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Guest</div>
  <div>Finds a guest by searching.</div>
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
          <title>Eventmaker</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
