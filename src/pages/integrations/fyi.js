import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FYI"
      description="FYI is a document management service for professionals"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/fyi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FYI Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 79, 117, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FYI is a document management service for professionals</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Create or Update a Client in FYI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Create a Document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client Group</div>
  <div>Create or Update a Group for Clients in FYI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Job</div>
  <div>Create or Update a Job in FYI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Web Link</div>
  <div>Create a Web Link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create File Note</div>
  <div>Create a File Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Task</div>
  <div>Create or Update a Task in FYI.</div>
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
          <title>FYI</title>
          <meta name="description" content="FYI is a document management service for professionals" />
        </>
      ),
    },
  };
}
