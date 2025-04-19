import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rocket Agents"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rocket-agents.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rocket Agents Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 93, 171, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RocketAgents is a CRM that automates brokerages from lead generation to closing. Send leads, notes, calls and other triggers in/out of your Rocket CRM</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Call Note</div>
  <div>Triggers when a call note is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a note is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Property Request</div>
  <div>Triggers when new property request is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Received</div>
  <div>Triggers when an SMS is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stage Changed</div>
  <div>Triggers when a stage is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Call Notes</div>
  <div>Adds a call note to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Notes</div>
  <div>Adds a note to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing lead.</div>
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
          <title>Rocket Agents</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
