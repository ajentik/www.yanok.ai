import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Teamtailor"
      description="Teamtailor's intuitive automation helps users manage candidates and the entire recruitment process, as well as schedule and keep track of activities, book interviews and make notes about candidates."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teamtailor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Teamtailor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(245, 87, 147, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Teamtailor\'s intuitive automation helps users manage candidates and the entire recruitment process, as well as schedule and keep track of activities, book interviews and make notes about candidates.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Event</div>
  <div>Triggers when a candidate has moved to the selected stage in a Teamtailor Job.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Create a new candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note on a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Candidate</div>
  <div>Updates an already existing candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Updates an already existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Finds a candidate by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Finds a job by its title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Candidate</div>
  <div>Finds a candidate by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Job</div>
  <div>Finds a job by its title.</div>
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
          <title>Teamtailor</title>
          <meta name="description" content="Teamtailor's intuitive automation helps users manage candidates and the entire recruitment process, as well as schedule and keep track of activities, book interviews and make notes about candidates." />
        </>
      ),
    },
  };
}
