import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Arbox"
      description={`Arbox is a sleek and easy-to-use fitness management platform offering a suite of tools for gyms and fitness studios.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/arbox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Arbox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 82, 166, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Arbox is a sleek and easy-to-use fitness management platform offering a suite of tools for gyms and fitness studios.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is added to Arbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Converted to Client</div>
  <div>Triggers when a lead is converted to a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created in Arbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Renew Membership</div>
  <div>Triggers when a client renew or create membership.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead</div>
  <div>Add new lead to Arbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Task</div>
  <div>Add a new task to Arbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to Client</div>
  <div>Send a push message, SMS or email to a client via Arbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to a Lead</div>
  <div>Send a message to a lead or few leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead Status</div>
  <div>Update lead status in Arbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Client or Lead</div>
  <div>Finds a client or lead in Arbox by email or user id</div>
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
          <title>Arbox</title>
          <meta name="description" content={`Arbox is a sleek and easy-to-use fitness management platform offering a suite of tools for gyms and fitness studios.`} />
        </>
      ),
    },
  };
}
