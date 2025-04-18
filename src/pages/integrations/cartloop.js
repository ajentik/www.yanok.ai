import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cartloop"
      description="Delight customers and turn real-time conversations into sales using the power of text marketing."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cartloop.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cartloop Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(231, 88, 24, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Delight customers and turn real-time conversations into sales using the power of text marketing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscriber</div>
  <div>Creates a new Subscriber and adds it to a list you specify. Whenever you are collecting phone numbers to use for marketing purposes, you need to do so compliantly. Make sure you include TCPA and CTIA-compliant language wherever you collect subscribers from. Note: by default, if a subscription already exists, it records the attempt to create the subscription again.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS Message</div>
  <div>Send an SMS Message to a Subscriber.</div>
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
          <title>Cartloop</title>
          <meta name="description" content="Delight customers and turn real-time conversations into sales using the power of text marketing." />
        </>
      ),
    },
  };
}
