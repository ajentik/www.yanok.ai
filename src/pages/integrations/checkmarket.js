import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CheckMarket"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/checkmarket.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CheckMarket Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 76, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CheckMarket is an enterprise web-based survey tool. There are many low cost (free) survey tools out there. What makes CheckMarket different is its focus on enterprise users and their special needs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">API Throttling Limit Reached</div>
  <div>Triggers when the throttling limit for your API requests has been reached.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Panelist Unsubscribed</div>
  <div>Triggers when a panelists chooses to opt out of receiving further emails from the sender.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Panelist Bounced</div>
  <div>Triggers when an email invitation for a panelist has bounced.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Complete Respondent</div>
  <div>Triggers when a respondent has completed a survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Partial Respondent</div>
  <div>Triggers when a respondent has submitted a page, occurs for each page a respondent completes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Survey Invitation</div>
  <div>Add a new panelist to your survey. If your survey is Live and the CheckMarket email channel is active, a survey invitation will be automatically sent.</div>
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
          <title>CheckMarket</title>
        </>
      ),
    },
  };
}
