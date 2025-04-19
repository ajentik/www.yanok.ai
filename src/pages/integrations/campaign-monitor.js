import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Campaign Monitor"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/campaign-monitor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Campaign Monitor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(114, 208, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Campaign Monitor is an email marketing tool built for designers. Campaign Monitor makes it easy to send beautiful emails, manage lists and subscribers, and track the results of your campaigns.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bounce</div>
  <div>Triggers when an campaign email to someone bounces (ie. could not be delivered).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Click Through</div>
  <div>Triggers when someone clicks through an email from one of your Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a client is added to Campaign Monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a list is added for a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Open</div>
  <div>Triggers when someone opens an email from one of your Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bounced Transactional Message</div>
  <div>Triggers when a transactional message bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribe</div>
  <div>Triggers when a someone unsubscribes from a list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Smart Transactional Email</div>
  <div>Sends a smart transactional email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber</div>
  <div>Create a new subscriber on a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe</div>
  <div>Remove a subscriber from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber</div>
  <div>Update a subscriber on a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscriber</div>
  <div>Find a subscriber by email within a given list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscriber</div>
  <div>Find or Create Subscriber</div>
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
          <title>Campaign Monitor</title>
        </>
      ),
    },
  };
}
