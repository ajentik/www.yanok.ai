import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="wiin"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wiin.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        wiin Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(44, 119, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WIIN is a collaborative portal to dematerialize all your information collection process</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Response</div>
  <div>Triggers when new response is send by a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Response Deleted</div>
  <div>Triggers when response is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Response Submitted</div>
  <div>Triggers when new response is submitted by a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Rejected</div>
  <div>Triggers when a response step is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Validated</div>
  <div>Triggers when a response step is validated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Waiting for Validation</div>
  <div>Triggers when a response step is waiting for validation.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>wiin</title>
        </>
      ),
    },
  };
}
