import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Content Snare"
      description="Content Snare is a tool that helps collect content and files from clients on time without email"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/content-snare.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Content Snare Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(122, 120, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Content Snare is a tool that helps collect content and files from clients on time without email</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">All Fields Completed</div>
  <div>Triggers when all fields are completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when the client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when the client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Field Approved</div>
  <div>Triggers when the field is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Field Completed</div>
  <div>Triggers when the field is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Field Rejected</div>
  <div>Triggers when the field is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Completed</div>
  <div>Triggers when the request is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Created</div>
  <div>Triggers when the request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Published</div>
  <div>Triggers when the request is published.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request</div>
  <div>Creates a new request.</div>
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
          <title>Content Snare</title>
          <meta name="description" content="Content Snare is a tool that helps collect content and files from clients on time without email" />
        </>
      ),
    },
  };
}
