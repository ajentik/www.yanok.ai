import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Relay Construction Solutions"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/relay-construction-solutions-ca1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Relay Construction Solutions Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(232, 199, 14, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Relay is a bid-leveling software for the commercial construction industry, connecting project owners, general contractors, and sub-contractors in one tool.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accepted Invitation</div>
  <div>Triggers when a bid invitation is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bid Awarded</div>
  <div>Triggers when a bid has been awarded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bid Invitation</div>
  <div>Triggers when a new bid invitation is sent or received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Creation</div>
  <div>Triggers when a new project is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Relay Construction Solutions</title>
        </>
      ),
    },
  };
}
