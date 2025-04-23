import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Omnivery"
      description={`Omnivery is a message delivery platform focused on deliverability and compliance`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/omnivery.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Omnivery Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(251, 176, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Omnivery is a message delivery platform focused on deliverability and compliance</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Message Clicked</div>
  <div>Triggers when a link in a message is clicked on by the recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recipient Complained</div>
  <div>Triggers when a recipient reports message as spam.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Delivered</div>
  <div>Triggers when a message is delivered to the recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Bounced (Hard)</div>
  <div>Triggers when a message delivery results in hard-bounce (temporary failure).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Opened</div>
  <div>Triggers when a message is opened by the recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Bounced (Soft)</div>
  <div>Triggers when a message delivery results in soft-bounce (temporary failure).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recipient Unsubscribed</div>
  <div>Triggers when a recipient unsubscribes from the message.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Parse Email</div>
  <div>Parses an input string and returns a well formed array of valid and unparseable emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Sends and Email message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suppress Email</div>
  <div>Adds a recipient to a suppression list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate Email</div>
  <div>Validates an email address formating, existence and associated risks. Please note that the domain used for validation MUST have Email Validation enabled in the domain detail.</div>
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
          <title>Omnivery</title>
          <meta name="description" content={`Omnivery is a message delivery platform focused on deliverability and compliance`} />
        </>
      ),
    },
  };
}
