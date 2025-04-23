import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="YouLi"
      description={`YouLi is a group travel management platform that combines itinerary management, room inventory management, deck plans, “no-code” website + booking pages to ensure everyone involved in your group trip or retreat is on the same page. Manage registrations, collect payments, collect legal forms, assign tasks and share documents all in one place.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/youli.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        YouLi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 118, 101, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">YouLi is a group travel management platform that combines itinerary management, room inventory management, deck plans, “no-code” website + booking pages to ensure everyone involved in your group trip or retreat is on the same page. Manage registrations, collect payments, collect legal forms, assign tasks and share documents all in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Payment on Trip</div>
  <div>Triggers when a traveler makes a payment on a trip.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment on Any Owned Trip</div>
  <div>Triggers when a traveler makes a payment on any of your Trip Pages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration on Trip</div>
  <div>Triggers when a traveler enters their email on your Trip Page and becomes "REGISTERED". Note that this also triggers if they change from Declined to Registered on their profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration on Any Owned Trip</div>
  <div>Triggers when a traveler enters their email on any of your Trip Pages and becomes "REGISTERED". Note that this also triggers if they change from Declined to Registered on their profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Response on Trip</div>
  <div>Triggers when a traveler responds to a task on a trip.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Response on Any Owned Trip</div>
  <div>Triggers when a traveler responds to a task on any of your Trip Pages.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Registration</div>
  <div>Add a new traveler registration (email) to your selected trip</div>
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
          <title>YouLi</title>
          <meta name="description" content={`YouLi is a group travel management platform that combines itinerary management, room inventory management, deck plans, “no-code” website + booking pages to ensure everyone involved in your group trip or retreat is on the same page. Manage registrations, collect payments, collect legal forms, assign tasks and share documents all in one place.`} />
        </>
      ),
    },
  };
}
