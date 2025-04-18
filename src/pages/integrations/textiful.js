import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Textiful"
      description="Textiful is a "text to join" service that captures email addresses and other information at live events using SMS text messages."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/textiful.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Textiful Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(16, 90, 115, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Textiful is a "text to join" service that captures email addresses and other information at live events using SMS text messages.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added to a Textiful campaign</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Opt-In a New Contact</div>
  <div>Opt-in a new contact into one or more text lists. Each number will have to reply "YES" or "Y" to a confirmation text that is sent to them before completing their enrollment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message to Many Contacts</div>
  <div>Send a broadcast text message to every eligible contacts in your Textiful account or to contacts in a specific text list. Contacts must already belong to your Textiful account to receive this message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message to Single Contact</div>
  <div>Send a text message to a contact. If the contact is new, an opt-in confirmation message will be sent asking for permission to receive text messages. New contacts will have to reply "YES" or "Y" to the opt-in text that is sent to them.</div>
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
          <title>Textiful</title>
          <meta name="description" content="Textiful is a "text to join" service that captures email addresses and other information at live events using SMS text messages." />
        </>
      ),
    },
  };
}
