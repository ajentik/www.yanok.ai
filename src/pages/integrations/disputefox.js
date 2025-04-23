import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DisputeFox"
      description={`DisputeFox was designed from the ground up to be the World's Most Advanced All-in-One Credit Dispute Software.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/disputefox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DisputeFox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 110, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DisputeFox was designed from the ground up to be the World\'s Most Advanced All-in-One Credit Dispute Software.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Updated</div>
  <div>Trigger fire after updating new affiliate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Trigger fire after updating new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Trigger fire after updating new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Affiliate Added</div>
  <div>trigger fire after adding new affiliate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client Added</div>
  <div>trigger fire after adding new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Added</div>
  <div>trigger fire after adding new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Added</div>
  <div>Triggers when new task added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when existing task updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Lead</div>
  <div>Add new lead directly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Client</div>
  <div>Add new client directly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Event</div>
  <div>Add new task for particular Client/Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add / Update Client</div>
  <div>can add or update client using this zapier action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add / Update Lead</div>
  <div>can add or update lead using this zapier action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client / Lead</div>
  <div>Update information of existing client/lead.</div>
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
          <title>DisputeFox</title>
          <meta name="description" content={`DisputeFox was designed from the ground up to be the World's Most Advanced All-in-One Credit Dispute Software.`} />
        </>
      ),
    },
  };
}
