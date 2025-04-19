import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Flexmail"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/flexmail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Flexmail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(44, 0, 172, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Use Flexmail to keep in touch with subscribers, leads and customers through email marketing. Send better emails through data, powerful targeting and automation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed</div>
  <div>Triggers when a contact unsubscribed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Subscribed to Interest</div>
  <div>Triggers when a contact subscribed to an interest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribes From Interest</div>
  <div>Triggers when a contact unsubscribed from an interest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt-In Confirmation</div>
  <div>Triggers when an opt-in gets confirmed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Contact</div>
  <div>Unsubscribe a contact from your communication. If a contact is unsubscribed, it can only resubscribe via an opt-in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Contact to Interest</div>
  <div>Subscribe a contact to a selected interest.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From Interest</div>
  <div>Unsubscribe a contact from an interest</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact based on email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a contact</div>
  <div>Finds or creates a specific contact.</div>
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
          <title>Flexmail</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
