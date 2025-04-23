import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Textlocal"
      description={`A great tool for sending and receiving SMS texts. Allows you to send SMS texts to thousands of customers at once with no fuss. You can also include attachments, surveys and vouchers/tickets, all within a single SMS message.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/textlocal.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Textlocal Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(42, 113, 184, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A great tool for sending and receiving SMS texts. Allows you to send SMS texts to thousands of customers at once with no fuss. You can also include attachments, surveys and vouchers/tickets, all within a single SMS message.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Sent API Message</div>
  <div>Triggers when a message is sent via Textlocal\'s API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbox Message</div>
  <div>Triggers when a message is received into an inbox.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends a SMS message.</div>
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
          <title>Textlocal</title>
          <meta name="description" content={`A great tool for sending and receiving SMS texts. Allows you to send SMS texts to thousands of customers at once with no fuss. You can also include attachments, surveys and vouchers/tickets, all within a single SMS message.`} />
        </>
      ),
    },
  };
}
