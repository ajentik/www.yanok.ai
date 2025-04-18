import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Parallel"
      description="Parallel is a collaborative process management software for back-office and sales teams."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/parallel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Parallel Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(96, 89, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Parallel is a collaborative process management software for back-office and sales teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Parallel Event</div>
  <div>Triggers when an event happens in one of your parallels.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft</div>
  <div>Create a draft parallel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download File Reply</div>
  <div>Download a reply to a file field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Export Parallel</div>
  <div>Export the replies of a parallel</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fill Parallel</div>
  <div>Fill the replies from an existing parallel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Parallel</div>
  <div>Send a parallel to the specified recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Multiple</div>
  <div>Send a parallel to multiple recipients.</div>
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
          <title>Parallel</title>
          <meta name="description" content="Parallel is a collaborative process management software for back-office and sales teams." />
        </>
      ),
    },
  };
}
