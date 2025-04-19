import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Winoffice Prime"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/winoffice-prime.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Winoffice Prime Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 127, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Winoffice Prime is a comprehensive software platform for the automation and digitalization of small and medium-sized enterprises in the fields of facility services, project services and trade.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Appointment</div>
  <div>Triggers when a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Opportunity</div>
  <div>Triggers when a new sales opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Sales Offer</div>
  <div>Triggers when a new sales offer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Service Order</div>
  <div>Triggers when a new service order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Updated Appointment</div>
  <div>Triggers when appointment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Service Order With Changed Status</div>
  <div>Triggers when a new service order status is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Address</div>
  <div>Creates new address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates new appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign Target</div>
  <div>Creates new campaign target.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates new opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Phone Call</div>
  <div>Creates new phone call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Campaign Target Status</div>
  <div>Updates campaign target status.</div>
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
          <title>Winoffice Prime</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
