import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Roi4Presenter"
      description={`Roi4Presenter is a web service and mobile application for online presentations and product demo, lead generation and outreach.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/roi4presenter.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Roi4Presenter Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(72, 207, 173, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Roi4Presenter is a web service and mobile application for online presentations and product demo, lead generation and outreach.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Finished Presentations Report</div>
  <div>Triggers when a finished presentation report is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Joined Presenter</div>
  <div>Triggers when a joined presenter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Joined New Listener</div>
  <div>Triggers when a joined new listener</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Listener Filled Out the Lead Form</div>
  <div>Triggers when a new presentation listener fills out the Lead Form</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Presentation Link</div>
  <div>Create presentation link according to settings</div>
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
          <title>Roi4Presenter</title>
          <meta name="description" content={`Roi4Presenter is a web service and mobile application for online presentations and product demo, lead generation and outreach.`} />
        </>
      ),
    },
  };
}
