import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LiveAgent"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/liveagent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LiveAgent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(246, 146, 30, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LiveAgent is the only customer support app you will ever need. Helpdesk, Ticketing, Automation, Live Chat, Call Center, FAQs, Support Portal, Facebook and Twitter monitoring... Plus, it works well with others like MailChimp, Highrise, AWeber, Google Analytics and 50+ more</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer (Experimental)</div>
  <div>Triggers when a new customer is added to system. (uses API v3).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is added to system.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Customer to Group</div>
  <div>Add customer to group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation</div>
  <div>Creates new conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Customer</div>
  <div>Adds new contact/customer to system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Customer From Group</div>
  <div>Removes customer from particular group.</div>
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
          <title>LiveAgent</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
