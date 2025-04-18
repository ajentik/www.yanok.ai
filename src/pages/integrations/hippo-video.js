import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hippo Video"
      description="Hippo Video is a cloud-based Video Marketing Platform (VMP) for marketing and sales teams to take ownership of their video marketing funnel."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hippo-video.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hippo Video Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 122, 88, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hippo Video is a cloud-based Video Marketing Platform (VMP) for marketing and sales teams to take ownership of their video marketing funnel.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Annotation Clicked</div>
  <div>Triggers when ever a visitor clicks the annotation in a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call to Action Clicked</div>
  <div>Triggers when ever a visitor clicks the call to action in a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Generated</div>
  <div>Triggers when ever a video generates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Watched</div>
  <div>Triggers whenever a visitor watches a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Salespage Call to Action Clicked</div>
  <div>Triggers when ever a visitor clicks the call to action in a salespage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Email Opened</div>
  <div>Triggers when ever a contact opens a video email.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Personalized Video</div>
  <div>Send personalized video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Video</div>
  <div>Uploads a Video from a URL.</div>
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
          <title>Hippo Video</title>
          <meta name="description" content="Hippo Video is a cloud-based Video Marketing Platform (VMP) for marketing and sales teams to take ownership of their video marketing funnel." />
        </>
      ),
    },
  };
}
