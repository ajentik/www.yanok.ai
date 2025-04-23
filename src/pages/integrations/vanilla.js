import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Higher Logic Vanilla"
      description={`Community software that powers connection between a brand and their customers to build loyalty, improve support, and increase customer lifetime value.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vanilla.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Higher Logic Vanilla Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 145, 219, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Community software that powers connection between a brand and their customers to build loyalty, improve support, and increase customer lifetime value.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Article Added</div>
  <div>Triggers when a new article is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Article Deleted</div>
  <div>Triggers when an article is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Article Feedback Added</div>
  <div>Triggers when an article receive feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Article Updated</div>
  <div>Triggers when an article is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Badge Received</div>
  <div>Triggers when a user receives a badge.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Discussion Deleted</div>
  <div>Triggers when a discussion is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Profile Change</div>
  <div>Triggers when a user edits their profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event RSVP</div>
  <div>Triggers when a user RSVPs to an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Added</div>
  <div>Triggers when a new comment is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Event Added</div>
  <div>Triggers when a new community event is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Discussion Added</div>
  <div>Triggers when a new discussion is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ideation Vote</div>
  <div>Triggers when an idea receives a vote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notification</div>
  <div>Triggers when a new notification has been sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reaction Added</div>
  <div>Triggers when a new reaction is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Added</div>
  <div>Triggers when a new user signs up to the forum.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Point Received</div>
  <div>Triggers when a user receives a point.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rank</div>
  <div>Triggers when a user\'s rank gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Report Filed</div>
  <div>Triggers when a post is reported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Discussion Updated</div>
  <div>Triggers when a discussion is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Warning Issued</div>
  <div>Triggers when a user is warned.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign a Role to a User</div>
  <div>Assigns a role to the specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Award a Badge to a User</div>
  <div>Awards a badge to the specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close a Discussion</div>
  <div>Close a discussion</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment on Discussion</div>
  <div>Automatically comment when a new discussion is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Discussion</div>
  <div>Creates a new discussion</div>
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
          <title>Higher Logic Vanilla</title>
          <meta name="description" content={`Community software that powers connection between a brand and their customers to build loyalty, improve support, and increase customer lifetime value.`} />
        </>
      ),
    },
  };
}
