import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TDox"
      description={`TDox turns business processes and paper forms in mobile apps. The designer allows creating forms, which are filled in using the mobile app.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tdox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TDox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 166, 207, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TDox turns business processes and paper forms in mobile apps. The designer allows creating forms, which are filled in using the mobile app.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Agenda Models</div>
  <div>Triggers when a user needs the list of models that can be used in agenda.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Documents</div>
  <div>Triggers when a document is created or updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customers</div>
  <div>Insert new customers, if not existing, or updates them, if altready existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates an agenda event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Events</div>
  <div>Deletes the events matching filter criteria</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">DisableCustomers</div>
  <div>Disables customers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document PDF</div>
  <div>Gets the PDF of the document</div>
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
          <title>TDox</title>
          <meta name="description" content={`TDox turns business processes and paper forms in mobile apps. The designer allows creating forms, which are filled in using the mobile app.`} />
        </>
      ),
    },
  };
}
