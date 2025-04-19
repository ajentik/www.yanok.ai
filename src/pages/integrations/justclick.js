import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="JustClick"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/justclick.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        JustClick Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 152, 223, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">JustClick is a platform for selling digital products & courses online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Added to List</div>
  <div>Triggers when a lead is added to any list.</div>
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
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when a product is purchased.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Lead</div>
  <div>Add a tag to a lead. Note: the lead must already be created, or this will fail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Lead</div>
  <div>Add a new lead to a list of your choosing. Can be used to update an existing lead too.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Lead From List</div>
  <div>Remove lead from a List. Note: the lead must already be created, or this will fail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Lead</div>
  <div>Remove a tag to a lead. Note: the lead must already be created, or this will fail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Lead</div>
  <div>Unsubscribe a lead from your account. Note: the lead must already be created, or this will fail.</div>
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
          <title>JustClick</title>
        </>
      ),
    },
  };
}
