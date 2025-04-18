import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AccountingSuite"
      description="AccountingSuite is a powerful, all-in-one business application for accounting, cloud banking, order management, inventory management, project and time tracking into one cloud-driven platform."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/accountingsuite.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AccountingSuite Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(254, 203, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AccountingSuite is a powerful, all-in-one business application for accounting, cloud banking, order management, inventory management, project and time tracking into one cloud-driven platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Cash Receipt</div>
  <div>Creates a new cash receipt.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new Account in your Chart of Accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Address/Contact</div>
  <div>Creates a new Address/Contact in AccountingSuite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bills</div>
  <div>Creates a new bill.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a Warehouse Location in AccountingSuite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project / Jobs</div>
  <div>Create a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Service</div>
  <div>Creates a new service item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order</div>
  <div>Creates a purchase order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Invoice</div>
  <div>Creates a new Sales Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Order</div>
  <div>Creates a new Sales Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Person</div>
  <div>Creates a new Sales Person in AccountingSuite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Tracking</div>
  <div>Create time tracking for a service or task.</div>
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
          <title>AccountingSuite</title>
          <meta name="description" content="AccountingSuite is a powerful, all-in-one business application for accounting, cloud banking, order management, inventory management, project and time tracking into one cloud-driven platform." />
        </>
      ),
    },
  };
}
