import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trainerize"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trainerize.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trainerize Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 180, 3, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trainerize is a powerful personal training software to grow your business and reach more clients with online personal training, meal planning, in-app communication and workout tracking.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Auto-Renew Cancelled</div>
  <div>Triggers when a subscription\'s auto-renew is cancelled (but the subscription has not necessarily ended).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cardio Completed</div>
  <div>Triggers when a cardio is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Daily Nutrition Goal Hit</div>
  <div>Triggers when a daily nutrition goal is hit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Habit Completed</div>
  <div>Triggers when a habit is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when there\'s a new purchase.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product End</div>
  <div>Triggers when product ends (cancelled or expired).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Start</div>
  <div>Triggers on the start date of a purchased product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to a Client</div>
  <div>Triggers when a tag added to client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Client</div>
  <div>Triggers when a tag is removed from a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Weight Goal Hit</div>
  <div>Triggers when a weight goal is hit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workout Completed</div>
  <div>Triggers when a workout is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Reactivate Client</div>
  <div>Changes the status of a client to Activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Next Training Phase</div>
  <div>Queues up next training phase by copying from another client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add to Group</div>
  <div>Add existing client to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Client</div>
  <div>Apply a custom client tag to an existing client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign To</div>
  <div>Assigns a client to a trainer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach Meal Plan PDF</div>
  <div>Attaches a Meal Plan PDF to a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Copy Master Program to Client</div>
  <div>Copies master program to client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Client V2</div>
  <div>Creates a new client or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deactivate Client</div>
  <div>Changes the status of a client to Deactivated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Client</div>
  <div>Customize which tag to remove.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Groups</div>
  <div>Removes a client from groups.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message in Trainerize</div>
  <div>Sends a message to a client in Trainerize.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Addon Program [Beta]</div>
  <div>Subscribes a client to one or multiple addon programs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Main Program</div>
  <div>Subscribes a client to a main program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe From Programs</div>
  <div>Unsubscribes a client from programs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Attachment</div>
  <div>Attach a file to a client\'s profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Locate a client by email.</div>
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
          <title>Trainerize</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
