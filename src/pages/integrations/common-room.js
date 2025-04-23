import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Common Room"
      description={`Common Room is the intelligent community growth platform that helps you deepen relationships, build better products, and drive business impact.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/common-room.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Common Room Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(215, 198, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Common Room is the intelligent community growth platform that helps you deepen relationships, build better products, and drive business impact.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Segment Status List</div>
  <div>List of Status for a Segment</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Activity</div>
  <div>Adds an activity to a member in your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Member</div>
  <div>Adds a member to your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Member</div>
  <div>Adds a note to a member in your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Segment</div>
  <div>Adds a note to a segment in your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Member</div>
  <div>Add new or existing tags to a member in your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Member to Segment</div>
  <div>Adds one or more members in your community to a segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Member</div>
  <div>Gets information on a member in your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Member Custom Field</div>
  <div>Updates the value of a member custom field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a member in your community.</div>
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
          <title>Common Room</title>
          <meta name="description" content={`Common Room is the intelligent community growth platform that helps you deepen relationships, build better products, and drive business impact.`} />
        </>
      ),
    },
  };
}
