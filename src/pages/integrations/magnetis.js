import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Magnetis"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/magnetis.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Magnetis Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(100, 158, 213, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Magnetis Call-tracking is a ROI solution which permits your company to follow and analyse its incoming calls. Thanks to the data collected, you get a precise and reliable insight of the performance of each channel or operation of communication that you use in your strategy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when an incoming call (missed or answered) is received on your tracked numbers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call With Last Entry</div>
  <div>Triggers when an incoming call (missed or answered) is received on your tracked numbers with last entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call With Last Page Viewed</div>
  <div>Triggers when an incoming call (missed or answered) is received on your tracked numbers with last page viewed by the visitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Missed Call</div>
  <div>Triggers when a new incoming call is missed on your tracked numbers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a visitor who made a call make an action on your website.</div>
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
          <title>Magnetis</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
