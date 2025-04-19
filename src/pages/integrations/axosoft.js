import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Axosoft"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/axosoft.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Axosoft Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(138, 199, 50, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Axosoft is agile project management for software development teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when a new email is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item</div>
  <div>Triggers when a new item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Release</div>
  <div>Triggers when a new release is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Log</div>
  <div>Triggers when a new work log is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create SCM Post</div>
  <div>Posts the SCM commit data to any of your tagged items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Log</div>
  <div>Creates a new work log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an item.</div>
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
          <title>Axosoft</title>
        </>
      ),
    },
  };
}
