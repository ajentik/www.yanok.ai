import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zomentum"
      description="Zomentum is a sales funnel management tool built for MSPs"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zomentum.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zomentum Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 112, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zomentum is a sales funnel management tool built for MSPs</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when a client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is update.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Approved</div>
  <div>Triggers when to get items details for the approved document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Updated</div>
  <div>Triggers when Document is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Created</div>
  <div>Triggers when a new Opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Updated</div>
  <div>Triggers when Opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Users</div>
  <div>Triggers when fetch owner while creating client.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Create or Update Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create or Update Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Opportunity</div>
  <div>Create or Update Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Company</div>
  <div>Find Client Company by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Contact</div>
  <div>Find Client Contact by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">GetOpportunity</div>
  <div>Find Opportunity by id</div>
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
          <title>Zomentum</title>
          <meta name="description" content="Zomentum is a sales funnel management tool built for MSPs" />
        </>
      ),
    },
  };
}
