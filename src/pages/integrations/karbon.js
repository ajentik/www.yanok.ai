import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Karbon"
      description={`Karbon is a workstream collaboration platform combining email, discussions, tasks & powerful workflows to give your team everything it needs to get work done.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/karbon.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Karbon Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(40, 114, 211, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Karbon is a workstream collaboration platform combining email, discussions, tasks & powerful workflows to give your team everything it needs to get work done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Person Contact</div>
  <div>Triggers when a new person contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Contact Updated</div>
  <div>Triggers when a person contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization Contact</div>
  <div>Triggers when a new organization contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organization Contact Updated</div>
  <div>Triggers when an organization contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Person Contact</div>
  <div>Creates a new person contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person Contact</div>
  <div>Updates a person contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization Contact</div>
  <div>Creates a new organization contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization Contact</div>
  <div>Updates an organization contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person Contact</div>
  <div>Search for a person contact by name or email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Organization Contact</div>
  <div>Search for an organization contact by name or email address.</div>
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
          <title>Karbon</title>
          <meta name="description" content={`Karbon is a workstream collaboration platform combining email, discussions, tasks & powerful workflows to give your team everything it needs to get work done.`} />
        </>
      ),
    },
  };
}
