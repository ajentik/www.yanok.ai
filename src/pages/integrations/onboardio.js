import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Onboard.io"
      description={`Onboard is a SaaS made specifically for customer implementation. Customized MAPS allow teams to automate the best implementation plans and provide visibility for every customer.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onboardio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Onboard.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 97, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Onboard is a SaaS made specifically for customer implementation. Customized MAPS allow teams to automate the best implementation plans and provide visibility for every customer.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Discussion Message</div>
  <div>Triggers when a new message is posted in the discussion of a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Map</div>
  <div>Triggers when a new Map is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Map</div>
  <div>Triggers when a Map\'s properties such as status, owner, or target launch date is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new onboardee customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Map Task</div>
  <div>Triggers when any tasks in any Map within your account are created, updated, or removed. Event Type field will be returned as "created", "updated", or "removed".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Member</div>
  <div>Triggers when a new Team Member is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Team Member to Map</div>
  <div>Adds an existing team member to a Map.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Customer</div>
  <div>Creates an onboardee customer. If an external ID or website is provided matches an existing customer, that customer will be updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Discussion Message</div>
  <div>Posts a message on a particular task\'s discussion in a Map. The message will be posted as a company user in the discussion with your company name and logo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Map</div>
  <div>Creates a Map with an owner, and optional target launch date and generates tasks based on variable options selected. Note: at least one variable option is required for the Map to be created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Global Task Section</div>
  <div>Creates a global Task Section</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Global Task</div>
  <div>Creates a Global Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Team Member</div>
  <div>Creates a Team Member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Variable</div>
  <div>Creates a Variable</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Map Task</div>
  <div>Action to find a specific Map Task by name and Map id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Onboardee by Email</div>
  <div>Finds an Onboardee User by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Customer to Map</div>
  <div>Invite someone from the Customer\'s team to a Map.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Map</div>
  <div>Updates a Map with an owner, and optional target launch date and generates tasks based on variable options selected. Note: at least one variable option is required for the Map to be created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Map Task</div>
  <div>Updates a Task status within an existing Map. (Requires Map Task ID)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Map Info</div>
  <div>Gets information about a Map by the provided ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Team Member by Email</div>
  <div>Finds a Team Member in your account by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Variable by Name</div>
  <div>Finds a Variable by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Variable Option</div>
  <div>Finds available variable options in account.</div>
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
          <title>Onboard.io</title>
          <meta name="description" content={`Onboard is a SaaS made specifically for customer implementation. Customized MAPS allow teams to automate the best implementation plans and provide visibility for every customer.`} />
        </>
      ),
    },
  };
}
