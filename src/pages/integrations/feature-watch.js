import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Feature Watch"
      description="Feature Watch is a productivity tool to help capture and track user feedback for your SaaS application."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/feature-watch.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Feature Watch Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 43, 44, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Feature Watch is a productivity tool to help capture and track user feedback for your SaaS application.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a comment is made on a feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feature</div>
  <div>Triggers when a feature is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Upvote</div>
  <div>Triggers when a vote is made on a feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Status Change</div>
  <div>Triggers when a feature is moved to a new status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Feature</div>
  <div>Creates a new feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Feature Status</div>
  <div>Change the status of an existing feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Feature</div>
  <div>Search for a feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Feature</div>
  <div>Search for a feature.</div>
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
          <title>Feature Watch</title>
          <meta name="description" content="Feature Watch is a productivity tool to help capture and track user feedback for your SaaS application." />
        </>
      ),
    },
  };
}
