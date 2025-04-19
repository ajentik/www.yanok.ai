import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trustmary"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trustmary.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trustmary Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(13, 59, 112, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trustmary helps you gather social proof and use it on your website to generate more leads. Collect NPS, video and text reviews from your customers. Use the social proof you have gathered in different ways on your website.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Survey Answer</div>
  <div>Triggers when a new survey answer is completed or when an incomplete answer does not progress for 15 minutes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Survey Answer Completed</div>
  <div>Triggers when a new survey answer is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Automation for Contact</div>
  <div>Triggers an Automation for a existing Contact</div>
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
          <title>Trustmary</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
