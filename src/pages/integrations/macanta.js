import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Macanta"
      description={`Macanta allows you to create a CRM as unique as your business, without the risk, cost or need for custom development. Macanta does for CRM as WIX does for websites.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/macanta.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Macanta Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 51, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Macanta allows you to create a CRM as unique as your business, without the risk, cost or need for custom development. Macanta does for CRM as WIX does for websites.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Data Object</div>
  <div>This will create a new Data Object in Macanta, with the supplied Contact, assigned with the specified Relationship.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create DO Note</div>
  <div>Creates a Note attached to a specific Data Object (Not a Contact Note)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a Note with Note Tags on a Contact Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a Task for a contact, assigned to a specific Macanta User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Contact</div>
  <div>Check Macanta to see if a Contact already exists, identified by Email Address. If the Contact exists, this trigger will update the details. If the contact does not exist, it will be created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Data Object</div>
  <div>This will edit the field values specified, in the Data Object Identified</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Data Object via Item ID</div>
  <div>Returns all the fields and values for a specified Data Object - Specified using the Item ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Data Object by Field Value ID</div>
  <div>Returns the field values of a Data Object as identified by a specified value in a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact Details</div>
  <div>Find a contact based on the Email Address in order to return all the Contact details.</div>
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
          <title>Macanta</title>
          <meta name="description" content={`Macanta allows you to create a CRM as unique as your business, without the risk, cost or need for custom development. Macanta does for CRM as WIX does for websites.`} />
        </>
      ),
    },
  };
}
