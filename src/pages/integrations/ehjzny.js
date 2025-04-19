import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Ehjzny"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ehjzny.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Ehjzny Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 159, 210, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ehjzny.com is your go-to app for scheduling services efficiently.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Started</div>
  <div>Triggers when an Appointment has started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Canceled</div>
  <div>Triggers when a Customer Cancels an upcoming appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new Appointment Request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduling Request</div>
  <div>Triggers when a new Scheduling Request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Scheduling Rejected</div>
  <div>Triggers when a Scheduling Request is rejected.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Email Invitation to Schedule</div>
  <div>Sends an email invitation to schedule a suitable date and time</div>
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
          <title>Ehjzny</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
