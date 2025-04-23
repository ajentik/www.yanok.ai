import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Simple CRM"
      description={`Simple CRM is a team collaboration tool to unite company data in one place`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/simple-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Simple CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(213, 14, 33, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simple CRM is a team collaboration tool to unite company data in one place</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when an new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Linked Contact and Company</div>
  <div>Triggers when a link between a contact and a company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Interaction</div>
  <div>Triggers when a new interaction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Business Opportunity</div>
  <div>Triggers when a new interaction which type is "Sales" is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Support Ticket</div>
  <div>Triggers when a new interaction which is "Support" is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact/Company Link</div>
  <div>Creates a Link between a contact and a company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Interaction</div>
  <div>Creates an interaction</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a Company</div>
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
          <title>Simple CRM</title>
          <meta name="description" content={`Simple CRM is a team collaboration tool to unite company data in one place`} />
        </>
      ),
    },
  };
}
