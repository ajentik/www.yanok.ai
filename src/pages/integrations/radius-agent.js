import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Radius Agent"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/radius-agent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Radius Agent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(17, 173, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Radius Agent qualifies leads using the assist program to help you close deals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Disqualified Lead</div>
  <div>Triggers when a lead is disqualified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Lead and Accepted Assist Lead</div>
  <div>Triggers when a recently qualified assist lead is accepted or a new inbound referral is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note/activity is added to your lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Qualified Lead</div>
  <div>Triggers when a new lead is qualified.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disqualify Lead</div>
  <div>disqualify\'s the lead</div>
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
          <title>Radius Agent</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
