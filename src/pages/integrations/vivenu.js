import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="vivenu"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vivenu.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        vivenu Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">vivenu offers a unified platform to manage, market and analyze ticket sales.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Checkout Aborted</div>
  <div>Triggers when a checkout gets aborted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a customer gets created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a customer gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Created</div>
  <div>Triggers when an event gets created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Deleted</div>
  <div>Triggers when an event gets deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Updated</div>
  <div>Triggers when an event gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Approved</div>
  <div>Triggers when a purchase intent gets approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Cancelled</div>
  <div>Triggers when a purchase intent gets cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Completed</div>
  <div>Triggers when a purchase intent gets completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Created</div>
  <div>Triggers when a purchase intent gets created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Expired</div>
  <div>Triggers when a purchase intent expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Intent Rejected</div>
  <div>Triggers when a purchase intent gets rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Created</div>
  <div>Triggers when a ticket gets created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Updated</div>
  <div>Triggers when a ticket gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Canceled</div>
  <div>Triggers when a transaction gets canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Completed</div>
  <div>Triggers when a transaction gets completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Abort Checkout</div>
  <div>Abort a checkout.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Coupon</div>
  <div>Creates a new coupon.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Coupon</div>
  <div>Updates a coupon.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Account</div>
  <div>Creates a new customer account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Exchange Token</div>
  <div>Creates a new customer Exchange Token.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Updates an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Purchase Intent</div>
  <div>Cancels a purchase intent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Intent</div>
  <div>Creates a new purchase intent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Approval Status</div>
  <div>Sets approval status of a purchase intent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Free Ticket</div>
  <div>Creates free tickets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invalidate Ticket</div>
  <div>Invalidates a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Transaction</div>
  <div>Cancels a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Transaction</div>
  <div>Completes a transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Checkout</div>
  <div>Get a checkout.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Checkouts</div>
  <div>Searches for checkouts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Checkout Tickets</div>
  <div>Get all checkout tickets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Coupon</div>
  <div>Get a coupon by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Coupons</div>
  <div>Searches for coupons.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Customer</div>
  <div>Get a customer by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customers</div>
  <div>Searches for customers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Event</div>
  <div>Get an event by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Purchase Intent</div>
  <div>Get a purchase intent by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Purchase Intents</div>
  <div>Searches for purchase intents.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Ticket</div>
  <div>Get a ticket by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Tickets</div>
  <div>Searches for tickets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Transaction</div>
  <div>Get a transaction by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Transaction Tickets</div>
  <div>Get all transaction tickets.</div>
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
          <title>vivenu</title>
        </>
      ),
    },
  };
}
