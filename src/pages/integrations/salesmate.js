import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Salesmate"
      description={`Salesmate is an All-in-one Sales Management, Automation, and Acceleration Software for Teams of All Sizes & Shapes.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salesmate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Salesmate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 192, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Salesmate is an All-in-one Sales Management, Automation, and Acceleration Software for Teams of All Sizes & Shapes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New De-Activated User</div>
  <div>Triggers when a user is de-activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity Note</div>
  <div>Triggers when a new activity note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company Note</div>
  <div>Triggers when a new company note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Note</div>
  <div>Triggers when a new contact note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Note</div>
  <div>Triggers when a new deal note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Triggers when a new activity update is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Triggers when a new company update is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a new contact update is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Triggers when a new deal update is found.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Adds Note based on previous step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New User</div>
  <div>Created new User, probably with input from previous step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new Activity, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new Company, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new Contact, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new Deal, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Random User</div>
  <div>Select a random user from active user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Update Activity, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update Company, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update Contact, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Update Deal, probably with input from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Updates a note based on previous step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Total Rows in Activity</div>
  <div>Searches Total Rows in Activities</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Total Rows in Company</div>
  <div>Searches Total Rows in Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Total Rows in Contacts</div>
  <div>Searches Total Rows in Contacts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Total Rows in Deal</div>
  <div>Searches Total Rows in Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Activity</div>
  <div>Finds an activity based on different fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Company</div>
  <div>Finds a company based on different fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact</div>
  <div>Finds a contact based on different fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Deal</div>
  <div>Finds a deal based on different fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Activity</div>
  <div>Search or create Activity , if activity does not exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Company</div>
  <div>Search or create Company, if does not exist. Optionally, create one if none are found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Contact</div>
  <div>Search or create Contact , if contact does not exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Deal</div>
  <div>Search or Create a deal , if deal does not exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User</div>
  <div>Find an User based on different fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Activity</div>
  <div>x</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Company</div>
  <div>x</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create a contact</div>
  <div>x</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Deal</div>
  <div>x</div>
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
          <title>Salesmate</title>
          <meta name="description" content={`Salesmate is an All-in-one Sales Management, Automation, and Acceleration Software for Teams of All Sizes & Shapes.`} />
        </>
      ),
    },
  };
}
