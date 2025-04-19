import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Outfield"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/outfield.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Outfield Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(85, 198, 220, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Outfield is an outside sales & marketing CRM that makes it easy to discover valuable insights about your market, track + verify team activity, and communicate effortlessly across all your devices</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created, i.e. either a place or a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when new activity is created, including check-ins, meetings, phone calls, notes, emails, text messages, completed tasks, and progressed deals.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created. The deal may contain an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incomplete Task</div>
  <div>Triggers when a new incomplete task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Activity</div>
  <div>Triggers when an activity is created or updated, including check-ins, meetings, notes, completed tasks, and progressed deals.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates an Activity including check-ins, meetings, phone calls, notes, emails, text messages and completed tasks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a Calendar Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal in your pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal With Order</div>
  <div>Creates a new deal with an order in your pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Incomplete Task</div>
  <div>Creates an Incomplete Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account (Or Optionally Create)</div>
  <div>Finds an Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Finds an Account.</div>
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
          <title>Outfield</title>
        </>
      ),
    },
  };
}
