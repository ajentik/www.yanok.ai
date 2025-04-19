import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mighty Networks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mightynetworks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mighty Networks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(220, 208, 8, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mighty Networks is a platform that offers anyone the opportunity to create their own community and start getting paid to support their work. Your members can message, meet, and go deeper around the topics and interests they care about most.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Progress Update</div>
  <div>Triggers when a member’s course progress changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Action</div>
  <div>Triggers when a member joins or requests to join, leaves, purchases or cancels a plan, or updates their profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Content</div>
  <div>Triggers when someone adds a Quick Post, Article, Event, Poll, or Question.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event RSVP</div>
  <div>Triggers when a member RSVPs to an Event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Article</div>
  <div>Creates a new article.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Event</div>
  <div>Schedules a new event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Poll or Question</div>
  <div>Creates a new multiple choice poll, percentage poll, hot cold poll, or question.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quick Post</div>
  <div>Creates a new quick post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Member</div>
  <div>Remove an existing member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Members</div>
  <div>Sends invites to join your Mighty Network.</div>
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
          <title>Mighty Networks</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
