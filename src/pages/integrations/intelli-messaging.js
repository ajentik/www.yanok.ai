import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Intelli Messaging"
      description="Intelli Messaging lets you send SMS Messages worldwide."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/intelli-messaging.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Intelli Messaging Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(237, 84, 58, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Intelli Messaging lets you send SMS Messages worldwide.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Message Delivery Status</div>
  <div>Triggers when the final delivery status of a sent SMS message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive SMS</div>
  <div>Triggers when an SMS Message is received to your virtual mobile number and account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Insert or Update a Contact Record</div>
  <div>This action Creates or Updates a Contact Record. This can be used to transfer contacts from your favourite Application to Intelli Messaging. You can use this action to schedule SMS for such as Anniversary or Birthdays. The key for the contact record is the IntegrationId which is mapped to Others systems ContactId. If a record exists it is updated - if not it is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS Messages to Multiple Contact Numbers</div>
  <div>Send SMS to multiple contact numbers in one action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send an SMS Message</div>
  <div>Sends an SMS message a contact number</div>
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
          <title>Intelli Messaging</title>
          <meta name="description" content="Intelli Messaging lets you send SMS Messages worldwide." />
        </>
      ),
    },
  };
}
