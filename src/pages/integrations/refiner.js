import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Refiner"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/refiner.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Refiner Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(90, 127, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Refiner is a customer survey tool for data driven SaaS teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Completes Survey</div>
  <div>Triggers when a user completes a survey. The trigger includes response data from the last survey submission, as well as other user data we have on record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Enters Segment</div>
  <div>Triggers when a user enters a segment in Refiner. The trigger contains all user data we have on record, including previous survey responses</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Identify User</div>
  <div>Creates a new user in Refiner or updates an already existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track Event</div>
  <div>Track events and purchase intent signals performed by your users</div>
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
          <title>Refiner</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
