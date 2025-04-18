import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dakno"
      description="Dakno Marketing builds lead capturing tools to assist those in the real estate industry."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dakno.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dakno Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(114, 159, 26, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dakno Marketing builds lead capturing tools to assist those in the real estate industry.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submitted</div>
  <div>Triggers when a form is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Status Update</div>
  <div>Triggers when a contact is set to status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tagged</div>
  <div>Triggers when a contact has tag added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates or updates an existing contact.</div>
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
          <title>Dakno</title>
          <meta name="description" content="Dakno Marketing builds lead capturing tools to assist those in the real estate industry." />
        </>
      ),
    },
  };
}
