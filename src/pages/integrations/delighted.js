import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Delighted"
      description="Delighted is the easiest and most beautiful way to measure customer happiness."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/delighted.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Delighted Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(133, 102, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Delighted is the easiest and most beautiful way to measure customer happiness.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Response</div>
  <div>Triggers when a new response is received in this Delighted Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribe</div>
  <div>Triggers when a person unsubscribes from Delighted surveys.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Person to Email Autopilot</div>
  <div>Adds a person to the Email platform Autopilot list and schedules a survey for future sending. Updates the person\'s properties if the person is already in the Autopilot list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person to SMS Autopilot</div>
  <div>Adds a person to the SMS platform Autopilot list and schedules a survey for future sending. Updates the person\'s properties if the person is already in the Autopilot list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person</div>
  <div>Creates a person in Delighted but does not send a survey. Only use this Action if you plan on programmatically adding responses to Delighted. Otherwise, use our Actions for "Send Email Survey" or "Send SMS Survey" to actually dispatch a survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Response</div>
  <div>Creates a response in Delighted. This should only be used if programmatically adding responses to Delighted (ex. using our Add Person + Add Response Zaps). Otherwise, use our "Send Email Survey" or "Send SMS Survey" Actions to dispatch a survey. Adding responses requires a person ID and score at minimum.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Person From Email Autopilot</div>
  <div>Removes a person from the Email platform Autopilot list and cancels all related scheduled surveys. Does not affect any historical responses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Person From SMS Autopilot</div>
  <div>Removes a person from the SMS platform Autopilot list and cancels all related scheduled surveys. Does not affect any historical responses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email Survey</div>
  <div>Sends an Email platform survey</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS Survey</div>
  <div>Send SMS platform survey</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Person</div>
  <div>Add a person to your unsubscribe list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a Person record in your Delighted instance. Not required if you\'re adding a person using the "Add Person" Action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Autopilot Configuration</div>
  <div>Retrieves the current Autopilot configuration for the desired platform (Email or SMS).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List People in Autopilot</div>
  <div>List all Autopilot memberships for the desired platform (Email or SMS), or list the Autopilot membership status for one specific person within the desired platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Response Metrics</div>
  <div>Provides your account\'s metrics for a specific Project. By default, we\'ll return results based on your</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Finds a Person record in your Delighted instance. Not required if you\'re adding a person using the "Add Person" Action.</div>
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
          <title>Delighted</title>
          <meta name="description" content="Delighted is the easiest and most beautiful way to measure customer happiness." />
        </>
      ),
    },
  };
}
