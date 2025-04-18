import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DealMachine"
      description="DealMachine intelligently automates your REI marketing process. Simply take a picture of a property with your smartphone and DealMachine looks up the owner and sends highly personalized mail."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dealmachine.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DealMachine Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 204, 229, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DealMachine intelligently automates your REI marketing process. Simply take a picture of a property with your smartphone and DealMachine looks up the owner and sends highly personalized mail.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Address for Lead</div>
  <div>Triggers when a new email address is added to a lead on your account (Via skip trace, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added to your team\'s DealMachine account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Number for Lead</div>
  <div>Triggers when a new phone number is added to a lead on your account (Via skip trace, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Member</div>
  <div>Triggers when a new team member is added to your team.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Lead</div>
  <div>Add a lead to your team\'s DealMachine account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Lead to List</div>
  <div>Add a lead to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Lead</div>
  <div>Adds tags to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Lead to Team Member</div>
  <div>Assign a lead to a team member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note for Lead</div>
  <div>Creates a note for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">End Mail Sequence for Lead</div>
  <div>Ends the current mail sequence for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Mail Sequence for Lead</div>
  <div>Pauses the current mail sequence for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Lead From List</div>
  <div>Removes a lead for a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags From Lead</div>
  <div>Removes tags from a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Mail Sequence for Lead</div>
  <div>Starts a mail sequence for a lead. If no mail sequence ID is provided, the team\'s default mail sequence will be selected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Field for Lead</div>
  <div>Updates a custom field for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead Status</div>
  <div>Updates the status for a lead.</div>
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
          <title>DealMachine</title>
          <meta name="description" content="DealMachine intelligently automates your REI marketing process. Simply take a picture of a property with your smartphone and DealMachine looks up the owner and sends highly personalized mail." />
        </>
      ),
    },
  };
}
