import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="The Web Console"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/the-web-console.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        The Web Console Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 12, 12, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The Web Console is a single toolbox for businesses to manage all their online marketing, including their website, database marketing and their CRM.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact</div>
  <div>Triggers when a new contact joins database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice</div>
  <div>Triggers when an invoice is created or status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shop Order</div>
  <div>Triggers when a shop order is created or status is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Contact</div>
  <div>Creates or updates a contact into database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Registration</div>
  <div>Search an event registration</div>
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
          <title>The Web Console</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
