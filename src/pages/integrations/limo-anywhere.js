import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Limo Anywhere"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/limo-anywhere.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Limo Anywhere Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 67, 35, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Limo Anywhere is a mobile app platform in the limousine and livery industry, with over 4,000 happy customers across the globe.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new customer account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Finalized Invoice</div>
  <div>Triggers when an invoice is marked as \'FINALIZED\'.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paid Bill</div>
  <div>Triggers when a paid bill is created. Works for Affiliate and Agent bills.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Driver Pay Log</div>
  <div>Triggers when a new driver pay log is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is recorded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote Request</div>
  <div>Triggers when a new quote request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation</div>
  <div>Triggers when a new reservation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paid Reservation</div>
  <div>Triggers when the payment status of a trip is set to \'PAID\'. Works for reservations that are not on an invoice and are not set to be invoiced/direct billed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Account</div>
  <div>Triggers when an account is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Reservation</div>
  <div>Triggers when a reservation is updated.</div>
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
  <div class="font-semibold">Create Quote Request</div>
  <div>Creates a quote request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reservation</div>
  <div>Creates a reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Find an account by ID.</div>
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
          <title>Limo Anywhere</title>
        </>
      ),
    },
  };
}
