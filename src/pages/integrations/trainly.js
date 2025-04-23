import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trainly"
      description={`Trainly helps companies achieve 100% HR compliance. It uses data to continuously produce ever-more-compelling training that drives behavior change.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trainly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trainly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 77, 124, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trainly helps companies achieve 100% HR compliance. It uses data to continuously produce ever-more-compelling training that drives behavior change.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">All Training Done</div>
  <div>Triggers when an employee completes all of their training</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">State Training Complete</div>
  <div>Triggers when an employee completes a state training.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">State Training Created</div>
  <div>Triggers when a new state training is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">State Training Near</div>
  <div>Triggers when a training is due between 1 and 30 days.</div>
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
          <title>Trainly</title>
          <meta name="description" content={`Trainly helps companies achieve 100% HR compliance. It uses data to continuously produce ever-more-compelling training that drives behavior change.`} />
        </>
      ),
    },
  };
}
