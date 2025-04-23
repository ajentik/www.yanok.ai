import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Digital Practice"
      description={`Digital Practice is a Practice Management Software that helps practices manage their day-to-day admin, HR, accounting, project management, HR, CRM and much more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/digital-practice.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Digital Practice Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 63, 95, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Digital Practice is a Practice Management Software that helps practices manage their day-to-day admin, HR, accounting, project management, HR, CRM and much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Account List</div>
  <div>Triggers when a new account is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Client List</div>
  <div>Triggers when a new client is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Contact List</div>
  <div>Triggers when a new contact is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Expense List</div>
  <div>Triggers when a new expense is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Invoice List</div>
  <div>Triggers when a new invoice is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Lead List</div>
  <div>Triggers when a new lead is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Product List</div>
  <div>Triggers when a new product is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Project List</div>
  <div>Triggers when a new project is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Quote List</div>
  <div>Triggers when a new quote is created on Digital Practice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Vendor List</div>
  <div>Triggers when a new vendor is created on Digital Practice.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Create a new financial account on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Create a new client profile on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new contact profile on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Create a new expense on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Create a new invoice on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice Items</div>
  <div>Creates a new Invoice Line Item, when you provide the Invoice UniqueId.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Create a new lead on Digital Practice CRM App with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Create a new product record on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a new project on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Create a new quote record on Digital Practice with data provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote Items</div>
  <div>Creates a new Quote Line Item, when you provide the Quote UniqueId.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vendor</div>
  <div>Create a new vendor on Digital Practice with data provided</div>
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
          <title>Digital Practice</title>
          <meta name="description" content={`Digital Practice is a Practice Management Software that helps practices manage their day-to-day admin, HR, accounting, project management, HR, CRM and much more.`} />
        </>
      ),
    },
  };
}
