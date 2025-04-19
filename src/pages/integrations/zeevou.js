import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zeevou"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zeevou.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zeevou Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 35, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zeevou is a Property Management System and Channel Manager that automates almost all areas of your short term rental business, optimises processes, and minimises human error.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Updated</div>
  <div>Triggers when a booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Created</div>
  <div>Triggers when a new booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Created</div>
  <div>Triggers when a new guest is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Created</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Issue Created</div>
  <div>Triggers when a new issue is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Notification Created</div>
  <div>Triggers when a new notification is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rate Created</div>
  <div>Triggers when a new rate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Staff Profile Created</div>
  <div>Triggers when a new staff is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Removed</div>
  <div>Triggers when a booking is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Removed</div>
  <div>Triggers when a guest is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Removed</div>
  <div>Triggers when an invoice is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Staff Profile Removed</div>
  <div>Triggers when a staff is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Removed</div>
  <div>Triggers when a task is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Updated</div>
  <div>Triggers when a guest is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Updated</div>
  <div>Triggers when an invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Notification Updated</div>
  <div>Triggers when a notification is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Staff Profile Updated</div>
  <div>Triggers when a staff is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Block Date</div>
  <div>Creates a Block Date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a Booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Guest</div>
  <div>Creates a Guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Unit Guest</div>
  <div>Finds a unit guest.</div>
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
          <title>Zeevou</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
