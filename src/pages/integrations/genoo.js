import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Genoo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/genoo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Genoo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(229, 120, 41, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Marketing Automation and Online Marketing Tools for small and midsized organizations. Includes comprehensive lead database, activity tracking and scoring, email marketing, and lead nurturing. Also contains integrated CRM for small sales teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Type Members</div>
  <div>Pull list of leads in leadtype (max 250 returned each request).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Marketing Qualified Lead</div>
  <div>Get New Marketing Qualified Leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Pull New Opportunities from Your Genoo Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Won Opportunity</div>
  <div>Will retreive recent Won Opportunities.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Nurturing Sequence Subscriber</div>
  <div>Trigger a Nurturing Sequence for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email Recipient</div>
  <div>Add a recipient to an email in Genoo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Add or update Lead Record within your Genoo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Adds a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Scheduled Activity for Lead</div>
  <div>Adds a new Activity record to a lead record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Record Webinar Attendance</div>
  <div>Records Webinar Attendance for a lead. Requires that the lead already be registered for the webinar in the Genoo/WPMktgEngine system. This will record "Attended" and "Did Not Attend" facts associated with the lead and a specific webinar.</div>
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
          <title>Genoo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
