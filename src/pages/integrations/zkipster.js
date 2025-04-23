import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="zkipster"
      description={`Event management software for the world’s best events. Trusted by global brands and organizations for custom online invitations, guest check-in, and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zkipster.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        zkipster Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Event management software for the world’s best events. Trusted by global brands and organizations for custom online invitations, guest check-in, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Guest Status Changed</div>
  <div>Triggers when the status of a guest changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is added to your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Guest</div>
  <div>Triggers when a new guest is added manually to a guest list in an event from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Event</div>
  <div>Triggers when an event from your zkipster account gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Guest</div>
  <div>Triggers when a guest is updated in a guest list of your zkipster account (including check in).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Guest</div>
  <div>Creates a new guest in the given guest list from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Guest List</div>
  <div>Creates a new guest list in an event from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Event</div>
  <div>Creates a new event in your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Event</div>
  <div>Updates an event from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Guest</div>
  <div>Updates a guest in the given guest list from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Event</div>
  <div>Gets an event from your zkipster account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Guest</div>
  <div>Gets a guest from a guest list in your zkipster account.</div>
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
          <title>zkipster</title>
          <meta name="description" content={`Event management software for the world’s best events. Trusted by global brands and organizations for custom online invitations, guest check-in, and more.`} />
        </>
      ),
    },
  };
}
