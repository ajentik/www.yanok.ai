import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SendPulse"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sendpulse.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SendPulse Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 181, 142, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SendPulse is an Integrated messaging platform providing user communication on all devices with Emails, SMS, Web Push, SMTP and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when a current subscriber unsubscribes from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscriber</div>
  <div>Triggers when subscriber is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber</div>
  <div>Add a new subscriber to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Remove a contact from the list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe User</div>
  <div>Unsubscribe an email address from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber</div>
  <div>Updates a subscriber on a list.</div>
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
          <title>SendPulse</title>
        </>
      ),
    },
  };
}
