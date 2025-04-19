import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hire Aiva"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hire-aiva.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hire Aiva Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 76, 74, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aiva helps real estate agents convert online leads</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Booked</div>
  <div>Triggers when an appointment is booked with a lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Marked Interested</div>
  <div>Triggers when a lead is marked as interested</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Marked Not Interested</div>
  <div>Triggers when a lead is marked as not interested</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Marked Unresponsive</div>
  <div>Triggers when a lead is marked as unresponsive</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Landline Lead</div>
  <div>Triggers when a lead comes in with a landline number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Received</div>
  <div>Triggers when a new lead is received</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Members</div>
  <div>List of team members.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Scripts</div>
  <div>List of scripts.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Creates a new lead for processing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Contact</div>
  <div>Stops contact with a lead</div>
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
          <title>Hire Aiva</title>
        </>
      ),
    },
  };
}
