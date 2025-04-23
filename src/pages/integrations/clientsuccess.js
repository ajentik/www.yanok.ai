import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ClientSuccess"
      description={`ClientSuccess is customer success platform that helps retain and grow existing customer bases.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clientsuccess.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ClientSuccess Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(88, 187, 249, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ClientSuccess is customer success platform that helps retain and grow existing customer bases.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user/employee is added to your organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pulse</div>
  <div>Triggers when a new pulse is added to a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a new subscription is added to a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New To-Do</div>
  <div>Triggers when a new to-do is added to a client.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact within a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Engagement Interaction</div>
  <div>Creates a new engagement interaction on a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pulse</div>
  <div>Creates a new pulse on a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>Creates a new subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create To-Do</div>
  <div>Creates a new to-do within a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by External ID</div>
  <div>Finds an existing client in your account by external ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Find a client by the external ID. Optionally, create one if none are found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact by email. Optionally, create one if none are found.</div>
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
          <title>ClientSuccess</title>
          <meta name="description" content={`ClientSuccess is customer success platform that helps retain and grow existing customer bases.`} />
        </>
      ),
    },
  };
}
