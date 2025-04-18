import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AdviserLogic Fact Finder"
      description="Fact Finder is an application to either fetch, create, or update Fact Finder data as per current AdviserLogic schema"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/morningstar-adl-client-onboardin.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AdviserLogic Fact Finder Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Fact Finder is an application to either fetch, create, or update Fact Finder data as per current AdviserLogic schema</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Basic Information</div>
  <div>Get Basic Information of client saved under AdviserLogic application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Contact Information</div>
  <div>Get contact information of client saved under Fact Finder-Contact Details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Dependant Information</div>
  <div>To get dependant details of client saved under AdviserLogic</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Entities Details</div>
  <div>Get entities details of client saved under AdviserLogic application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Expense Details</div>
  <div>Get expense details of client saved under AdviserLogic Application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Health Information</div>
  <div>To get health information of client saved under AdviserLogic</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Income Detail of Client</div>
  <div>Get Income information of client saved under Fact Finder-Income</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client Superfund Details</div>
  <div>Get Superfund details of client saved under Superannuation section of AdviserLogic</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Basic Information</div>
  <div>Add/Edit Basic information of client in AdviserLogic Application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Dependants Details</div>
  <div>To add Dependants under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Entities</div>
  <div>To add Entities under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Expense</div>
  <div>To add Expense under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Health Details</div>
  <div>Add Health Details under Fact Finder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Income</div>
  <div>To add Income under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Insurance</div>
  <div>To add Insurance under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Superfund</div>
  <div>To add Superfund under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Partner Basic Information</div>
  <div>Add/Edit Basic information of partner in AdviserLogic Application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact Details</div>
  <div>Add Contact Details of Client and Partner</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit/Update Client Basic Information</div>
  <div>Edit/Update Basic Information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Client Contact Details</div>
  <div>Edit Contact Details of the Client saved in AdviserLogic application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Expense</div>
  <div>To edit Expense under client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit/Update Income Details</div>
  <div>To edit/update Income Details</div>
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
          <title>AdviserLogic Fact Finder</title>
          <meta name="description" content="Fact Finder is an application to either fetch, create, or update Fact Finder data as per current AdviserLogic schema" />
        </>
      ),
    },
  };
}
