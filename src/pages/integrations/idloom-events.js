import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="idloom-events"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/idloom-events.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        idloom-events Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(153, 188, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Idloom-events is a complete and professional tool that manages and automates all key aspects of event management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event Hooks</div>
  <div>Trigger when an event is created, updated or deleted, or when the custom menu is called in the event detail screen.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Credit Notes</div>
  <div>This method is used to collect the list of credit notes associated to this account / profile and to a specific prefix. You can specify the last credit note number you collected to list further credit notes only.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Events</div>
  <div>This method is used to collect the list of events associated to all account / profiles connected to this integration, with paging. You can specify the events\' status to filter on.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Guests</div>
  <div>This method returns the complete list of guests with selected categories and options for a given event with paging. Thanks to the API field mapping feature, you can define a subset of fields you want to receive, rename them and add hidden fields with fixed values. Important notice: idloom-events will only send the fields defined in you mapping settings. All other fields will be ignored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Invoices</div>
  <div>This method is used to collect the list of invoices associated to this account / profile and to a specific prefix. You can specify the last invoice number you collected to list further invoices only.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Hooks</div>
  <div>Trigger when a guest registers, is updated or deleted on your events, or when a custom menu function is called.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Set Payment</div>
  <div>This method is used to update individual invoice payment status. For this account / profile, provide journal prefix, invoice number, paid amount, payment date and reference, and update the related invoice and guest payment status. The method returns \'true\' for successful requests.</div>
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
          <title>idloom-events</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
