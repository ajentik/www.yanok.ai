import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SafetyCulture"
      description="SafetyCulture (formerly iAuditor) is a business platform to conduct inspections, capture issues, manage tasks, communicate clearly and train working teams."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/safetyculture.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SafetyCulture Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(162, 182, 58, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SafetyCulture (formerly iAuditor) is a business platform to conduct inspections, capture issues, manage tasks, communicate clearly and train working teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Action Created</div>
  <div>Triggers when an action is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Inspection Completed (Advanced)</div>
  <div>Triggers when any inspection is completed. Advanced provides additional fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Inspection Completed</div>
  <div>Triggers when any inspection is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inspection Completed (Advanced)</div>
  <div>Triggers when an inspection from a selected template is completed. Advanced provides additional fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inspection Completed</div>
  <div>Triggers when an inspection from a selected template is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Inspection Edit Link</div>
  <div>Creates a link that you can use to edit an inspection in iAuditor (web app and mobile app). Please note that the "view, edit" access level is required at a minimum to edit inspections.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Exported Inspection Report</div>
  <div>Gets an exported inspection report. Either a PDF or Word (.docx) file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Public Inspection Report Link</div>
  <div>Creates a link that you can use to view an inspection report without logging in to iAuditor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share Inspection</div>
  <div>Shares an inspection with users and/or groups in your organization. Please note that the "view, edit" access level is required at a minimum to share inspections.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Inspection</div>
  <div>Starts an inspection from a selected template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Inspection Report Export</div>
  <div>Starts exporting an inspection report to PDF or Word. We recommend that you create a "Delay" following this action to allow iAuditor enough time to export the inspection report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user in your organization by email.</div>
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
          <title>SafetyCulture</title>
          <meta name="description" content="SafetyCulture (formerly iAuditor) is a business platform to conduct inspections, capture issues, manage tasks, communicate clearly and train working teams." />
        </>
      ),
    },
  };
}
