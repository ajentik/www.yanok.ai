import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PreciseFP"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/precisefp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PreciseFP Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(123, 168, 53, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PreciseFP is a data management platform that helps with your data-gathering process and automates your administrative work.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client/Prospect</div>
  <div>Triggers when a Client or Prospect is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client/Prospect Deleted</div>
  <div>Triggers when a Client or Prospect is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client/Prospect Staged in Pipeline</div>
  <div>Triggers when a Client or Prospect is moved to a Pipeline Stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Engagement Completed</div>
  <div>Triggers when a client or prospect completes an form engagement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Engagement Created</div>
  <div>Triggers when a client or prospect is engaged with a form template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Engagement Opened</div>
  <div>Triggers when a client or prospect opens an form engagement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New PDF Engagement Completed</div>
  <div>Triggers when a Pdf Engagement is completed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New PDF Engagement Created</div>
  <div>Triggers when a new PDF engagement is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new client or prospect account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Form Engagement</div>
  <div>Engages a client or co-client with the desired form template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Finds a client or prospect account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account by Id</div>
  <div>Finds a client or prospect account by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Find or Create Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Find or Create Account</div>
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
          <title>PreciseFP</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
