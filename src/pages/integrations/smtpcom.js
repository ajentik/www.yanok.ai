import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SMTP.com"
      description="SMTP is a trusted and powerful transactional and email relay provider that allows you to send and track high volume emails effortlessly."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smtpcom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SMTP.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 36, 97, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SMTP is a trusted and powerful transactional and email relay provider that allows you to send and track high volume emails effortlessly.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Click</div>
  <div>Triggers when a new link click is registered by SMTP.com for this channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Complaint</div>
  <div>Triggers when a new spam complaint is received by SMTP.com for this channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Hard Bounce</div>
  <div>Triggers when SMTP.com receives a new hard bounce event for this channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Open</div>
  <div>Triggers when a new email open is registered by SMTP.com for this channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sending Event</div>
  <div>Triggers when a new sending event happens while delivering your email (includes: received, queued, delivered, failed, hard_bounced, bounceback).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribe</div>
  <div>Triggers when SMTP.com receives an unsubscribe request for this channel.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Sends email via this channel.</div>
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
          <title>SMTP.com</title>
          <meta name="description" content="SMTP is a trusted and powerful transactional and email relay provider that allows you to send and track high volume emails effortlessly." />
        </>
      ),
    },
  };
}
