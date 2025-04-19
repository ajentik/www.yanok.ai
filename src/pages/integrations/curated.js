import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Curated"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/curated.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Curated Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(242, 121, 61, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Curated is the quickest and easiest way to publish a digest newsletter by email and also on the web. Collect links, pick the best, add your commentary and publish it to your subscribers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Collected Link</div>
  <div>Triggers when a link is collected from any source.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Published Issue</div>
  <div>Triggers when an issue is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new email subscriber is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when an email subscriber unsubscribes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Collected Link</div>
  <div>Adds a link to the collected items for a publication.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Subscriber</div>
  <div>Adds an email subscriber to a publication.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber</div>
  <div>Unsubscribes an email address from a publication.</div>
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
          <title>Curated</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
