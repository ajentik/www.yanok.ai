import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Teamgate"
      description="Teamgate is an intelligent sales CRM with a great insights. Start from Lead capturing and move along to closing a Deal. Get top reports, which will become a necessity from day one."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teamgate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Teamgate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(87, 151, 201, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Teamgate is an intelligent sales CRM with a great insights. Start from Lead capturing and move along to closing a Deal. Get top reports, which will become a necessity from day one.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity Status Changed</div>
  <div>Triggers when an activity status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Converted to Person</div>
  <div>Triggers when a lead is converted to person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Stage Changed</div>
  <div>Triggers when a deal\'s stage is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggers when email is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lost Deal</div>
  <div>Triggers when a deal is lost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Lists the products.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unqualified Lead</div>
  <div>Triggers when a lead is unqualified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Won Deal</div>
  <div>Triggers when a deal is won.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Cart Products Status</div>
  <div>Updates a cart\'s products "In Stock" status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Update existing product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Update existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Update existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a product give.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Finds an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Finds an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds a product give.</div>
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
          <title>Teamgate</title>
          <meta name="description" content="Teamgate is an intelligent sales CRM with a great insights. Start from Lead capturing and move along to closing a Deal. Get top reports, which will become a necessity from day one." />
        </>
      ),
    },
  };
}
