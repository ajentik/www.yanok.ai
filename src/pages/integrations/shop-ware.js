import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Shop-Ware"
      description="Shop-Ware is a cloud-based auto-shop management system to help run your repair shop at its fullest potential."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shop-ware.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Shop-Ware Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(241, 89, 34, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Shop-Ware is a cloud-based auto-shop management system to help run your repair shop at its fullest potential.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Created</div>
  <div>Triggers when a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Updated</div>
  <div>Triggers when an existing appointment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when an existing customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Repair Order Created</div>
  <div>Triggers when an existing Repair Order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Repair Order Updated</div>
  <div>Triggers when an existing Repair Order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vehicle Created</div>
  <div>Triggers when a new vehicle is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vehicle Updated</div>
  <div>Triggers when an existing vehicle is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create an Appointment</div>
  <div>Creates an Appointment within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Customer</div>
  <div>Creates an Customer within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Payment</div>
  <div>Creates an Payment within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Repair Order</div>
  <div>Creates an Repair Order within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Vehicle</div>
  <div>Creates an Vehicle within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Appointment</div>
  <div>Updates an Appointment within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Customer</div>
  <div>Updates a Customer within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Repair Order</div>
  <div>Updates a Repair Order within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Vehicle</div>
  <div>Updates a Vehicle within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Appointment</div>
  <div>Finds an Appointment within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Finds a Customer within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Payment</div>
  <div>Finds a Payment within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Repair Order</div>
  <div>Finds a Repair Order within the Shop-Ware platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Vehicle</div>
  <div>Finds a Vehicle within the Shop-Ware platform.</div>
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
          <title>Shop-Ware</title>
          <meta name="description" content="Shop-Ware is a cloud-based auto-shop management system to help run your repair shop at its fullest potential." />
        </>
      ),
    },
  };
}
