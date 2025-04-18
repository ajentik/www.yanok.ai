import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Reckon One"
      description="Reckon One is an easy to use cloud accounting system built for every day small business owners who want a no fuss, simple and inexpensive solution. Easily add and remove modules such as payroll as your business needs them."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reckon-one.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Reckon One Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Reckon One is an easy to use cloud accounting system built for every day small business owners who want a no fuss, simple and inexpensive solution. Easily add and remove modules such as payroll as your business needs them.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Adjustment Note</div>
  <div>Triggers when a new customer adjustment note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
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
  <div class="font-semibold">New Receipt</div>
  <div>Triggers when a new receipt is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Item</div>
  <div>Triggers when an existing item is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Adjustment Note</div>
  <div>Creates a new customer adjustment note.</div>
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
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new \'money out\' payment, with optional ability to assign the payment to an existing bill.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Receipt</div>
  <div>Creates a new \'money in\' receipt, with optional ability to assign the receipt to an existing invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an existing item.</div>
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
          <title>Reckon One</title>
          <meta name="description" content="Reckon One is an easy to use cloud accounting system built for every day small business owners who want a no fuss, simple and inexpensive solution. Easily add and remove modules such as payroll as your business needs them." />
        </>
      ),
    },
  };
}
