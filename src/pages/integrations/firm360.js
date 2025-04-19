import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Firm360"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/firm360.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Firm360 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 148, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Firm360 is an all-in-one practice management system for accounting firms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Added or Updated</div>
  <div>Triggers when client is added or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when project is reassigned or status is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact for the given Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project for the given Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Recurring Project</div>
  <div>Creates a new recurring project for the given Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>Search for client by name or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for Contact by email for the specified Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project</div>
  <div>Search for Project in a certain Client by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Recurring Project</div>
  <div>Search for Recurring Project in a certain Client by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds or creates a specific find client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds or creates a specific find contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds or creates a specific find project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Recurring Project</div>
  <div>Finds or creates a specific find project recurring.</div>
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
          <title>Firm360</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
