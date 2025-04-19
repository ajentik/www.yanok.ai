import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PipeOne.me"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipeoneme.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PipeOne.me Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(44, 35, 173, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PipeOne.me is a CRM for mobile messaging. Let people ask, suggest, buy and talk to your company using mobile messages via your PipeOne number, any mobile messaging app, your website or even via QR code.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when the contact sends a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Status Conversation</div>
  <div>Triggers when a conversation status has changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Internal Note</div>
  <div>Create a Internal note to contacts. It\'s visible for only agents/users. You can define destinations by groups or individual contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create or Update a contact with basic informations</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update User</div>
  <div>Create or Update user with basic infos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a SMS Message</div>
  <div>Send a SMS message to a defined contact using Pipeone.</div>
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
          <title>PipeOne.me</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
