import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Deskera"
      description="Deskera is all you need to manage your organization's business and financial requirements."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/deskera.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Deskera Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(220, 53, 69, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Deskera is all you need to manage your organization\'s business and financial requirements.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New CRM+ Contact</div>
  <div>Triggers when a New Contact is Created in CRM+.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a New Contact is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Contact</div>
  <div>Triggers when a New Contact is Created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Deal</div>
  <div>Triggers when a New Deal is Created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a New Product is Created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Account</div>
  <div>Creates a new Account on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Bill</div>
  <div>Creates a new Bill on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact</div>
  <div>Creates a new Contact on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact in CRM+</div>
  <div>Creates a new Contact in CRM+ on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact in CRM</div>
  <div>Creates a new Contact in CRM on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Deal in CRM</div>
  <div>Creates a new Deal in CRM on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Sales Invoice</div>
  <div>Creates a new Sales Invoice on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Sales Invoice - Shopify Integration</div>
  <div>Creates a new Sales Invoice on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Order</div>
  <div>Creates a new Order on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Product</div>
  <div>Creates a new Product on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Quotation</div>
  <div>Creates a new Quotation on a specified action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Existing Deal in CRM</div>
  <div>Updates an Existing Deal in CRM on a specified action</div>
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
          <title>Deskera</title>
          <meta name="description" content="Deskera is all you need to manage your organization's business and financial requirements." />
        </>
      ),
    },
  };
}
