import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Greenhouse"
      description="Greenhouse is a hiring software company. We create the technology, know-how and support for your business' hiring needs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/greenhouse.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Greenhouse Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(27, 178, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Greenhouse is a hiring software company. We create the technology, know-how and support for your business\' hiring needs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Application</div>
  <div>Triggers when a new application is submitted by a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Post</div>
  <div>Triggers when a new job post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduled Interview</div>
  <div>Triggers when there is a new Scheduled Interview for the given time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scorecard Due</div>
  <div>Triggers when there is a new Scorecard Due.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Creates a new candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate Note</div>
  <div>Creates a candidate note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect</div>
  <div>Creates a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Candidate</div>
  <div>Updates a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Finds a candidate by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Due Scorecard</div>
  <div>Looks up a Due Scorecard by ID (found via the Trigger).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Candidate</div>
  <div>Finds a candidate by email address.</div>
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
          <title>Greenhouse</title>
          <meta name="description" content="Greenhouse is a hiring software company. We create the technology, know-how and support for your business' hiring needs." />
        </>
      ),
    },
  };
}
