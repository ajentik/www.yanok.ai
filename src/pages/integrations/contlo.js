import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Contlo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/contlo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Contlo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 97, 91, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Contlo is a commerce Data and Marketing Platform for Ecommerce and D2C brands that enables e-commerce stores to increase their sales, and drive customer loyalty and retention using omnichannel customer engagement.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Profile Created</div>
  <div>Triggers when a new profile is created on contlo platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber Created</div>
  <div>Triggers when a new subscriber is created for channels like email, sms, whatsapp, etc.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Users can send events to the Contlo Platform</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Profile</div>
  <div>This action creates a new profile on the Contlo Platform.</div>
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
          <title>Contlo</title>
        </>
      ),
    },
  };
}
