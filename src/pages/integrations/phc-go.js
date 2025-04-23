import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PHC GO"
      description={`PHC GO is more than just online management software. It is the perfect ally for your day-to-day: zero initial investment, cloud management, continuous updating and high-speed transformation. Sales, purchases, treasury, legal obligations and much more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/phc-go.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PHC GO Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 133, 231, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PHC GO is more than just online management software. It is the perfect ally for your day-to-day: zero initial investment, cloud management, continuous updating and high-speed transformation. Sales, purchases, treasury, legal obligations and much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Insert/ Update Customer</div>
  <div>Triggers when a new customer is created or updated in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Article</div>
  <div>Triggers when a new article/ service/ product is deleted in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Calendar Event</div>
  <div>Triggers when a new calendar event is deleted in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Customer</div>
  <div>Triggers when a customer is deleted from the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert/ Update Calendar Event</div>
  <div>Triggers when a new calendar event is created in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order/ internal dossiers is created in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inactive Article</div>
  <div>Triggers when a product/ article it\'s set to inactive in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inactive Customer</div>
  <div>Triggers when a customer/ subscriber it\'s set to inactive in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert Article</div>
  <div>Triggers when a new article/ service/ product is created in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert Customer</div>
  <div>Triggers when a new customer is created in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert Task</div>
  <div>Triggers when a new task is created in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert/ Update Article</div>
  <div>Triggers when a new article/ service/ product is created or updated in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Article</div>
  <div>Triggers when a new article/ service/ product is updated in the PHC GO software.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Triggers when a new customer is updated in the PHC GO software.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Order</div>
  <div>This action allows to calcel orders in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Avenca</div>
  <div>This action allows to create "avencas" in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>This action allows to create customer in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>This action allows to create invoices/ paid orders in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>This action allows to create orders in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Article</div>
  <div>This action allows to create article/ service/ product in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Records</div>
  <div>This action allows to create new records, in native and framework entities, from the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tasks</div>
  <div>This action allows to create tasks in the PHC GO integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/ Update Customer</div>
  <div>This action allows the creation or updating of customers in the integrated application</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/ Update Article</div>
  <div>This action allows the creation or updating of article/ service/ product in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>This action allows to create calendar Events in the integrated application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Run Analysis</div>
  <div>This action search allows a synchronized interaction of an application with the analyzes in the PHC GO installation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Records</div>
  <div>gergre btrghtrhtrbntrntrntr ntytrhtrhtrhtr</div>
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
          <title>PHC GO</title>
          <meta name="description" content={`PHC GO is more than just online management software. It is the perfect ally for your day-to-day: zero initial investment, cloud management, continuous updating and high-speed transformation. Sales, purchases, treasury, legal obligations and much more.`} />
        </>
      ),
    },
  };
}
