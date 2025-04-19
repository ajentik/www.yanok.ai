import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="On2Air"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/on2air.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        On2Air Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(89, 90, 90, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">On2Air is the complete suite of products to be efficient and maximize platforms such as Airtable.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Perform On2Air Trigger</div>
  <div>Triggers when data meets criteria set in an On2Air App</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Perform On2Air Task</div>
  <div>Perform a task associated with an On2Air App</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Perform Zapier Utility Task</div>
  <div>Utility tasks to assist with working with On2Air in Zapier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Perform On2Air Search</div>
  <div>Lookup data/results from an On2Air App</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Perform a Session Lookup</div>
  <div>Search to get results from a previous step that does not return instantly.</div>
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
          <title>On2Air</title>
        </>
      ),
    },
  };
}
