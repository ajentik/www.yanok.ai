import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Realty.com"
      description="Realty.com is a popular real estate portal focused on delivering quality real estate leads to Agents, Lenders & Brokers."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/realtycom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Realty.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 102, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Realty.com is a popular real estate portal focused on delivering quality real estate leads to Agents, Lenders & Brokers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is received from Realty.com.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Property View or Save</div>
  <div>Triggers when one of your real estate leads has a property view, property save, saved search, showing request or other event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Saved Search</div>
  <div>Triggers when a Realty.com saves search criteria</div>
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
          <title>Realty.com</title>
          <meta name="description" content="Realty.com is a popular real estate portal focused on delivering quality real estate leads to Agents, Lenders & Brokers." />
        </>
      ),
    },
  };
}
