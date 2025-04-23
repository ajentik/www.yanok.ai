import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ServiceTrade"
      description={`ServiceTrade is a customer service and sales application for commercial service contractors. Convert more of your contract work into repair revenue. Educate customers about the work you did for them with media-rich online service reports. Manage your service operations and connect your customer service data with other business applications.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/servicetrade.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ServiceTrade Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 70, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ServiceTrade is a customer service and sales application for commercial service contractors. Convert more of your contract work into repair revenue. Educate customers about the work you did for them with media-rich online service reports. Manage your service operations and connect your customer service data with other business applications.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attachment</div>
  <div>Triggers when a new attachment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Clock Event</div>
  <div>Triggers when a new clock event (clock-in or clock-out) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deficiency</div>
  <div>Triggers when a new deficiency is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a new job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Comment</div>
  <div>Triggers when a new comment is added to a job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Location</div>
  <div>Triggers when a new location is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Appointment</div>
  <div>Triggers when an existing appointment is updated or a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Company</div>
  <div>Triggers when an existing Company is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when an existing contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Invoice</div>
  <div>Triggers when an existing invoice is updated or a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Job</div>
  <div>Triggers when an existing Job is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Location</div>
  <div>Triggers when an existing Location is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Quote</div>
  <div>Triggers when an existing quote is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Asset to Location</div>
  <div>Adds an asset to an existing location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment to Job</div>
  <div>Add an attachment to a job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Job</div>
  <div>Adds a comment to an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Location</div>
  <div>Adds a comment to an existing location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Job</div>
  <div>Adds a tag to an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Location</div>
  <div>Adds a tag to an existing location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Quote</div>
  <div>Adds a tag to an existing quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates an appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Invoice</div>
  <div>Creates a new invoice, or updates an existing invoice. If you provide an Invoice ID, the existing invoice identified by that ID will be updated. Otherwise, a new invoice will be created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job Item</div>
  <div>Creates a new Job Item on a Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a new Location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Creates a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Company</div>
  <div>Removes a tag from existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Location</div>
  <div>Removes a tag from existing location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Appointment</div>
  <div>Updates an existing appointment based on a provided appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job Item</div>
  <div>Updates an existing Job Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Location</div>
  <div>Updates an existing location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing customer company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company by External ID</div>
  <div>Finds a company by an external system and ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job by Job Id</div>
  <div>Find an existing Job by Job Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job by Job Number</div>
  <div>Finds a job by its job number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location</div>
  <div>Finds an existing customer location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location by External ID</div>
  <div>Finds a location by an external system and ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer Company</div>
  <div>Find or Create Customer Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer Company by External ID</div>
  <div>Find or Create Customer Company by External ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer Location</div>
  <div>Find or Create Customer Location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer Location by External ID</div>
  <div>Find or Create Customer Location by External ID</div>
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
          <title>ServiceTrade</title>
          <meta name="description" content={`ServiceTrade is a customer service and sales application for commercial service contractors. Convert more of your contract work into repair revenue. Educate customers about the work you did for them with media-rich online service reports. Manage your service operations and connect your customer service data with other business applications.`} />
        </>
      ),
    },
  };
}
