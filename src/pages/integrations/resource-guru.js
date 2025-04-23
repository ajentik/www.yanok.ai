import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Resource Guru"
      description={`The fast, simple way to schedule people, equipment and other resources online.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/resource-guru.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Resource Guru Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(61, 41, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The fast, simple way to schedule people, equipment and other resources online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Booking</div>
  <div>Triggers when a new booking is created and/or a booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Client</div>
  <div>Triggers when a new client is created and/or a client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Time Off Event</div>
  <div>Triggers when a time off event is created and/or a time off event is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Project</div>
  <div>Triggers when a new project is created and/or when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Resource</div>
  <div>Triggers when a new resource is created and/or when a resource is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a new booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Resource</div>
  <div>Creates a new resource.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Off Event</div>
  <div>Creates a new time off event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Booking</div>
  <div>Updates an existing booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Updates an existing client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Resource</div>
  <div>Updates an existing resource.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time Off Event</div>
  <div>Updates a time off event.</div>
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
          <title>Resource Guru</title>
          <meta name="description" content={`The fast, simple way to schedule people, equipment and other resources online.`} />
        </>
      ),
    },
  };
}
