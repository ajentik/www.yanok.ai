import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SleekFlow"
      description={`SleekFlow is your centralised messaging platform with customers, enabling your sales, support and marketing teams to do their best work - so you can create an experience you customers will never forget.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sleekflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SleekFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(13, 18, 44, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SleekFlow is your centralised messaging platform with customers, enabling your sales, support and marketing teams to do their best work - so you can create an experience you customers will never forget.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Created or Updated Contact</div>
  <div>Triggers when the contact information is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Message</div>
  <div>Triggers when a new message is received</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create a new contact or update existing contact in SleekFlow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Send a Message via WhatsApp, Facebook, WeChat, Line and more using SleekFlow</div>
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
          <title>SleekFlow</title>
          <meta name="description" content={`SleekFlow is your centralised messaging platform with customers, enabling your sales, support and marketing teams to do their best work - so you can create an experience you customers will never forget.`} />
        </>
      ),
    },
  };
}
