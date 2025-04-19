import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Drip"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/drip.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Drip Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(158, 58, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Automate your ecommerce marketing at scale. Drip is your ecommerce marketing engine. Build personalized customer experiences, drive more revenue, and take your marketing strategy to the next level with Drip.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber Tag</div>
  <div>Triggers when a new tag is applied to a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Bounced</div>
  <div>Triggers when an email to a subscriber bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Click</div>
  <div>Triggers when a subscriber clicks an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Trigger Link Click</div>
  <div>Triggers when a subscriber clicks a trigger link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Complained</div>
  <div>Triggers when a subscriber issues a spam complaint about an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Campaign</div>
  <div>Triggers when a subscriber completes a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Event</div>
  <div>Triggers when a subscriber performs a custom event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Open</div>
  <div>Triggers when a subscriber opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber Tag</div>
  <div>Triggers when a tag is removed from a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Campaign Subscription</div>
  <div>Triggers when a subscriber is removed from a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Subscription</div>
  <div>Triggers when a subscriber is added to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Global Unsubscribe</div>
  <div>Triggers when a subscriber unsubscribes from all mailings.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Unsubscribe</div>
  <div>Triggers when a subscriber unsubscribes from a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Field</div>
  <div>Triggers when a subscriber custom field is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Page Visit</div>
  <div>Triggers when a subscriber visits a page that is bound to an automation rule trigger.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Subscriber</div>
  <div>Adds a tag to a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Event</div>
  <div>Creates an event for a subscriber (e.g. "Signed up for a trial").</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Subscriber</div>
  <div>Removes a tag from a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Campaign</div>
  <div>Subscribes someone to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Campaign</div>
  <div>Unsubscribes someone from one (or all) of their campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Subscriber</div>
  <div>Creates a new subscriber or update an existing one.</div>
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
          <title>Drip</title>
        </>
      ),
    },
  };
}
