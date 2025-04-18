import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Spot-Hit"
      description="SPOT HIT is the french leading plateform to manage all your campaigns (SMS, Rich SMS, email)"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/spot-hit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Spot-Hit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(230, 0, 126, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SPOT HIT is the french leading plateform to manage all your campaigns (SMS, Rich SMS, email)</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Response Form</div>
  <div>Triggers when a new response to your form is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Response SMS</div>
  <div>Triggers when a new response to a sms campaign is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Stop</div>
  <div>Triggers when a new stop is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add your contacts to a new group or an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Mail sending. Please note for better differentiation you must use a domain referenced on MailingVox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send your SMS easily.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Voice Message</div>
  <div>Send your voicemail messages easily.</div>
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
          <title>Spot-Hit</title>
          <meta name="description" content="SPOT HIT is the french leading plateform to manage all your campaigns (SMS, Rich SMS, email)" />
        </>
      ),
    },
  };
}
