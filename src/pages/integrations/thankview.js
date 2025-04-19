import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ThankView"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/thankview.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ThankView Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(10, 36, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ThankView is a donor management platform for creating and sharing personalized videos through email and text.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a new reply is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">ThankView Sent</div>
  <div>Triggers when a new ThankView is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">ThankView Watched</div>
  <div>Triggers when a ThankView is watched all the way through.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Video</div>
  <div>Triggers when a new video is uploaded to ThankView.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to a Campaign</div>
  <div>Adds a Recipient to a Campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Recipient to a List</div>
  <div>Adds a recipient to a list in ThankView</div>
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
          <title>ThankView</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
