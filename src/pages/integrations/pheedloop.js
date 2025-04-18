import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PheedLoop"
      description="Live, Virtual, Hybrid Event Management Software"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pheedloop.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PheedLoop Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(13, 128, 253, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Live, Virtual, Hybrid Event Management Software</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers when a new Attendee is created for a specific event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Attendee</div>
  <div>Triggers when an existing Attendee is updated for a specific event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Attendee</div>
  <div>Triggers when an Attendee is deleted/removed from your chosen event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when a new registration is created for your chosen event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Purchase</div>
  <div>Triggers when a new ticket is purchased for your chosen event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Attendee</div>
  <div>Creates an Attendee for the specified event. If an existing Attendee is using the email specified in this action, then the existing Attendee will be updated with the fields used here (so this Create can also act like an Update).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Attendee</div>
  <div>Deletes/removes the specified Attendee from the chosen event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Attendee</div>
  <div>Updates an existing Attendee that is part of your Organization.</div>
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
          <title>PheedLoop</title>
          <meta name="description" content="Live, Virtual, Hybrid Event Management Software" />
        </>
      ),
    },
  };
}
