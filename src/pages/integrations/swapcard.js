import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Swapcard"
      description="Swapcard is an event platform for virtual, hybrid and in-person events."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/swapcard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Swapcard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 136, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Swapcard is an event platform for virtual, hybrid and in-person events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity occurs in the last 24 hours.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Exhibitors</div>
  <div>Triggers when a new exhibitors is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting</div>
  <div>Triggers when a new meeting is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when a person is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Planning</div>
  <div>Triggers when a new planning is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Planning Bookmarked</div>
  <div>Triggers when a new planning is bookmared.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Remove a Badge to a Person</div>
  <div>Add or remove a badge to a peson.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Exhibitor</div>
  <div>Create a new exhibitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Remove a Person as Exhibitors Member</div>
  <div>Add or remove a person as exhibitors member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person Groups</div>
  <div>Update a person\'s group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Person as Attending a Session</div>
  <div>Add a person as attending a session.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Update a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person</div>
  <div>Find for a person by a specific field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Planning by Id</div>
  <div>Find a planning by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Person</div>
  <div>Finds or creates a specific person.</div>
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
          <title>Swapcard</title>
          <meta name="description" content="Swapcard is an event platform for virtual, hybrid and in-person events." />
        </>
      ),
    },
  };
}
