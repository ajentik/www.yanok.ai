import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="crmgrow"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crmgrow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        crmgrow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">crmgrow is a CRM platform with various tracking abilities such as video, screen, and user activity tracking.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add a Contact into CRMGrow account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Add a note to contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag</div>
  <div>Add a new label</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Automation</div>
  <div>Assign automation to a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Followup</div>
  <div>It creates follow up to contact in CRMGrow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Image</div>
  <div>Send image to a prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send PDF</div>
  <div>Send PDF to a prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Video</div>
  <div>Send Video to a prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a Contact into CRMGrow account.</div>
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
          <title>crmgrow</title>
        </>
      ),
    },
  };
}
