import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BONZO"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bonzo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BONZO Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 54, 150, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bonzo is a multi-channel communication tool that keeps you top of mind.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get General People</div>
  <div>Triggers when a new prospect is created in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get People From Pipeline Stage</div>
  <div>Triggers when a new person is added to a pipeline stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get People From Campaigns</div>
  <div>Triggers when a new person is created in a campaign.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect in Pipeline Stage</div>
  <div>Creates a prospect in a pipeline stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect in Campaign</div>
  <div>Creates a prospect in a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Prospects Assignee</div>
  <div>Change Prospects Assignee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Prospect to Campaign</div>
  <div>Move Prospect to Campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Prospect to Pipeline Stage</div>
  <div>Move Prospect to Pipeline Stage</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Prospect</div>
  <div>Update a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Prospect</div>
  <div>Finds a prospect based on email or phone.</div>
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
          <title>BONZO</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
