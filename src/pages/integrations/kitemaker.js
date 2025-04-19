import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kitemaker"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kitemaker.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kitemaker Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(11, 41, 80, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Get the most out of your product development team by planning and developing what your customers need together.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is added to a work item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Theme</div>
  <div>Triggers when a Theme is first created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Item</div>
  <div>Triggers when a new Work Item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Work Item</div>
  <div>Triggers when a Work Item is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Creates a comment on a work item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Item</div>
  <div>Creates a work item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Creates a label for the specified Space</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Work Item</div>
  <div>Updates an existing Work item</div>
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
          <title>Kitemaker</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
