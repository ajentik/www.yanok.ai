import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Appointedd"
      description={`Appointedd is the world’s smartest online booking system for all your business needs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/appointedd.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Appointedd Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(246, 101, 3, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Appointedd is the world’s smartest online booking system for all your business needs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Booking</div>
  <div>Triggers when an existing single or entire group booking is cancelled in one of your Appointedd organisations. This does not trigger when a single customer cancels from an existing group booking and does not contain the details of the customer that cancelled on the booking. Use the "Cancelled Participant" trigger instead if you require this.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Booking Participant</div>
  <div>Triggers when a customer cancels an existing single or group booking in one of your Appointedd organisations. This contains the details of the customer that cancelled and will not trigger if the cancelled booking was empty. If you only require the details of the cancelled booking or want to capture the cancellation of empty bookings use the "Cancelled Booking" trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Customer</div>
  <div>Triggers when an existing customer is deleted in one of your Appointedd organisations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created in one of your Appointedd organisations. This only contains the details of the booking but not the customer that created the booking. Use the "New Booking Participant" trigger if you require the customer\'s details as well.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created in one of your Appointedd organisations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking Participant</div>
  <div>Triggers when a new customer books in to a new booking or an existing group booking in one of your Appointedd organisations. This contains the customer\'s details and will only trigger if the new booking contains a customer. It will not trigger if an empty booking is created. If you only require the details of the new booking or want to capture new bookings that are empty use the "New Booking" trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggers when an existing customer is updated in your Appointedd organisation.</div>
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
          <title>Appointedd</title>
          <meta name="description" content={`Appointedd is the world’s smartest online booking system for all your business needs.`} />
        </>
      ),
    },
  };
}
