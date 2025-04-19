import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CallPaaS"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/callpaas.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CallPaaS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 173, 239, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CallPaaS is a cloud-based telephony solution for businesses of all sizes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Address</div>
  <div>Triggers when a new address is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Agent</div>
  <div>Triggers when a new agent is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking</div>
  <div>Triggers when a new booking is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Brand</div>
  <div>Triggers when a new brand is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancellation</div>
  <div>Triggers when a new cancellation is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Name</div>
  <div>Triggers when a new company name is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Consultant Name</div>
  <div>Triggers when a new consultant name is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Country</div>
  <div>Triggers when a new country is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer</div>
  <div>Triggers when a new customer is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Date</div>
  <div>Triggers when a new date is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Department</div>
  <div>Triggers when a new department is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Duration</div>
  <div>Triggers when a new duration is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email</div>
  <div>Triggers when a new email is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice</div>
  <div>Triggers when a new invoice is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Location</div>
  <div>Triggers when a new location is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message</div>
  <div>Triggers when a new message is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mobile Number</div>
  <div>Triggers when a new mobile number is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Name</div>
  <div>Triggers when a new name is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order</div>
  <div>Triggers when a new order is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment</div>
  <div>Triggers when a new payment is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Number</div>
  <div>Triggers when a new phone number is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product</div>
  <div>Triggers when a new product is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Age</div>
  <div>Triggers when a new product age is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Type</div>
  <div>Triggers when a new product type is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quotation</div>
  <div>Triggers when a new quotation is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Serial Number</div>
  <div>Triggers when a new serial number is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Service</div>
  <div>Triggers when a new service is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">State</div>
  <div>Triggers when a new state is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Statement</div>
  <div>Triggers when a new statement is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suburb</div>
  <div>Triggers when a new suburb is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Terms Conditions</div>
  <div>Triggers when a new terms conditions is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time</div>
  <div>Triggers when a new time is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Slot</div>
  <div>Triggers when a new timeslot is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Total Order</div>
  <div>Triggers when a new total order is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Zipcode</div>
  <div>Triggers when a new zipcode is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>CallPaaS</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
