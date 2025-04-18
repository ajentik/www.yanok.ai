import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="EV-comply"
      description="EV-comply has revolutionised the process of installing Electric Vehicle Charge Points for businesses throughout the UK & Europe."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ev-comply.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        EV-comply Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(14, 7, 51, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">EV-comply has revolutionised the process of installing Electric Vehicle Charge Points for businesses throughout the UK & Europe.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Status Changed</div>
  <div>Triggers when the status changes for a job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Submitted to DNO</div>
  <div>Triggers when the job is submitted to a DNO</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Created</div>
  <div>Triggers when a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Added</div>
  <div>Triggers when a new job is created in your EV-comply account</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer as New Lead</div>
  <div>Create a customer in your account and associate to a new lead</div>
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
          <title>EV-comply</title>
          <meta name="description" content="EV-comply has revolutionised the process of installing Electric Vehicle Charge Points for businesses throughout the UK & Europe." />
        </>
      ),
    },
  };
}
