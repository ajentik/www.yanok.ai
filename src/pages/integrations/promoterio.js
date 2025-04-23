import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Promoter.io"
      description={`Promoter.io is the easiest and most effective way to measure and track customer loyalty using the Net Promoter System®.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/promoterio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Promoter.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(10, 74, 127, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Promoter.io is the easiest and most effective way to measure and track customer loyalty using the Net Promoter System®.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed</div>
  <div>Triggers when a surveyed contact has unsubscribed from email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feedback Submitted or Updated</div>
  <div>Triggers when a contact has submitted a score and/or left a comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feedback Deleted</div>
  <div>Triggers when a member deletes feedback from a campaign (via the responses view).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">NPS Score Changed</div>
  <div>Whenever the NPS score for any campaign changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Feedback Status</div>
  <div>Change status of feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update a Contact</div>
  <div>Add or update a contact in your Promoter.io account. You can also associate a contact to a contact list for usage with a campaign. All custom attributes you send are saved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Forward a Feedback</div>
  <div>Forward a feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply to a Feedback</div>
  <div>Reply to a Feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Survey a Contact</div>
  <div>Deliver a Promoter.io survey to a contact you specify. Any contact you survey will also be added to your contact list and add all custom attributes you send. You can set a delivery delay in your campaign settings inside Promoter.io if you would prefer the contact to not receive a survey instantly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag a Feedback</div>
  <div>Adds a tag to a feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Contact</div>
  <div>Mark your contact as unsubscribed in your Promoter.io account. Surveys will no longer be sent to this contact.</div>
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
          <title>Promoter.io</title>
          <meta name="description" content={`Promoter.io is the easiest and most effective way to measure and track customer loyalty using the Net Promoter System®.`} />
        </>
      ),
    },
  };
}
