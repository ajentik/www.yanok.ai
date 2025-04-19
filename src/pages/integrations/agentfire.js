import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AgentFire"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/agentfire.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AgentFire Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 159, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AgentFire is a revolutionary real estate website and marketing platform that helps agents maximize digital opportunities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Lead Assigned to Agent/Office</div>
  <div>Triggers when an existing lead is re-assigned to another Agent/Office.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Marked as Hot</div>
  <div>Triggers when an existing lead is marked as Hot in Lead Manager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is captured in Lead Manager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Notes Added to Lead</div>
  <div>Triggers when notes are added to an existing lead in Lead Manager.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead</div>
  <div>Send new lead to AgentFire Lead Manager</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Update Lead in Lead Manager</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Agent</div>
  <div>Find Agent in your Team Members directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Find Lead in Lead Manager</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Office</div>
  <div>Find Office in your Offices directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find Lead in Lead Manager</div>
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
          <title>AgentFire</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
