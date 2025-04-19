import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MailerSend"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailersend.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MailerSend Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(78, 72, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MailerSend is a powerful transactional email system built for developers but designed so non-tech teams can contribute without coding.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Clicked Through</div>
  <div>Triggers when the recipient clicks on a link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Delivered</div>
  <div>Triggers when an email is delivered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Hard Bounced</div>
  <div>Triggers when an email is hard bounced.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Opened</div>
  <div>Triggers when an email is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Sent</div>
  <div>Triggers when an email is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Soft Bounced</div>
  <div>Triggers when an email is soft bounced.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Is Reported as Spam</div>
  <div>Triggers when an email is reported as spam.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recipient Has Unsubscribed</div>
  <div>Triggers when a recipient unsubscribes from your mailing activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Is Delivered</div>
  <div>Triggers when SMS is delivered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Delivery Failed</div>
  <div>Triggers when SMS failed to deliver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Is Sent</div>
  <div>Triggers when SMS is sent.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send an Email</div>
  <div>Send an email via your MailerSend account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Template-Based Email</div>
  <div>Send an email based on a template via your MailerSend account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send an SMS</div>
  <div>Send an SMS via your MailerSend account.</div>
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
          <title>MailerSend</title>
        </>
      ),
    },
  };
}
