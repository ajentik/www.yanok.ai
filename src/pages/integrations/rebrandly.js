import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rebrandly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rebrandly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rebrandly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(44, 150, 223, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rebrandly is the easiest way to create and share branded links (short URLs using your own domain name).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Click</div>
  <div>Triggers when the Branded Link receives a new click. Warning! Be aware that this may cause a high task usage consumption!</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Branded Link</div>
  <div>Triggers when a new branded link is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Branded Link Click</div>
  <div>Triggers when you receive a certain amount of clicks on any or on a specific branded link.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Branded Link</div>
  <div>Update the destination url of a branded link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Branded Link</div>
  <div>Create a short branded link from any URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Branded Link</div>
  <div>Find your branded link.</div>
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
          <title>Rebrandly</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
