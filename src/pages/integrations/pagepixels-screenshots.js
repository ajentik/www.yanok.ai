import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PagePixels Screenshots"
      description="PagePixels provides free, immediate screenshots, scheduled screenshots, and multi-step screenshots (complete forms, login to websites, etc)."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pagepixels-screenshots.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PagePixels Screenshots Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(59, 145, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PagePixels provides free, immediate screenshots, scheduled screenshots, and multi-step screenshots (complete forms, login to websites, etc).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Change Notification</div>
  <div>Triggers when the content of a page has changed since the last screenshot, optionally limited to specific screenshot configurations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Screenshot</div>
  <div>Triggers when a new screenshot is taken, optionally limited to specific Screenshot Configurations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Screenshot Configuration</div>
  <div>Triggers when a new screenshot configuration is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Recurring Screenshot</div>
  <div>Creates a screenshot configuration. The configuration can include a recurring schedule and change notifications. You will receive the Embed URL as a part of the response. The Embed URL will always display the latest screenshot image taken for the configuration, so it can be used on public websites, dashboards, and internal systems without worrying about API keys or any other configuration parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Take a Screenshot</div>
  <div>Creates an instant screenshot of a URL.</div>
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
          <title>PagePixels Screenshots</title>
          <meta name="description" content="PagePixels provides free, immediate screenshots, scheduled screenshots, and multi-step screenshots (complete forms, login to websites, etc)." />
        </>
      ),
    },
  };
}
