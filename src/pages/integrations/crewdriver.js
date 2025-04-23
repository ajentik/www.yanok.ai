import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CrewDriver"
      description={`CrewDriver is an automated employee shift fulfillment system for use alongside your workforce management software or as a stand-alone.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crewdriver.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CrewDriver Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(39, 107, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CrewDriver is an automated employee shift fulfillment system for use alongside your workforce management software or as a stand-alone.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Updates</div>
  <div>Triggers when a call is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Position Updates</div>
  <div>Triggers when a new position is created in CrewDriver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Worker Responses</div>
  <div>Triggers when a worker response is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Worker Job Call SMS\'s</div>
  <div>Triggers when a new sms is sent to worker</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contractor</div>
  <div>Adds new contractor in to your CrewDriver account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Response</div>
  <div>Sends job response when triggered</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Message Sending Hours</div>
  <div>Update the message sending hours</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check Workers Availability</div>
  <div>Checks for workers availability within a given date range</div>
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
          <title>CrewDriver</title>
          <meta name="description" content={`CrewDriver is an automated employee shift fulfillment system for use alongside your workforce management software or as a stand-alone.`} />
        </>
      ),
    },
  };
}
