import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Agile CRM"
      description={`Agile CRM offers contact management, marketing automation, telephony, analytics, web engagement, real-time alerts and social suite. Track, nurture, and sell like a pro.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/agile-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Agile CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 161, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Agile CRM offers contact management, marketing automation, telephony, analytics, web engagement, real-time alerts and social suite. Track, nurture, and sell like a pro.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Changed Deal Milestone</div>
  <div>Triggers when a Deal reaches a specific milestone you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Changing Any Deal Milestone</div>
  <div>Changing any milestone in Agile CRM should be triggered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case</div>
  <div>Triggers when a new case is added in Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is add in AgileCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new Deal is added in AgileCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created in Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is added in Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added in the Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag to Contact</div>
  <div>Triggers when a tag is added to contact in AgileCRM.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add to Campaign</div>
  <div>Subscribe to a Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Add a Note to the Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Score to Contact</div>
  <div>Add Score to a Contact in the AgileCRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Contact</div>
  <div>Add Tag to a Contact in the Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a New Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates New Contact in the Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Create a deal in the Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Event</div>
  <div>Create event an event in Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates Ticket in the Agile CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a Task for the Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Updates the contact in Agile CRM based on the Email Address. Alternatively, can also create a contact if one is not found.</div>
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
          <title>Agile CRM</title>
          <meta name="description" content={`Agile CRM offers contact management, marketing automation, telephony, analytics, web engagement, real-time alerts and social suite. Track, nurture, and sell like a pro.`} />
        </>
      ),
    },
  };
}
