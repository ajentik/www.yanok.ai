import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kixie"
      description="Seamless Integrated Voice Powerful voice and software tools for sales and customer service teams."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kixie.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kixie Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Seamless Integrated Voice Powerful voice and software tools for sales and customer service teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Allows Kixie users to send an auto-sms message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add to Cadence</div>
  <div>Inserts the contact into the selected Kixie Cadence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Call</div>
  <div>Places an outbound call through Kixie PowerCall</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Cadence</div>
  <div>Allows you to remove a previosuly enrolled contact from the selected Kixie Cadence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Queue</div>
  <div>Removes the selected call from the desired queue</div>
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
          <title>Kixie</title>
          <meta name="description" content="Seamless Integrated Voice Powerful voice and software tools for sales and customer service teams." />
        </>
      ),
    },
  };
}
