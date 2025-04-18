import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Groove"
      description="The simple helpdesk for SaaS and eCommerce businesses."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/groove.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Groove Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(75, 198, 231, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The simple helpdesk for SaaS and eCommerce businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Agent Invited</div>
  <div>Triggers when an agent is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Agent Replied</div>
  <div>Triggers when an agent replies to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Added</div>
  <div>Triggers when a customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Replied</div>
  <div>Triggers when a customer replies to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Added</div>
  <div>Triggers when a note is added to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Assigned</div>
  <div>Triggers when a ticket is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Closed</div>
  <div>Triggers when a ticket is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Deleted</div>
  <div>Triggers when a ticket is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Moved</div>
  <div>Triggers when a ticket is moved to a different mailbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Opened</div>
  <div>Triggers when a ticket is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Priority Changed</div>
  <div>Triggers when a ticket\'s priority is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Started</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket State Changed</div>
  <div>Triggers when a ticket\'s state is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Tagged</div>
  <div>Triggers when a ticket is tagged.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Adds a private note to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Assigned Agent</div>
  <div>Assigns an agent to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Ticket</div>
  <div>Changes the state of a ticket to "closed".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Ticket</div>
  <div>Starts a new ticket for your customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reopen Ticket</div>
  <div>Changes the state of a ticket to "opened".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Ticket State</div>
  <div>Changes the state of a ticket, e.g. from "opened" to "closed".</div>
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
          <title>Groove</title>
          <meta name="description" content="The simple helpdesk for SaaS and eCommerce businesses." />
        </>
      ),
    },
  };
}
