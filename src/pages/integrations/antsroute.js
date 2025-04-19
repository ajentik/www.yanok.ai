import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AntsRoute"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/antsroute.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AntsRoute Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(11, 122, 252, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AntsRoute is an innovative software that smartly schedules deliveries, operations and appointments, optimizes routes and improves customer relations. The needed solutions to boost your performance and improve your team productivity.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Customer</div>
  <div>Create a new customer in AntsRoute</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Order</div>
  <div>This action allows to create a SERVICE/DELIVERY/COLLECT type of the ORDER in the PLANNING at the corresponding given date</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Order in Basket</div>
  <div>This action allows to create a SERVICE/DELIVERY/COLLECT type of the ORDER in the BASKET of AntsRoute. Please verify that the basket option is activated in settings of the corresponding site</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Update attributes for customer with specified AntsRoute ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer by External ID</div>
  <div>This method allow to get a customer by external ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order by External ID</div>
  <div>This method allow to get a service/delivery/collect order with externalId.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order by AntsRoute ID</div>
  <div>This method allow to get a service/delivery/collect with AntsRoute unique Order ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create New Customer</div>
  <div>This method allow to get a customer by external ID</div>
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
          <title>AntsRoute</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
