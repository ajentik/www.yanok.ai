import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Discord"
      description="Discord is an all-in-one voice and text chat for gamers."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/discord.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Discord Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Discord is an all-in-one voice and text chat for gamers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Channel</div>
  <div>Triggers when a new message is posted to a specific text channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Added</div>
  <div>Triggers when a new user joins the Discord Server.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reaction on Message</div>
  <div>Triggers when a new reaction is added to a specific message with the details of the user who reacted to it.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Role</div>
  <div>assign a role to a user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User Role</div>
  <div>Remove a chosen role from the specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Channel</div>
  <div>Rename a channel to a specific name you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Channel Message</div>
  <div>Post a new message to a specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Channel</div>
  <div>Find an existing channel by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find an existing user by name.</div>
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
          <title>Discord</title>
          <meta name="description" content="Discord is an all-in-one voice and text chat for gamers." />
        </>
      ),
    },
  };
}
