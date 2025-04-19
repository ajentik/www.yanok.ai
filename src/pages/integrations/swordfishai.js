import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Swordfish.ai"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/swordfishai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Swordfish.ai Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(245, 114, 21, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Swordfish AI is a contact finding tool for cell/mobile phone numbers and email addresses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Export Contact</div>
  <div>Triggers when selecting contacts and pressing \'Send to Zapier\'. You will first need to select the contacts you would like to export (zap) from the ALL list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Export Contact</div>
  <div>Triggers when selecting contacts and pressing \'Send to Zapier\'. You will first need to select the contacts you would like to export (zap) from the ALL list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Multiple Field Search</div>
  <div>Return contact data based on the data you have available (e.g. Name, Title/Company, Address/Location, Social profile, Email, Phones)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Social Profile Only Search</div>
  <div>Search Swordfish using only a social profile URL to get contact data for your profile</div>
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
          <title>Swordfish.ai</title>
        </>
      ),
    },
  };
}
