import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Aiva"
      description="Aiva is a design focused website campaign tool that allows you to engage your website visitors and inspire action with no coding required."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aiva.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Aiva Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 221, 93, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aiva is a design focused website campaign tool that allows you to engage your website visitors and inspire action with no coding required.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Click Through</div>
  <div>Triggers when a user is successfully redirected to a new link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Submission</div>
  <div>Triggers when a new text or email submission is sent from a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Response</div>
  <div>Triggers when a user submits a response by interacting with a button.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Social Engagement</div>
  <div>Triggers when engagement via social media has been detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video View</div>
  <div>Triggers when engagement with a video is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Multi Submission</div>
  <div>Triggers when a visitor submits multiple pieces of information on the same tile or across multiple tiles.</div>
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
          <title>Aiva</title>
          <meta name="description" content="Aiva is a design focused website campaign tool that allows you to engage your website visitors and inspire action with no coding required." />
        </>
      ),
    },
  };
}
