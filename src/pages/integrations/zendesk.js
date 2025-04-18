import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zendesk"
      description="Zendesk is a web-based help desk support tool that makes it simple to provide great customer support."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zendesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zendesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(120, 163, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zendesk is a web-based help desk support tool that makes it simple to provide great customer support.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is added to Zendesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recent Ticket</div>
  <div>Triggers when a new ticket is added (Zendesk may take an hour to make tickets available via their API with this trigger).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Action on Ticket</div>
  <div>Triggers when there is activity (an audit) on a specific ticket. Can only watch one ticket per Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is added to a view.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New View</div>
  <div>Triggers when a new view is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Create a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Create a new ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach File to Ticket</div>
  <div>Attach a file to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Ticket</div>
  <div>Add a comment to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag(s) to Ticket</div>
  <div>Add one or more tags to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Update an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Update an existing ticket status or add comments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Agent</div>
  <div>Finds an existing agent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Group</div>
  <div>Finds an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Organization</div>
  <div>Finds an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Ticket</div>
  <div>Finds an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>Finds an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Finds or creates a specific organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Ticket</div>
  <div>Finds or creates a specific ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Finds or creates a specific user.</div>
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
          <title>Zendesk</title>
          <meta name="description" content="Zendesk is a web-based help desk support tool that makes it simple to provide great customer support." />
        </>
      ),
    },
  };
}
