import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cloud BOT"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cloud-bot.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cloud BOT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(29, 172, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cloud BOT is a freemium service for web browser automation. You can easily create your own robot and it can be run at any time in the cloud.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">BOT Done</div>
  <div>Triggers when a BOT at the end of execution.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Download File</div>
  <div>Download a file. You can set file ref and get file contents.(The API must be enabled on Cloud BOT website.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Execute BOT</div>
  <div>Execute your BOT. You can set specific input values for your BOT. (The API must be enabled and the BOT must be published on Cloud BOT website.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Upload a file. You can set file contents and get file ref.(The API must be enabled on Cloud BOT website.)</div>
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
          <title>Cloud BOT</title>
        </>
      ),
    },
  };
}
