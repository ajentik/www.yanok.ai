import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Novocall"
      description="Novocall is a callback app that make it easy for businesses communicate with their website visitors through calls and scheduling."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/novocall.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Novocall Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 86, 252, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Novocall is a callback app that make it easy for businesses communicate with their website visitors through calls and scheduling.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Appointment</div>
  <div>Triggers when a customer cancels an existing appointment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Failed Call</div>
  <div>Triggers when either the customer or the call rep misses the call. (Only after the call has ended)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Call</div>
  <div>Triggers when a customer makes a new request for a callback. (Only at the very start of the call)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Schedule</div>
  <div>Triggers when a customer makes a new appointment for a scheduled call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reschedule Appointment</div>
  <div>Triggers when a customer change an existing appointment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Successful Call</div>
  <div>Triggers when both customer &amp; call rep have picked up the call. (Only after the call has completed)</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Call</div>
  <div>Creates a call record</div>
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
          <title>Novocall</title>
          <meta name="description" content="Novocall is a callback app that make it easy for businesses communicate with their website visitors through calls and scheduling." />
        </>
      ),
    },
  };
}
