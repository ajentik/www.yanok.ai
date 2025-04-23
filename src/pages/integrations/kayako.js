import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kayako"
      description={`Kayako offers a multi-channel (email, social media, and live chat) customer support platform with customizable engagement workflows.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kayako.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kayako Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 54, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kayako offers a multi-channel (email, social media, and live chat) customer support platform with customizable engagement workflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers whenever a new conversation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers whenever a reply is received on a conversation (also triggered on the first post).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Conversation</div>
  <div>Triggers when a tag is added to a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Organization</div>
  <div>Triggers when a tag is added to an organization in Kayako.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to User</div>
  <div>Triggers when a tag is added to a user.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Private Note to a Conversation</div>
  <div>Adds a private note to an existing conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Conversation</div>
  <div>Adds tags to an existing conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Organization</div>
  <div>Adds tags to an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to User</div>
  <div>Adds tags to an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation via Email</div>
  <div>Creates a conversation with the first post as a email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation With a Private Note</div>
  <div>Creates a new conversation with the first post as a private note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event, which will show on the user\'s timeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user account and profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Conversation</div>
  <div>Updates an existing conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Organization</div>
  <div>Updates an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a User</div>
  <div>Updates an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Agent</div>
  <div>Finds an existing agent user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Conversation</div>
  <div>Finds an existing conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Finds an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>Find an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Conversation</div>
  <div>Find or Create a Conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Find or Create Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a User</div>
  <div>Find or Create a User</div>
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
          <title>Kayako</title>
          <meta name="description" content={`Kayako offers a multi-channel (email, social media, and live chat) customer support platform with customizable engagement workflows.`} />
        </>
      ),
    },
  };
}
