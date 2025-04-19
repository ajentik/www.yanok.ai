import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SurveyMonkey"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/surveymonkey.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SurveyMonkey Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 191, 111, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SurveyMonkey is the easiest way to create surveys and get answers. SurveyMonkey lets you whip up a survey quickly and get targeted answers from the audience you want to ask.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Response Notification</div>
  <div>Triggers a notification when your survey is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Response Notification With Answers</div>
  <div>Triggers a notification when your survey is completed and sends the entire response. Only for SurveyMonkey annual paid users.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in your address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Survey</div>
  <div>Send a survey invitation to one or more contacts and/or emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Collector</div>
  <div>Find a collector for one of your surveys.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find one of your address book contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Survey</div>
  <div>Find one of your surveys.</div>
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
          <title>SurveyMonkey</title>
        </>
      ),
    },
  };
}
