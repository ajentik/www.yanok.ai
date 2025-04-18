import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Maximizer CRM"
      description="Maximizer has fully integrated sales, marketing and customer service modules making it easy to gain deep customer insight and drive retention and loyalty within a single, affordable CRM solution."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/maximizer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Maximizer CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 64, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Maximizer has fully integrated sales, marketing and customer service modules making it easy to gain deep customer insight and drive retention and loyalty within a single, affordable CRM solution.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Polling Address Book Entry</div>
  <div>Triggers when there\'s a new and/or updated address book entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for AB Entries</div>
  <div>Triggers when the address book entry reaches the notification date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Appointment Entry</div>
  <div>Triggers when there\'s a new and/or updated appointment entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for Appointment Entry</div>
  <div>Triggers when the Appointment entry reaches the notification date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Case Entry</div>
  <div>Triggers when there\'s a new and/or updated case entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for Case</div>
  <div>Triggers when the case entry reaches the notification date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Lead Entry</div>
  <div>Triggers when there\'s a new and/or updated lead entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for Lead</div>
  <div>Triggers when the lead entry reaches the notification date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Note Entry</div>
  <div>Triggers when there\'s a new and/or updated note entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Opportunity Entry</div>
  <div>Triggers when there\'s a new and/or updated opportunity entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for Opportunities</div>
  <div>Triggers when the opportunity reaches the notification date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Polling Tasks Entry</div>
  <div>Triggers when there\'s a new and/or updated task entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date Notification for Tasks</div>
  <div>Triggers when the Task reaches the notification date.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Convert Lead Entry</div>
  <div>Convert Lead Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Address Book Entry</div>
  <div>Creates a new company, individual or contact in your address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Create Appointment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Case</div>
  <div>Create a Customer Service Case</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a new document. NOTE: Create Document action only supports Maximizer CRM Version 2020R2 or later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Favourite List</div>
  <div>Create a Favourite List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Hotlist Task</div>
  <div>Create Hotlist Task for abentry/opportunity/lead/case entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead Entry</div>
  <div>Create Lead Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create Note for abentry/opportunity/lead/case entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity Entry</div>
  <div>Create Opportunity Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Personal Task</div>
  <div>Create Personal Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Address Book Entry</div>
  <div>Update Address Book Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Appointment</div>
  <div>Update Appointment by Appointment Key</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Case</div>
  <div>Update a Customer Service Case</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Favourite List</div>
  <div>Update Favourite List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead Entry</div>
  <div>Update Lead Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Update Note by Note Key</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update Task by Task Key</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Appointment</div>
  <div>Search Action for Appointment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Case</div>
  <div>Search Action for Case</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Lead Entry</div>
  <div>Search Action for Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Note</div>
  <div>Search Action for Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Opportunity</div>
  <div>Search Action for Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Task</div>
  <div>Search Action for Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Address Book Entry</div>
  <div>Search Action for Address Book Entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Maximizer User</div>
  <div>Search Action for Maximizer Users by Key or Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Address Book entry</div>
  <div>Find or Create Address Book entry</div>
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
          <title>Maximizer CRM</title>
          <meta name="description" content="Maximizer has fully integrated sales, marketing and customer service modules making it easy to gain deep customer insight and drive retention and loyalty within a single, affordable CRM solution." />
        </>
      ),
    },
  };
}
