import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Streamtime"
      description="Intuitive project management, time tracking with auto-populated to-do lists, deep analytics, team scheduling and much more."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/streamtime.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Streamtime Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(148, 233, 215, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Intuitive project management, time tracking with auto-populated to-do lists, deep analytics, team scheduling and much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Completed</div>
  <div>Triggers when all items on a job have been completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Created</div>
  <div>Triggers when a job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Update</div>
  <div>Triggers when an update happens on a job that the user might want to action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Approved</div>
  <div>Triggers when a quote gets approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Sent</div>
  <div>Triggers when a quote is sent to a client.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Personal to Do</div>
  <div>Creates a new Personal To Do.</div>
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
          <title>Streamtime</title>
          <meta name="description" content="Intuitive project management, time tracking with auto-populated to-do lists, deep analytics, team scheduling and much more." />
        </>
      ),
    },
  };
}
