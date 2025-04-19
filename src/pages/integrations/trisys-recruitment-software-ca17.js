import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TriSys Recruitment Software"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trisys-recruitment-software-ca17.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TriSys Recruitment Software Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 79, 162, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TriSys Recruitment Software manages your client/candidate relationships, placements, timesheets and website on any device.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Authorised Timesheet</div>
  <div>Triggers when a timesheet is authorised in the TriSys database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Check-In</div>
  <div>Triggers when a candidate has started their first day at work at a new placement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Record</div>
  <div>Triggers when the specified entity record is created in the TriSys database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Record</div>
  <div>Triggers when an existing entity record is updated in the TriSys database.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Applied to Vacancy</div>
  <div>A candidate has applied to a vacancy/requirement in the TriSys database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Alert Message</div>
  <div>Sends a popup alert message to the TriSys application for one or more users</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Create a new client, candidate or user contact record in the TriSys database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Create a new scheduled task or a note/history record in the TriSys database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Vacancy</div>
  <div>Create a new vacancy/requirement in the TriSys database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update an existing client, candidate or user contact record in the TriSys database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Contact</div>
  <div>Find an existing client, candidate or user record in the TriSys database</div>
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
          <title>TriSys Recruitment Software</title>
        </>
      ),
    },
  };
}
