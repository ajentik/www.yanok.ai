import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TeamUp"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teamup.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TeamUp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(237, 16, 98, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TeamUp manages fitness businesses around the world. This integration is for businesses only.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Class Attendee Checked Off</div>
  <div>Triggers when a class attendee is marked as attended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Registration</div>
  <div>Triggers when a customer is registered for a class.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Attendee Late Cancelled</div>
  <div>Triggers when a customer is late cancelled from a class.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Attendee No-Showed</div>
  <div>Triggers when an attendee is marked as no showed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Attendee Removed</div>
  <div>Triggers when a customer is removed from a class normally (as opposed to a late cancellation).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Session Ended</div>
  <div>Triggers when a course session ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Membership Cancelled</div>
  <div>Triggers when a customer membership is cancelled. In other words, this is when a user clicks the "cancel" button for a recurring membership. The Customer Membership Ended trigger will be sent when the expiration date is reached.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Membership Completed</div>
  <div>Triggers when a pack customer membership is complete, which is when the last usage has been used. This triggers as soon as the customer books into the class.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Membership Created</div>
  <div>Triggers when a customer membership is created, which can be done via the business dashboard or when a customer purchases a membership. This includes upgrades, downgrades, and renewals.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Membership Ended</div>
  <div>Triggers when a customer membership for a recurring or prepaid plan ends due to the expiration date being reached. For packs, this triggers on the pack\'s expiration date or the date of the last class booked using the pack, whichever comes first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Membership Started</div>
  <div>Triggers when a customer membership starts. If a customer membership is added to a customer with a start date in the distant past, this trigger will not process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class or Appointment Ended</div>
  <div>Triggers when a class or appointment ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Referral Confirmed</div>
  <div>Triggers when a referral is confirmed by the business.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Referral Created</div>
  <div>Triggers when a referral is created. Meaning, when one customer signs up using another customer\'s referral code or the business manually marked a customer as being referred by a different customer.</div>
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
          <title>TeamUp</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
