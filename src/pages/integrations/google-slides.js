import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Google Slides"
      description={`Google Slides allows you to create, edit, and share presentations with anyone, online, for free.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/google-slides.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Google Slides Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(243, 175, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Google Slides allows you to create, edit, and share presentations with anyone, online, for free.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Presentation</div>
  <div>Triggers when a new presentation is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Presentation From Template</div>
  <div>Creates a new presentation based on an existing one and can replace any placeholder variables found in your template presentation, like {{name}}, {{email}}, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refresh Charts</div>
  <div>Refreshes the data for all charts in a presentation that have been linked to Google Sheets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Presentation</div>
  <div>Finds an existing presentation.</div>
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
          <title>Google Slides</title>
          <meta name="description" content={`Google Slides allows you to create, edit, and share presentations with anyone, online, for free.`} />
        </>
      ),
    },
  };
}
