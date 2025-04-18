import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hiveage"
      description="Simple, powerful online billing for freelancers and small businesses. Track time, expenses and mileage. Manage multiple teams & businesses."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hiveage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hiveage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(243, 132, 49, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simple, powerful online billing for freelancers and small businesses. Track time, expenses and mileage. Manage multiple teams & businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bill</div>
  <div>Triggers when a new bill is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggers when a new estimate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when a new expense is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense Entry</div>
  <div>Triggers when a new expense entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item</div>
  <div>Triggers when a new item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mileage Entry</div>
  <div>Triggers when a new mileage entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new time entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Trip</div>
  <div>Triggers when a new trip is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Bill</div>
  <div>Creates a bill. Bills are incoming invoices from your vendors to you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Creates a new estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense Category</div>
  <div>Creates a new expense category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense Entry</div>
  <div>Creates a new expense entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Mileage Entry</div>
  <div>Creates a new mileage entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Category</div>
  <div>Creates a new task category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry</div>
  <div>Creates a new time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Trip</div>
  <div>Creates a new trip category.</div>
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
          <title>Hiveage</title>
          <meta name="description" content="Simple, powerful online billing for freelancers and small businesses. Track time, expenses and mileage. Manage multiple teams & businesses." />
        </>
      ),
    },
  };
}
