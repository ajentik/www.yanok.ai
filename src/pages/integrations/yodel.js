import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Yodel.io Phone System"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/yodel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Yodel.io Phone System Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(40, 184, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Yodel.io is a new kind of business phone. Get a number and start answering calls or automatically respond with our voice bot functionality.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Call</div>
  <div>Triggers when a call is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Call</div>
  <div>Triggers when a call tag is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Finished</div>
  <div>Triggers when a call is finished or was missed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Incoming</div>
  <div>Triggers when a call is incoming.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Outgoing</div>
  <div>Triggers when a call is outgoing.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Sends SMS message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a contact.</div>
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
          <title>Yodel.io Phone System</title>
        </>
      ),
    },
  };
}
