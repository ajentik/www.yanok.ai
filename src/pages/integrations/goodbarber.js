import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GoodBarber"
      description="GoodBarber is a no-code app building platform to create iOS and Android native apps."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/goodbarber.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GoodBarber Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(78, 177, 216, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GoodBarber is a no-code app building platform to create iOS and Android native apps.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Active Subscriber</div>
  <div>Triggers when a prospect subscribes to a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment Booking</div>
  <div>Triggers when a new appointment is booked by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expired Subscriber</div>
  <div>Triggers when an active subscription expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect</div>
  <div>Triggers when a new prospect signs up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Group</div>
  <div>Adds a user to an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Internal Subscription</div>
  <div>Creates an internal subscription for a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Push Notification</div>
  <div>Sends a push notification by platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From Group</div>
  <div>Removes a user from an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note for Active Subscriber</div>
  <div>Updates an internal note for an active subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note for Expired Subscriber</div>
  <div>Updates an internal note for an expired subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note for Prospect</div>
  <div>Updates an internal note for a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Expiration Date for Internal Subscription</div>
  <div>Updates the expiration date of an internal subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Active Subscriber</div>
  <div>Finds an active subscriber by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Expired Subscriber</div>
  <div>Finds an expired subscriber by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Group</div>
  <div>Finds a group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Prospect</div>
  <div>Finds a prospect by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>Finds a user by login.</div>
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
          <title>GoodBarber</title>
          <meta name="description" content="GoodBarber is a no-code app building platform to create iOS and Android native apps." />
        </>
      ),
    },
  };
}
