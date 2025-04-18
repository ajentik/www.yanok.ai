import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sender"
      description="Sender is an amazing email marketing application."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sender.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sender Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 141, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sender is an amazing email marketing application.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers when a new campaign is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber in Group</div>
  <div>Triggers when subscriber is added to group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when a subscriber unsubscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber From Group</div>
  <div>Triggers when a subscriber is removed from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscriber</div>
  <div>Triggers when a subscriber is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add / Update Subscriber</div>
  <div>Adds a new subscriber. If subscriber with the same email exists, updates the subscriber\'s data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber to Group</div>
  <div>Adds a subscriber to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Creates a draft campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber From Group</div>
  <div>Removes a subscriber from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>Sends a draft campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Email</div>
  <div>Unsubscribes an email address.</div>
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
          <title>Sender</title>
          <meta name="description" content="Sender is an amazing email marketing application." />
        </>
      ),
    },
  };
}
