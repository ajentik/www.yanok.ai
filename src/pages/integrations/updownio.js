import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Updown.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/updownio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Updown.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 102, 102, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">updown.io is an online service that checks your website\'s status by periodically sending an HTTP request. It then notifies you by Slack, Telegram, email or SMS when your website is not responding correctly, your SSL certificate is invalid or about to expire, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Down Alert</div>
  <div>Triggers when a check is down.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Alert</div>
  <div>Triggers when an event you selected occurred.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Low Credits Reminder</div>
  <div>Triggers when the credit number on the account is low.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SSL Expiration</div>
  <div>Triggers when an SSL certificate expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SSL Invalid</div>
  <div>Triggers when an SSL certificate is invalid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SSL Renewed</div>
  <div>Triggers when an SSL certificate is renewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SSL Valid</div>
  <div>Triggers when an SSL certificate is valid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Still Down Alert</div>
  <div>Triggers when a check is still down.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Up Alert</div>
  <div>Triggers when a check is up.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Updown.io</title>
        </>
      ),
    },
  };
}
