import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pupsai"
      description={`Pupsai Platform allows you to provide Consistent 24/7 Customer Care, Marketing and Sales`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pupsai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pupsai Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(226, 178, 121, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pupsai Platform allows you to provide Consistent 24/7 Customer Care, Marketing and Sales</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Form Response</div>
  <div>Triggers when a new response is received from a form is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Canned Message</div>
  <div>Add a Canned Message so that your team may re-use frequent responses in chats with customers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Frequently Asked Question</div>
  <div>Creates a Frequently Asked Question in Pupsai so that your virtual assistant may respond to queries from your customers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product or Service</div>
  <div>Adds a new Product or Service for Pupsai to share and sell to customers</div>
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
          <title>Pupsai</title>
          <meta name="description" content={`Pupsai Platform allows you to provide Consistent 24/7 Customer Care, Marketing and Sales`} />
        </>
      ),
    },
  };
}
