import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LeadCenter.AI"
      description="AI-Powered Lead Management Software that automates tracking, scoring, and engaging leads to improve conversion of leads to business to grow your revenue."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/oryx-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LeadCenter.AI Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(14, 118, 188, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AI-Powered Lead Management Software that automates tracking, scoring, and engaging leads to improve conversion of leads to business to grow your revenue.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created in LeadCenter.AI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Matching Medium</div>
  <div>Triggers when a new lead matching selected medium is created in LeadCenter.AI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Matching Source</div>
  <div>Triggers when a new lead matching selected source is created in LeadCenter.AI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when a lead is updated in LeadCenter.AI.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead in LeadCenter.AI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing lead in LeadCenter.AI.</div>
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
          <title>LeadCenter.AI</title>
          <meta name="description" content="AI-Powered Lead Management Software that automates tracking, scoring, and engaging leads to improve conversion of leads to business to grow your revenue." />
        </>
      ),
    },
  };
}
