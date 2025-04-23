import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Songkick"
      description={`Songkick is a concert discovery and ticket sales service for live music events.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/songkick.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Songkick Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Songkick is a concert discovery and ticket sales service for live music events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Event Matching Search</div>
  <div>Triggers when a new event matching a search query is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tracked Concert</div>
  <div>Triggers when you track or mark yourself as "I\'m Going" to an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Upcoming Concert From Tracked Artist</div>
  <div>Triggers when an artist you\'re tracking is added to an event in a metro area you\'re tracking</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find Artist</div>
  <div>Search for an artist (and similar artists)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Venue</div>
  <div>Finds a venue.</div>
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
          <title>Songkick</title>
          <meta name="description" content={`Songkick is a concert discovery and ticket sales service for live music events.`} />
        </>
      ),
    },
  };
}
