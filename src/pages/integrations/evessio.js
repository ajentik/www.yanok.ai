import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Evessio"
      description={`Evessio is an events management platform for Awards, Conferences and Exhibitions`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/evessio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Evessio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(67, 164, 149, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Evessio is an events management platform for Awards, Conferences and Exhibitions</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is purchased in an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created in an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Product</div>
  <div>Triggers where there is a new custom product purchased</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Nomination</div>
  <div>Triggers where there is a new awards nomination purchased</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Table Booking</div>
  <div>Triggers when a new table booking is purchased in an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new transaction is created in an event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Evessio</title>
          <meta name="description" content={`Evessio is an events management platform for Awards, Conferences and Exhibitions`} />
        </>
      ),
    },
  };
}
