import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Boulevard"
      description={`Boulevard is the first client experience platform purpose-built to accelerate sales and eliminate stress for self-care, appointment-based businesses.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boulevard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Boulevard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Boulevard is the first client experience platform purpose-built to accelerate sales and eliminate stress for self-care, appointment-based businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Cancelled</div>
  <div>Triggers when an appointment is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Completed</div>
  <div>Triggers when an appointment is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when an appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Rescheduled</div>
  <div>Triggers when an appointment is rescheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when an existing client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entity Tags Added</div>
  <div>New tags were added to a taggable entity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entity Tags Removed</div>
  <div>Tags were removed from a taggable entity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Completed</div>
  <div>Triggers when an order is closed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag</div>
  <div>Tag a client or appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client Note</div>
  <div>Creates a new client note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timeblock</div>
  <div>Creates a block of time on the calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Timeblock</div>
  <div>Deletes a block of time on the calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Appointment</div>
  <div>Updates an appointment note or state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Updates a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointment</div>
  <div>Finds an appointment by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Email</div>
  <div>Finds a client by their email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by External ID</div>
  <div>Finds a client by their external ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by ID</div>
  <div>Finds a client by their ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order by ID</div>
  <div>Finds an Order by it\'s ID.</div>
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
          <title>Boulevard</title>
          <meta name="description" content={`Boulevard is the first client experience platform purpose-built to accelerate sales and eliminate stress for self-care, appointment-based businesses.`} />
        </>
      ),
    },
  };
}
