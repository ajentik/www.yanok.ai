import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GaggleAMP"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gaggleamp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GaggleAMP Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 77, 160, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Increase brand reach and employee engagement through your employees\' social networks.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is posted in your feed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a new conversation is created in your feed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Performed Activity</div>
  <div>Triggers when an activity is performed by any Gaggle user. Requires manager privileges.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates an activity for Gaggle\'s users to perform. Requires manager privileges.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation</div>
  <div>Creates a conversation published on the Gaggle\'s feed.</div>
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
          <title>GaggleAMP</title>
        </>
      ),
    },
  };
}
