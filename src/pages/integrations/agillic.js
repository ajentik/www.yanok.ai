import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Agillic"
      description="Agillic is a native customer marketing platform enabling brands to connect with audiences across channels through data-driven communication at scale. With Agillic you can take advantage of personalisation, automation, AI and omnichannel marketing capabilities from a single interface to create and retain valuable relationships throughout the customer lifecycle."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/agillic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Agillic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(116, 123, 141, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Agillic is a native customer marketing platform enabling brands to connect with audiences across channels through data-driven communication at scale. With Agillic you can take advantage of personalisation, automation, AI and omnichannel marketing capabilities from a single interface to create and retain valuable relationships throughout the customer lifecycle.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Achieve Event</div>
  <div>Achieves an Agillic Event for a specific Recipient. The event achieved can have various side-effects, configured in your Agillic Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update or Create Recipient</div>
  <div>Updates a Recipient in your Agillic Instance for the data fields present. If the Recipient does not exist with the unique identifier provided, one will be created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find and Get Recipient</div>
  <div>Query Agillic to see if the recipient exists, and return the available Person Data for that recipient if they do.</div>
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
          <title>Agillic</title>
          <meta name="description" content="Agillic is a native customer marketing platform enabling brands to connect with audiences across channels through data-driven communication at scale. With Agillic you can take advantage of personalisation, automation, AI and omnichannel marketing capabilities from a single interface to create and retain valuable relationships throughout the customer lifecycle." />
        </>
      ),
    },
  };
}
