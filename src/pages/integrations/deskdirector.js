import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DeskDirector"
      description={`DeskDirector provides top customer success platform for MSPs that provides customizable client and tech portals, centralized communication, smart tickets, automations and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/deskdirector.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DeskDirector Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(242, 102, 58, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DeskDirector provides top customer success platform for MSPs that provides customizable client and tech portals, centralized communication, smart tickets, automations and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">When a Chat Session Is Created or Updated</div>
  <div>Triggers when a chat is created (chat.session.new) or updated (chat.session.status.changed).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">When a Ticket Is Created or Updated</div>
  <div>Triggers when a ticket is created (ticket.new) or updated (ticket.updated).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">When a Workflow Is Triggered</div>
  <div>Triggers when a specfic workflow is triggered.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Create a new Contact in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Ticket</div>
  <div>Create a Ticket in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Users to Chat</div>
  <div>Invite Users from DeskDirector to Chat</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Notification to a Contact</div>
  <div>Send a Notification from DeskDirector to a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Notification to a Member</div>
  <div>Send a Notification from DeskDirector to a Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a System Message in Chat</div>
  <div>Send a System Message in Chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Ticket</div>
  <div>Update a Ticket in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Companies</div>
  <div>Find Companies in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company</div>
  <div>Find a Company in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Find a Contact in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contacts</div>
  <div>Find Contacts in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Member</div>
  <div>Find a Member in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Members</div>
  <div>Find Members in DeskDirector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Ticket</div>
  <div>Get a Ticket from DeskDirector</div>
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
          <title>DeskDirector</title>
          <meta name="description" content={`DeskDirector provides top customer success platform for MSPs that provides customizable client and tech portals, centralized communication, smart tickets, automations and more.`} />
        </>
      ),
    },
  };
}
