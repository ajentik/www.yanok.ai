import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="IsOn24"
      description="IsOn24 is a conversational AI voice assistant that answers your calls just like you, sends text messages, and automates your front office tasks including appointments and lead management."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ison24.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        IsOn24 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 136, 28, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">IsOn24 is a conversational AI voice assistant that answers your calls just like you, sends text messages, and automates your front office tasks including appointments and lead management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment Update</div>
  <div>Triggers when a new appointment is made or when a previously made appointment is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when a call is answered by the IsOn24.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is received or sent via your IsOn24 voice assistant.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a text message to a recipient</div>
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
          <title>IsOn24</title>
          <meta name="description" content="IsOn24 is a conversational AI voice assistant that answers your calls just like you, sends text messages, and automates your front office tasks including appointments and lead management." />
        </>
      ),
    },
  };
}
