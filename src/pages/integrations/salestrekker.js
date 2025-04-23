import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Salestrekker"
      description={`Salestrekker is CRM software for finance professionals.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salestrekker.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Salestrekker Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 150, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Salestrekker is CRM software for finance professionals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new Deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Due Date</div>
  <div>Triggers when the deal changes due date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document in Deal</div>
  <div>Triggers when a new document is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Requested Documents</div>
  <div>Triggers when new documents are requested .</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Created Document</div>
  <div>Triggers when a new document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Signed Document</div>
  <div>Triggers when a new document is signed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Changes Status</div>
  <div>Triggers when a Deal changes status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new Note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Changes Stage</div>
  <div>Triggers when a Deal changes stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a Task is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Complete Task</div>
  <div>Completes the Task in Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Contact</div>
  <div>Creates a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Deal Note</div>
  <div>Creates a new Note in Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates the Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Deal</div>
  <div>Creates a new Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Note</div>
  <div>Creates a Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload New Document</div>
  <div>Uploads a new document.</div>
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
          <title>Salestrekker</title>
          <meta name="description" content={`Salestrekker is CRM software for finance professionals.`} />
        </>
      ),
    },
  };
}
