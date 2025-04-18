import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Amilia"
      description="Whether you're just starting out or looking to scale, Amilia's Recreation Management Software helps you sell, manage, & grow your business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/amilia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Amilia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 145, 225, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Whether you\'re just starting out or looking to scale, Amilia\'s Recreation Management Software helps you sell, manage, & grow your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Membership Purchase</div>
  <div>Triggers when someone purchases a membership in the Amilia Store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Merchandise Sold</div>
  <div>Triggers when a person buys a piece of merchandise on the Amilia store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when there is a new registration for an activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Program</div>
  <div>Triggers when a new program is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Facility Booking</div>
  <div>Triggers when someone places a booking / reservation on a facility in the calendar, or through booking a private lesson, activity assigned to a location, or rental contract</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Admin Booking</div>
  <div>Create an Admin booking for a Location/Facility in Amilia.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account Information</div>
  <div>Find account information. This includes all of the members information, contacts, medical information, and more. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity Information</div>
  <div>Find activity information. This includes name &amp; I.D., time, date, and more. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Facility Information</div>
  <div>Get facility information. This includes name &amp; I.D., address, phone number, and more for each facility. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Membership Information</div>
  <div>Find membership information. This includes description, price, start/end date, and more. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person\'s Extra Questions</div>
  <div>Find a person\'s extra questions. This includes any extra questions you have added to your forms for a given person and program. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Program Information</div>
  <div>Find program information. This includes name &amp; I.D., start/end date, and more. Select the information you want/need for your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client Information</div>
  <div>Find client information. This includes account &amp; contact details, medical information, skills, and more. Select the information you want/need for your workflow.</div>
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
          <title>Amilia</title>
          <meta name="description" content="Whether you're just starting out or looking to scale, Amilia's Recreation Management Software helps you sell, manage, & grow your business." />
        </>
      ),
    },
  };
}
