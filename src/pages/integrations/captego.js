import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Captego"
      description={`Captego is a platform with which you can easily create Inspections and reports.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/captego.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Captego Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 210, 220, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Captego is a platform with which you can easily create Inspections and reports.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Data Form Values Changed</div>
  <div>Triggers when data form values are changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">PDF Has Been Generated</div>
  <div>Triggers when a new PDF has been generated on any inspection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registration Created/Updated</div>
  <div>Triggers when a registration is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Report</div>
  <div>Create a custom report based on inspection and custom report template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Inspection</div>
  <div>Creates a new inspection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Inspection Data Form Values</div>
  <div>Set data form values on an existing inspection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Registration to Inspection</div>
  <div>Add a registration to an existing inspection together with registration data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Registration Drawing to Inspection</div>
  <div>Add a registration drawing to an existing inspection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Access Permissions to Inspection</div>
  <div>Add access permissions to an inspection for a specific user. NOTE: Existing access permissions cannot be downgraded! To downgrade you must remove existing access permissions before adding.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Access Permissions From Inspection</div>
  <div>Remove an user’s access permissions from an inspection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Registration Drawing to Project</div>
  <div>Add a registration drawing to an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Inspection Template Status Labels</div>
  <div>Get list of status labels defined on inspection template</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Inspection Template Categories</div>
  <div>Get list of categories defined on inspection template</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project Registration Drawings</div>
  <div>Get list of registration drawings defined on project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User ID by Email</div>
  <div>Search for a user by email to get the ID.</div>
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
          <title>Captego</title>
          <meta name="description" content={`Captego is a platform with which you can easily create Inspections and reports.`} />
        </>
      ),
    },
  };
}
