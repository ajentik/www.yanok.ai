import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RSVPify"
      description={`RSVPify is a powerful, end-to-end event management and online ticketing platform.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rsvpify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RSVPify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(68, 40, 106, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RSVPify is a powerful, end-to-end event management and online ticketing platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Guest Checked-In</div>
  <div>Triggers when a guest is checked-in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Checked-Out</div>
  <div>Triggers when a guest is checked-out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Guest</div>
  <div>Triggers when a tag is added to a guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Guest</div>
  <div>Triggers when a tag is removed from a guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invitee Added</div>
  <div>Triggers when a new invitee is added to the invite list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Invitee</div>
  <div>Triggers when a tag is added to an invitee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From Invitee</div>
  <div>Triggers when a tag is removed from an invitee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration Received</div>
  <div>Triggers when a new registration is received.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Attendee</div>
  <div>Add a new attendee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to an Invitee Group</div>
  <div>Add a note to a specific invitee group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Registration</div>
  <div>Add a note to a specific registration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Guest Checked-In</div>
  <div>Mark a specific guest checked-in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Guest Checked-Out</div>
  <div>Mark a specific guest checked-out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Invitee Attending</div>
  <div>Mark a specific invitee attending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Invitee Not Attending</div>
  <div>Mark a specific invitee not attending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag on Guest</div>
  <div>Attach or remove a tag on a specific guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag on Invitee</div>
  <div>Attach or remove a tag on a specific invitee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Guest</div>
  <div>Finds an existing guest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invitee</div>
  <div>Finds an existing invitee.</div>
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
          <title>RSVPify</title>
          <meta name="description" content={`RSVPify is a powerful, end-to-end event management and online ticketing platform.`} />
        </>
      ),
    },
  };
}
