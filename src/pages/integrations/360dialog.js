import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="360dialog"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/360dialog.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        360dialog Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 67, 105, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">360dialog provides connection to the official WhatsApp Business API to send and receive WhatsApp messages</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assigned Chat</div>
  <div>Triggers when a chat is assigned to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get New Incoming Messages</div>
  <div>Triggers when any inbound Messages are received. For example, when a customer sends the business a sales enquiry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get New Outgoing Messages</div>
  <div>Triggers when any outbound Messages are sent. For example, when providing a customer with the list of products available.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send a WhatsApp Message</div>
  <div>Send a WhatsApp Message</div>
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
          <title>360dialog</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
