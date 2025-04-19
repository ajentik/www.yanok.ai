import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Check Cherry"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/check-cherry.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Check Cherry Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(141, 25, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Check Cherry is the all-in-one platform to manage your Photobooth, Photography Studio, Mobile DJ business and more. Includes online booking, beautiful proposals, and a customer portal.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event Is Marked as Complete by Check Cherry</div>
  <div>Triggers when an event is marked as complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Is Added to Check Cherry</div>
  <div>Triggers when a new event comes into Check Cherry via self-booking, confirms a proposal, or is manually entered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Is Added to Check Cherry</div>
  <div>Triggers when a new lead is added via contact form, incomplete signup, or manually. Note that incomplete signups are delayed by approximately 20 minutes in order to allow time to finish checkout.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment Is Recorded in Check Cherry</div>
  <div>Triggers when a new payment is added to Check Cherry via a customer making a payment, making a deposit, or is manually entered by an admin.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Proposal Is Added to Check Cherry</div>
  <div>Triggers when a new proposal comes into Check Cherry via self-booking or is manually entered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Is Added to Check Cherry</div>
  <div>Triggers when a new user is added to Check Cherry via manual creation, sending an invitation, creating an event, or accepting a proposal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Is Updated in Check Cherry</div>
  <div>Triggers when an existing event is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Adds a new lead to your Check Cherry account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event or Proposal</div>
  <div>Finds an event currently in your Check Cherry account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds a lead currently in your Check Cherry account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment</div>
  <div>Find payments that have been applied to an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds users, including staff, customers, or admins.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Finds a lead currently in your Check Cherry account.</div>
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
          <title>Check Cherry</title>
        </>
      ),
    },
  };
}
