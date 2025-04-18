import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Follow Up Boss"
      description="Simple lead management software for real estate agents and brokers. Follow Up Boss takes all your leads and puts them in one simple system automatically. Helps you to respond fast and convert more leads into closings."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/follow-up-boss.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Follow Up Boss Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(60, 103, 182, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simple lead management software for real estate agents and brokers. Follow Up Boss takes all your leads and puts them in one simple system automatically. Helps you to respond fast and convert more leads into closings.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Fires when a new appointment is created in Follow Up Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Fires when a new deal is created in Follow Up Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Stage Updated</div>
  <div>Fires when the stage of a deal is updated in Follow Up Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Fires when a new contact is created in Follow Up Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Stage Updated</div>
  <div>Fires when a contact\'s stage is updated in Follow Up Boss.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Contact</div>
  <div>Fires when a tag is added to a contact in Follow Up Boss.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Collaborators</div>
  <div>Adds selected users as collaborated on a given contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to a Contact</div>
  <div>Adds tags to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Apply an Action Plan to a Contact</div>
  <div>Applies a selected action plan to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Stage of a Contact</div>
  <div>Changes the stage of an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact Without Triggering Action Plans</div>
  <div>Creates a new contact in Follow Up Boss or updates an existing one. IMPORTANT: This will not trigger action plans!</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a deal on a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a note on a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a task for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Call</div>
  <div>Logs a call on a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause an Action Plan for a Contact</div>
  <div>Pauses a selected action plan for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reassign Agent</div>
  <div>Assign a different agent to this contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inquiry or Website Event</div>
  <div>Notify Follow Up Boss when a new inquiry is received or an event on your website happens. For example, someone inquiries about a property, views or saves property as a favorite, an IDX registration or contact form. This will trigger action plans if a new lead is created from the event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for a contact by email, phone number, or Follow Up Boss ID.</div>
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
          <title>Follow Up Boss</title>
          <meta name="description" content="Simple lead management software for real estate agents and brokers. Follow Up Boss takes all your leads and puts them in one simple system automatically. Helps you to respond fast and convert more leads into closings." />
        </>
      ),
    },
  };
}
