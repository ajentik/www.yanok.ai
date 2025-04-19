import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Autopilot Journeys"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/autopilot.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Autopilot Journeys Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 218, 184, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Autopilot Journeys is visual marketing software for automating customer journeys, to help companies acquire and nurture leads through email, web, SMS and direct mail.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added</div>
  <div>Triggers when a contact is newly added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to List</div>
  <div>Triggers when a contact is newly added to list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Removed From List</div>
  <div>Triggers when a contact is removed from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribes</div>
  <div>Triggers when a contact unsubscribes from Autopilot.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to List</div>
  <div>Adds a new contact and adds them to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Adds a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Deletes an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribes contact from all emails.</div>
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
          <title>Autopilot Journeys</title>
        </>
      ),
    },
  };
}
