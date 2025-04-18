import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MediaSilo Legacy"
      description="MediaSilo Legacy's plug-and-play video management platform sits in the middle of your production process, working with your existing tools and workflows to keep your team connected, your assets secure and all your bases covered."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mediasilo-legacy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MediaSilo Legacy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(22, 113, 195, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MediaSilo Legacy\'s plug-and-play video management platform sits in the middle of your production process, working with your existing tools and workflows to keep your team connected, your assets secure and all your bases covered.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Asset Is Deleted</div>
  <div>Triggers when an asset is deleted by a MediaSilo user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Asset Uploaded and Ready</div>
  <div>A new asset is uploaded and is ready.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Asset Updated</div>
  <div>Triggers when an asset is changed by a MediaSilo user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Changed Project</div>
  <div>Triggers when a project is changed in MediaSilo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Project</div>
  <div>Triggers when a new project is deleted in MediaSilo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Asset</div>
  <div>A new asset is uploaded. This event gets triggered before an actual asset exists and should not be used to trigger File actions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when someone comments on an asset in MediaSilo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created in MediaSilo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">QuickLink Created</div>
  <div>Triggers when a new Quick Link is created in MediaSilo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">QuickLink Updated</div>
  <div>Triggers when a QuickLink is modified in MediaSilo.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create File</div>
  <div>Creates a new asset based on a publicly accessible URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite User to Project</div>
  <div>Invites an user (by email) to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project with a name and description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a user.</div>
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
          <title>MediaSilo Legacy</title>
          <meta name="description" content="MediaSilo Legacy's plug-and-play video management platform sits in the middle of your production process, working with your existing tools and workflows to keep your team connected, your assets secure and all your bases covered." />
        </>
      ),
    },
  };
}
