import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuickMail.io"
      description={`Grow your business fast with personalized cold emails at scale.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quickmail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuickMail.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 73, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Grow your business fast with personalized cold emails at scale.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bounce</div>
  <div>Triggers when an email comes back as a bounce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checkpoint Reached</div>
  <div>Triggers when a prospect reached a checkpoint in the journey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Click</div>
  <div>Triggers when a prospect clicks on a link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Journey Completed</div>
  <div>Trigger when a prospect has no more steps to execute in the journey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Open</div>
  <div>Triggers when a prospect opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a prospect replies to you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Journey Sentiment</div>
  <div>Trigger when a journey sentiment is set (either through labels or manually setting a reply in your TODOs).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tag</div>
  <div>Triggers when a prospect tag is set or unset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Trigger when a task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribe</div>
  <div>Trigger when a prospect clicks on an unsubscribe link.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Journey</div>
  <div>Cancel all journeys of a prospect &amp; removes that prospect from any buckets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Prospect</div>
  <div>Creates or Update a Prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Prospect</div>
  <div>Set a prospect as unsubscribed to stop sending emails to that prospect.</div>
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
          <title>QuickMail.io</title>
          <meta name="description" content={`Grow your business fast with personalized cold emails at scale.`} />
        </>
      ),
    },
  };
}
