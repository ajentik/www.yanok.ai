import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Keap Max Classic"
      description={`Keap Max Classic is all-in-one marketing and sales automation software for small businesses. It effortlessly combines CRM, email marketing and e-commerce.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/keap-max-classic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Keap Max Classic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(107, 179, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Keap Max Classic is all-in-one marketing and sales automation software for small businesses. It effortlessly combines CRM, email marketing and e-commerce.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Action sequence</div>
  <div>Triggered when a new action sequence is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Affiliate</div>
  <div>Triggers when you add a new affiliate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when you add a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when you add a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Action</div>
  <div>Triggers when you add a new action for a contact (task, note, or appointment).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Contact</div>
  <div>Triggers when a tag gets added to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Credit Card Charge</div>
  <div>Triggers when a credit card charge is processed from Infusionsoft through a merchant account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when you add a new expense for an opportunity or leadsource.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when you add a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when you add a new opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when you add a new invoice (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when you add a new payment of any type (Cash, Refund, check, PayPal, etc.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when you add a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a contact subscribes to plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Subscription</div>
  <div>Triggers when a contact unsubscribes from plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription Plan</div>
  <div>Triggers when you add a new subscription plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when you add a new tag.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates a new contact. Can be used to update existing contacts too.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Existing Contact</div>
  <div>Applies a tag to an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Create and send a new email to a contact or multiple contacts, as well as record the email in the contacts\' email history.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a note on an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Create a new Product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Find a Contact by their Email Address or Username.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Invoice</div>
  <div>Find an Invoice by specifying a Contact and Invoice details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds or creates a specific contact.</div>
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
          <title>Keap Max Classic</title>
          <meta name="description" content={`Keap Max Classic is all-in-one marketing and sales automation software for small businesses. It effortlessly combines CRM, email marketing and e-commerce.`} />
        </>
      ),
    },
  };
}
