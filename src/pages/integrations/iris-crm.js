import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="IRIS CRM"
      description={`IRIS CRM is a payments platform for tracking leads, merchants and calculating residuals for processors such as First Data, TSYS and WorldPay.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iris-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        IRIS CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 47, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">IRIS CRM is a payments platform for tracking leads, merchants and calculating residuals for processors such as First Data, TSYS and WorldPay.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Deleted</div>
  <div>Triggers when a lead is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead File Uploaded</div>
  <div>Triggers when a lead file is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Email Received</div>
  <div>Triggers when a lead email is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Note Added</div>
  <div>Triggers when a lead note is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Restored</div>
  <div>Triggers when a lead is restored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Status Updated</div>
  <div>Triggers when a lead\'s status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when a lead is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add File to Lead</div>
  <div>Add file to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Lead</div>
  <div>Add note to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign User(s) to Lead</div>
  <div>Assign user(s) to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead</div>
  <div>Create a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email to Lead</div>
  <div>Send email to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS to Lead</div>
  <div>Send SMS to a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Update an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead Status</div>
  <div>Update status of a lead.</div>
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
          <title>IRIS CRM</title>
          <meta name="description" content={`IRIS CRM is a payments platform for tracking leads, merchants and calculating residuals for processors such as First Data, TSYS and WorldPay.`} />
        </>
      ),
    },
  };
}
