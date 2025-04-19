import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="The Receptionist"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/the-receptionist.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        The Receptionist Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(53, 74, 137, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The Receptionist helps streamline office entrance areas and automates the job of connecting visitors to the people they are there to see.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Visit: Check-In</div>
  <div>This event is triggered each time a visit check-in happens.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visit: Check-Out</div>
  <div>This event is triggered each time a visit check-out happens.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visit: Pre-Registration</div>
  <div>This event is triggered whenever a pre-registered visit is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visit: Queued</div>
  <div>This event is triggered each time a contactless visit is created and is waiting to be checked in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visit: Delete</div>
  <div>This event is triggered each time a visit is deleted from the visit log.</div>
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
          <title>The Receptionist</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
