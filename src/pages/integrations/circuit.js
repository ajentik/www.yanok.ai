import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Circuit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/circuit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Circuit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(132, 195, 59, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Circuit is everything your teams need to communicate in a single app. It’s voice, video, screen share, chat, and file sharing. It’s collaboration made simple.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a new conversation is created with you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Call</div>
  <div>Triggers when a call is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mention</div>
  <div>Triggers when someone mentions you in a post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new post is received in any of your conversations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post in a Specified Conversation</div>
  <div>Triggers when a new post is received in a specific conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Presence Change</div>
  <div>Triggers when a presence is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Participants</div>
  <div>Create a new list of participants to add to a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start 1-To-1 Conversation</div>
  <div>Create a new 1-to-1 conversation or returns the existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a Group Conversation</div>
  <div>Create a new group conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Topic</div>
  <div>Create a new topic with your user account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply to a Topic</div>
  <div>Creates a new reply to a topic with your user account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Participants</div>
  <div>Create a new list of participants to remove from a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Presence</div>
  <div>Sets a new presence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Conversation</div>
  <div>Find a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Item by ID</div>
  <div>Find an item by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user by email or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Users by ID</div>
  <div>Find a user by ID.</div>
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
          <title>Circuit</title>
        </>
      ),
    },
  };
}
