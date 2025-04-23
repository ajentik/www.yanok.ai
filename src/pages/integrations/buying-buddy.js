import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Buying Buddy"
      description={`Buying Buddy is a real estate sales and marketing solution with IDX, lead capture and CRM for Agents and Teams.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/buying-buddy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Buying Buddy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 169, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Buying Buddy is a real estate sales and marketing solution with IDX, lead capture and CRM for Agents and Teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Email to Lead History</div>
  <div>Import an email to the History for an existing lead in your Buying Buddy account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead</div>
  <div>Create a new lead in your Buying Buddy account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Note to History for an Existing Lead</div>
  <div>Add a Note to the Lead\'s history for an Existing Lead in the LAC</div>
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
          <title>Buying Buddy</title>
          <meta name="description" content={`Buying Buddy is a real estate sales and marketing solution with IDX, lead capture and CRM for Agents and Teams.`} />
        </>
      ),
    },
  };
}
