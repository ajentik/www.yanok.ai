import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="InvGate Service Desk"
      description={`InvGate Service Desk is a ticketing solution with ITIL-ready functionalities to organize work based on priority, SLA & urgency, create automated workflows, integrate with CMDB and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/invgate-service-desk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        InvGate Service Desk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 83, 137, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">InvGate Service Desk is a ticketing solution with ITIL-ready functionalities to organize work based on priority, SLA & urgency, create automated workflows, integrate with CMDB and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Automated Action</div>
  <div>Triggers when a new Automated Action is defined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Automated Action Execution</div>
  <div>Triggers when a particular Automated Action is executed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a new comment in an chosen incident is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Request</div>
  <div>Creates a new request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post a Reply</div>
  <div>Posts a comment in the chosen request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Request</div>
  <div>Finds a Request by Searching by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search the Latest Reply</div>
  <div>Finds the latest replies of an incident</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User by Email</div>
  <div>Searches for a user using email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Request</div>
  <div>Finds a Request by Searching by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Reply</div>
  <div>Finds the latest replies of an incident</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Finds a user by id.</div>
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
          <title>InvGate Service Desk</title>
          <meta name="description" content={`InvGate Service Desk is a ticketing solution with ITIL-ready functionalities to organize work based on priority, SLA & urgency, create automated workflows, integrate with CMDB and more.`} />
        </>
      ),
    },
  };
}
