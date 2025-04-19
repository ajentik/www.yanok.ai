import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Growbots"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/growbots.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Growbots Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 100, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Growbots is an all-in-one AI tool for automated outbound sales, combining scalable prospecting and targeted email outreach.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Opened</div>
  <div>Triggers when a prospect opens a new email. Note: the</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect Contacted</div>
  <div>Triggers when you send the first campaign message to a new prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Clicked</div>
  <div>Triggers when a prospect clicks a link. Note: the</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Received</div>
  <div>Triggers when you receive a new message from a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Positive Message Received</div>
  <div>Triggers when you receive a new positive message from a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Unsubscribed</div>
  <div>Triggers when a prospect clicks an unsubscribe link.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Prospect</div>
  <div>Adds a new prospect to the selected campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Prospect and Schedule</div>
  <div>Adds a new prospect to the seleted campaign and schedules it automatically.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Campaign for a Prospect</div>
  <div>Pauses the active campaign for a single prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Qualify</div>
  <div>Qualifies a prospect or a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unqualify</div>
  <div>Unqualifies a prospect or a company.</div>
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
          <title>Growbots</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
