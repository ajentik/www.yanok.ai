import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tactful UCX"
      description={`Tactful Unified Cognitive Customer Experience Platform is the next generation omnichannel customer experience technology that helps your business achieve the best results across touchpoints using AI and data centric approach.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tactful-ucx.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tactful UCX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(29, 96, 200, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tactful Unified Cognitive Customer Experience Platform is the next generation omnichannel customer experience technology that helps your business achieve the best results across touchpoints using AI and data centric approach.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new Category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a Category is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a Customer is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when an Order is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a Product is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a Ticket is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Category</div>
  <div>Triggers when a category is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Triggers when an existing customer values updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Triggers when product is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Triggers when a ticket is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Category</div>
  <div>Creates a category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a Ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Category</div>
  <div>Updates a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Updates a Ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Category</div>
  <div>Finds a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find a Customer in Tactful</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a Product in Tactful CMS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket</div>
  <div>Finds a Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Categories</div>
  <div>Finds a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customers</div>
  <div>Find a Customer in Tactful</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Orders</div>
  <div>Finds an Order in Tactful</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Products</div>
  <div>Finds a Product in Tactful CMS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tickets</div>
  <div>Finds a Ticket.</div>
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
          <title>Tactful UCX</title>
          <meta name="description" content={`Tactful Unified Cognitive Customer Experience Platform is the next generation omnichannel customer experience technology that helps your business achieve the best results across touchpoints using AI and data centric approach.`} />
        </>
      ),
    },
  };
}
