import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Uberall"
      description={`Uberall enables the world's brands and businesses to deliver a relevant and memorable 'Near Me' Brand Experience at every step of today's customer journey!`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/uberall.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Uberall Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 150, 222, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Uberall enables the world\'s brands and businesses to deliver a relevant and memorable \'Near Me\' Brand Experience at every step of today\'s customer journey!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Review</div>
  <div>Triggers when a new review has been published</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Location Created</div>
  <div>Triggers when a new location is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Social Post Created</div>
  <div>Triggers when a new social post is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recently Disconnected Listings</div>
  <div>Triggers when a listing has been disconnected (Facebook or Google)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Location Update</div>
  <div>Triggers when a new update has been run on a location</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Business</div>
  <div>Create a Business</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Location</div>
  <div>Create a location and add it to an existing business</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Social Post</div>
  <div>Create a new Social Post. Requires either one businessId or one locationId or one label. When a combination of those fields is provided all matching locations are added together.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a User</div>
  <div>Create a new user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply to a Review</div>
  <div>Reply to a Review</div>
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
          <title>Uberall</title>
          <meta name="description" content={`Uberall enables the world's brands and businesses to deliver a relevant and memorable 'Near Me' Brand Experience at every step of today's customer journey!`} />
        </>
      ),
    },
  };
}
