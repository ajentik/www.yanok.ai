import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BayEngage"
      description={`BayEngage is a customer engagement platform that helps businesses of all sizes and types scale and automate their marketing efforts.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bayengage-email-marketing-automa.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BayEngage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 193, 111, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BayEngage is a customer engagement platform that helps businesses of all sizes and types scale and automate their marketing efforts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Subscribed</div>
  <div>Triggers when a customer Subscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Unsubscribed</div>
  <div>Triggers when a customer Unsubscribes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Subscribed</div>
  <div>When an customer subscribes with his email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Search</div>
  <div>When an customer searches with his email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email UnSubscribed</div>
  <div>Changes the customers email subscription status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Search</div>
  <div>When an customer searches with his phone</div>
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
          <title>BayEngage</title>
          <meta name="description" content={`BayEngage is a customer engagement platform that helps businesses of all sizes and types scale and automate their marketing efforts.`} />
        </>
      ),
    },
  };
}
