import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Calendesk"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/calendesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Calendesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(127, 12, 205, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Calendesk helps to accept bookings from customers, handle their payments, contact them and generate a landing page for them.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Created</div>
  <div>Triggers when a booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Deleted</div>
  <div>Triggers when a booking is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Paid</div>
  <div>Triggers when a booking is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Updated</div>
  <div>Triggers when a booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Created</div>
  <div>Triggers when a new newsletter record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Deleted</div>
  <div>Triggers when a newsletter record is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Verified</div>
  <div>Triggers when a newsletter record is verified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Store Payment Transaction Created</div>
  <div>Triggers when a new store payment transaction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deleted</div>
  <div>Triggers when a user is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Subscription Canceled</div>
  <div>Triggers when a user subscription is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Subscription Created</div>
  <div>Triggers when a new user subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Subscription Deleted</div>
  <div>Triggers when a user subscription is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Subscription Payment Transaction Created</div>
  <div>Triggers when a new user subscription payment transaction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated.</div>
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
          <title>Calendesk</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
