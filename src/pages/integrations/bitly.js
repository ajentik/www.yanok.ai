import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bitly"
      description={`Bitly is a link management and shortener platform.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bitly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bitly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bitly is a link management and shortener platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers when a new campaign is created in your Bitly account (This trigger is only available for Bitly Enterprise users).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bitlink</div>
  <div>Triggers when you create a new Bitlink.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Referring URL</div>
  <div>Triggers when a new referring URL appears in your link\'s click history.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Referring Domain</div>
  <div>Triggers when a new referring domain appears in your link\'s click history.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Bitlink</div>
  <div>Saves a Bitlink to your user history in Bitly. Returns a shortened URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bitlink</div>
  <div>Finds an existing Bitlink in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Bitlink</div>
  <div>Find or Create Bitlink</div>
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
          <title>Bitly</title>
          <meta name="description" content={`Bitly is a link management and shortener platform.`} />
        </>
      ),
    },
  };
}
