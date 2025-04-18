import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OutReachBin"
      description="Outreachbin is a cold email outreach tool, that helps users warm up and send emails to inbox."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/outreachbin-1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OutReachBin Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 57, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Outreachbin is a cold email outreach tool, that helps users warm up and send emails to inbox.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Bounced</div>
  <div>Triggers when an email is bounced from a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Clicked</div>
  <div>Triggers when an email is clicked by the prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opened</div>
  <div>Triggers when an email is opened by the prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Replied</div>
  <div>Triggers when someone replied to your campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribed</div>
  <div>Triggers when an email is unsubscribed from a campaign.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Prospect</div>
  <div>Add prospect to a campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Campaign</div>
  <div>Pause campaign by campaign ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Restart Campaign</div>
  <div>Restart campaign by campaign ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Prospect</div>
  <div>unsubscribe prospect from all existing and future campaigns</div>
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
          <title>OutReachBin</title>
          <meta name="description" content="Outreachbin is a cold email outreach tool, that helps users warm up and send emails to inbox." />
        </>
      ),
    },
  };
}
