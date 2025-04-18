import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Orbit"
      description="Grow your community and prove ROI with Orbit, the community experience platform for delivering stellar member experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/orbit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Orbit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(119, 90, 246, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Grow your community and prove ROI with Orbit, the community experience platform for delivering stellar member experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created in Orbit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is created in your workspace.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add an Identity to a Member</div>
  <div>Adds an Identity on another platform to an Orbit Member profile</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Save an activity to a Member profile in Orbit. If the Member profile does not exist, it will also be created using this Action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Member</div>
  <div>Add a new member to your Orbit workspace without an associated activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Member Note</div>
  <div>Creates a new note for a member in your Orbit workspace. If the member cannot be found, then a new member is first created and the note added to the new member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a Member\'s profile on your Orbit workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Member by Orbit ID</div>
  <div>Retrieves a Member in a Workspace using their member ID or slug</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Member by Identity</div>
  <div>Finds a member in your Orbit workspace using their email address, or Twitter, GitHub, Discord, or LinkedIn username.</div>
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
          <title>Orbit</title>
          <meta name="description" content="Grow your community and prove ROI with Orbit, the community experience platform for delivering stellar member experience." />
        </>
      ),
    },
  };
}
