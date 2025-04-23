import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HelpSpace"
      description={`HelpSpace is a well-rounded customer service tool including a team inbox, intuitive interface, self-service sites, and multiple inbound channels to get a competitive edge in your market.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/helpspace.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HelpSpace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(67, 73, 163, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HelpSpace is a well-rounded customer service tool including a team inbox, intuitive interface, self-service sites, and multiple inbound channels to get a competitive edge in your market.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new support ticket is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Create</div>
  <div>Creates a new Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Create</div>
  <div>Creates a new ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Delete</div>
  <div>Deletes a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Delete</div>
  <div>Move ticket to trash</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Update</div>
  <div>Updates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Update</div>
  <div>Updates a Ticket</div>
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
          <title>HelpSpace</title>
          <meta name="description" content={`HelpSpace is a well-rounded customer service tool including a team inbox, intuitive interface, self-service sites, and multiple inbound channels to get a competitive edge in your market.`} />
        </>
      ),
    },
  };
}
