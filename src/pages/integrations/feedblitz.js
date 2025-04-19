import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FeedBlitz"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/feedblitz.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FeedBlitz Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 136, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FeedBlitz is an all-in-one service combining email marketing, blog newsletter subscriptions, and RSS feed management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber Opted in to List</div>
  <div>Triggers when a new subscriber joins a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscriber Completed Funnel / Autoresponder / Drip Sequence</div>
  <div>Triggers when a subscriber finishes the sequence of articles and is no longer active on that sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscriber Unsubscribed From List</div>
  <div>Triggers when a subscriber unsubscribes from a list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Email Address to Group</div>
  <div>Adds an email address to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber</div>
  <div>Adds a new subscriber to a list. Dual opt-in is required and will be initiated by FeedBlitz.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Email Address to Suppression List</div>
  <div>Adds an email address to a suppression list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Email Address From Group</div>
  <div>Removes an email address from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Email Address From Suppression List</div>
  <div>Removes an email address from a suppression list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Subscriber</div>
  <div>Removes a subscriber from a list.</div>
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
          <title>FeedBlitz</title>
        </>
      ),
    },
  };
}
