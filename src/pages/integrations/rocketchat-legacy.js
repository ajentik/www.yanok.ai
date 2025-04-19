import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rocket.Chat (Legacy)"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rocketchat-legacy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rocket.Chat (Legacy) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(193, 39, 45, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rocket.Chat (Legacy) is an Open Source team communication platform: features from team chat to helpdesk live-chat, video conferencing and many more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Channel</div>
  <div>Triggers when a new channel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted Anywhere</div>
  <div>Triggers when a new message is posted to any public #channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Channel</div>
  <div>Triggers when a new message is posted to a specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Private Group</div>
  <div>Triggers when a new message is posted to a specific #private-group you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Private Group</div>
  <div>Triggers when a new private group is created for the connected user.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Channel</div>
  <div>Creates a new channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Private Group</div>
  <div>Creates a new private group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Channel Message</div>
  <div>Post a new message to the specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Direct Message</div>
  <div>Sends a new message to the person you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Private Group Message</div>
  <div>Post a new message to the specific private group you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Channel</div>
  <div>Finds an existing public channel. This action only works for public channels, not private groups.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Channel</div>
  <div>Find or Create Channel</div>
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
          <title>Rocket.Chat (Legacy)</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
