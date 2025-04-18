import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rival"
      description="Rival is a mobile-first, insight community platform that market researchers use to uncover actionable insights fast and effectively."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rival.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rival Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 78, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rival is a mobile-first, insight community platform that market researchers use to uncover actionable insights fast and effectively.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Chat Response</div>
  <div>Triggers when a participant completes the chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Chat Response for Qualified Participant</div>
  <div>Triggers when a participant crosses a completion participation marker in the chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Chat Response for Disqualified Participant</div>
  <div>Triggers when a participant crosses a disqualified participation marker in the chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Question Response</div>
  <div>Triggers when a new response is received for a question.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Profile Attribute Changed</div>
  <div>Triggers when a single system or custom profile attribute is changed from one value to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Profile Changed</div>
  <div>Triggers when any profile attribute is changed from one value to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Participant Added</div>
  <div>Triggers when a new participant subscribes to the research domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Unsubscribed</div>
  <div>Triggers when a participant unsubscribes to the research domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Declines Invitation</div>
  <div>Triggers when a participant declines the recontact card.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Rival</title>
          <meta name="description" content="Rival is a mobile-first, insight community platform that market researchers use to uncover actionable insights fast and effectively." />
        </>
      ),
    },
  };
}
