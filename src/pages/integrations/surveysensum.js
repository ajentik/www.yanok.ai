import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SurveySensum"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/surveysensum.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SurveySensum Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 104, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SurveySensum offers an end to end Customer Experience Platform that measures and improves your CX metrics with CES, NPS, and CSAT surveys. It lets you gather customer feedback at all touchpoints and turn them into actionable insights. After receiving feedback it enables you to prioritize actions to improve products or services and proactively reduce churn and drive growth. Also, its Conversation Analysis platform allows you to discover new trends and insights with real-time text and sentiment analysis on qualitative voice of the customer data from sources like Chat bot conversations, app store reviews, social media etc and save hours of manual data processing with automated feedback tagging.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Contacts</div>
  <div>List of contacts present in the user account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Email Templates</div>
  <div>Returns the list of email templates present in user account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Response</div>
  <div>Triggered when a new Response is captured in a survey</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Share</div>
  <div>This action enables user to create a new email Share</div>
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
          <title>SurveySensum</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
