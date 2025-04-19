import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Transistor.fm"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/transistorfm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Transistor.fm Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 24, 36, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Transistor provides podcast hosting and analytics for thousands of organizations, brands, and creatives around the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Episode Created</div>
  <div>Triggers when a new podcast episode is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber Created</div>
  <div>Triggers when a new subscriber is added to a private podcast.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Episode Published</div>
  <div>Triggers when a podcast episode is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscriber Removed</div>
  <div>Triggers when a subscriber is deleted from a private podcast.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscriber</div>
  <div>Creates a subscriber for a private podcast.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber</div>
  <div>Removes a subscriber from a private podcast.</div>
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
          <title>Transistor.fm</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
