import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PlanOK GCI"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/planok-gci.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PlanOK GCI Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 16, 34, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GCI is a real estate CRM to manage the complete sales cycle of real estate projects.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Business</div>
  <div>Triggers when a new business is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Canceled Promises</div>
  <div>Triggers when a new canceled promise is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact A</div>
  <div>Triggers when a new contact is detected to the centralizer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact B</div>
  <div>Triggers when a new contact with email is detected to the centralizer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact C</div>
  <div>Triggers when a new contact with name, project and mobile phone is detected to the centralizer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Current Account</div>
  <div>Triggers when a new current account is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Promise (Deprecated)</div>
  <div>Triggers when a new promise is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Promise Version 2</div>
  <div>Triggers when a new promise is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new proyect is added in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is detected in GCI</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resciliation</div>
  <div>Triggers when a new resciliation is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation</div>
  <div>Triggers when a new reservation is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation With Medium</div>
  <div>Triggers when a new reservation is detected in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Writing</div>
  <div>Triggers when a new writing is detected in GCI.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Tracking</div>
  <div>Create tracking in GCI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Centralizer</div>
  <div>Updated centralizer in GCI.</div>
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
          <title>PlanOK GCI</title>
        </>
      ),
    },
  };
}
