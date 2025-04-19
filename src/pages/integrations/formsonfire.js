import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Forms On Fire"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/formsonfire.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Forms On Fire Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 112, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Forms On Fire is an enterprise-grade mobile forms platform. Capture rich data on a mobile device including pictures, GPS, audio/video, signatures and more to submit to a secure data storage vault and integrate with hundreds of external systems.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Form Entry</div>
  <div>Triggers when a new form is submitted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company (Vendor Use Only)</div>
  <div>Creates a new Company account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task With Form Answers</div>
  <div>Creates a Task with Form Answers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Data Source</div>
  <div>Updates an existing data source.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Environment</div>
  <div>Creates a new Enterprise Toolkit account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Notification</div>
  <div>Sends a user a notification in the Forms On Fire mobile forms app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
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
          <title>Forms On Fire</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
