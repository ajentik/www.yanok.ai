import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SuperOffice CRM"
      description={`SuperOffice CRM software helps businesses collaborate internally and improve their sales, marketing and service processes.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/superofficecrm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SuperOffice CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 83, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SuperOffice CRM software helps businesses collaborate internally and improve their sales, marketing and service processes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Changed</div>
  <div>Triggers when an existing company is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Changed</div>
  <div>Triggers when an existing document is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a new document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Changed</div>
  <div>Triggers when an existing contact is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Changed</div>
  <div>Triggers when an existing project is modified in SuperOffice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Member</div>
  <div>Triggers when a new project member is added to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a new sale is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Changed</div>
  <div>Triggers when a sale is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new request is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates a new appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request Message Attachment</div>
  <div>Creates a new request message attachment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a new document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Member</div>
  <div>Creates a new project member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Project Member</div>
  <div>Remove a project member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sale</div>
  <div>Creates a new sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request</div>
  <div>Creates a new request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request Message</div>
  <div>Creates a new message for an existing request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update an existing company content.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Document Content</div>
  <div>Update an existing document content.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update an existing contact content.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Request</div>
  <div>Update an existing request content.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds a company based on id, name, number, phone, e-mail, or URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact based on id, e-mail, phone number, URL, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project based on id, name, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sale</div>
  <div>Finds a sale by id, title, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Request</div>
  <div>Finds a request by id, title, author, or contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Finds a company based on id, name, number, phone, e-mail, or URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a contact based on id, e-mail, phone number, URL, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project based on id, name, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create sale</div>
  <div>Finds a sale by id, title, or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Request</div>
  <div>Finds a request by id, title, author, or contact.</div>
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
          <title>SuperOffice CRM</title>
          <meta name="description" content={`SuperOffice CRM software helps businesses collaborate internally and improve their sales, marketing and service processes.`} />
        </>
      ),
    },
  };
}
