import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Responder (רב מסר)"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/responder.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Responder (רב מסר) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(5, 79, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Responder (רב מסר) is a leading Israeli email autoresponder platform, and is only in Hebrew. Capture leads, segment them to lists based on interest and action - and keep in touch with them via newsletters and segmented offers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber Added</div>
  <div>Triggers when a new subscriber is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscriber Did Not Open Emails</div>
  <div>Triggers when a subscriber did not open an email for more than X days in the list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscriber Reached Seniority</div>
  <div>Triggers when subscriber reaches at specific seniority in days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List Created</div>
  <div>Triggers when a new list is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Subscriber Status</div>
  <div>Change the status of the subscriber in a list to active or inactive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a List</div>
  <div>Creates a new list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscriber</div>
  <div>Delete the subscriber from a list (NOT RECOMMENDED. This will delete subscriber history).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Subscriber</div>
  <div>Unsubscribe a Subscriber from the Rav Messer account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe a New Subscriber</div>
  <div>Subscribes a subscriber to an existing list.</div>
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
          <title>Responder (רב מסר)</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
