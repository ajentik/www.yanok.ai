import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Wingmate"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wingmate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Wingmate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(100, 75, 49, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Grow, engage & simplify with the #1 in-field solution. Wingmate makes it easy for your people on-the-go to capture information and bridge communication.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Comment Deleted</div>
  <div>Triggers when a comment is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Deleted</div>
  <div>Triggers when a contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Deleted</div>
  <div>Triggers when a lead is deleted. A hidden lead can be restored later, your app can be aleted to this using the \'Lead Restored\' trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reminder Deleted</div>
  <div>Triggers when a reminder is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Action Created</div>
  <div>Triggers when a new action request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Created</div>
  <div>Triggers when a new comment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Link Created</div>
  <div>Triggers when two Leads are Linked together.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reminder Created</div>
  <div>Triggers when a new reminder request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Status Update Created</div>
  <div>Triggers when a new status update is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Restored</div>
  <div>Triggers when a lead is restored from the trash.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Action Updated</div>
  <div>Triggers when a is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Updated</div>
  <div>Triggers when a is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when a lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reminder Updated</div>
  <div>Triggers when a is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create an Action</div>
  <div>Creates a new action request on an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Comment</div>
  <div>Creates a new comment on an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Creates a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Lead</div>
  <div>Creates a new lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Reminder</div>
  <div>Creates a new reminder on an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Reward</div>
  <div>Creates a new reward on an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Action</div>
  <div>Updates an existing action request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Comment</div>
  <div>Updates the text field on an existing comment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact</div>
  <div>Updates an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Lead</div>
  <div>Updates an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Reminder</div>
  <div>Updates an existing reminder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup a Lead by Custom Fields</div>
  <div>Loads a Lead object that matches the specified search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup a Contact</div>
  <div>Search for a Wingmate contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup a Lead by ID</div>
  <div>Loads a lead for a given Lead ID.</div>
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
          <title>Wingmate</title>
        </>
      ),
    },
  };
}
