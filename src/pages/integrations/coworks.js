import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coworks"
      description={`Coworks is a coworking management platform solution for automating running a coworking space.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coworks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coworks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 149, 149, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coworks is a coworking management platform solution for automating running a coworking space.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Cancelled</div>
  <div>Triggers when a booking is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Updated</div>
  <div>Triggers when a booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CRM Entry Updated</div>
  <div>Triggers when a CRM Entry is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Updated</div>
  <div>Triggers when an event is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when a lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Deactivate</div>
  <div>Triggers when a member is deactivated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Updated</div>
  <div>Triggers when a new member is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Entry</div>
  <div>Triggers when a new CRM entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>This will allow you to create a lead in the Coworks Leads tab.</div>
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
          <title>Coworks</title>
          <meta name="description" content={`Coworks is a coworking management platform solution for automating running a coworking space.`} />
        </>
      ),
    },
  };
}
