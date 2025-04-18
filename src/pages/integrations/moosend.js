import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Moosend"
      description="Moosend is an email marketing & automations platform that helps you ease the burden of sending your email campaigns and managing your mailing lists."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/moosend.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Moosend Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 196, 215, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Moosend is an email marketing & automations platform that helps you ease the burden of sending your email campaigns and managing your mailing lists.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added to a mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when a subscriber is unsubscribed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Profile</div>
  <div>Triggers when a subscriber’s profile has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Increment / Decrement Numeric Custom Field</div>
  <div>Increases or decreases a numeric custom field\'s value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Custom Field Value</div>
  <div>Sets a custom field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscriber</div>
  <div>Creates a new subscriber in a specific mailing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Run Automation</div>
  <div>Runs a Moosend automation for the provided email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Member</div>
  <div>Unsubscribes a member from all or target mailing lists.</div>
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
          <title>Moosend</title>
          <meta name="description" content="Moosend is an email marketing & automations platform that helps you ease the burden of sending your email campaigns and managing your mailing lists." />
        </>
      ),
    },
  };
}
