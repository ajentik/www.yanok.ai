import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Global IntelliSystems"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/global-intellisystems.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Global IntelliSystems Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 82, 155, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Global IntelliSystems is an email, mobile, and text marketing system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Autorespond Subscriber</div>
  <div>Triggers when a new subscriber is added to an autoresponder series.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Autorespond Unsubscriber</div>
  <div>Triggers when an autorespond subscriber unsubscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List Subscriber</div>
  <div>Triggers when a new subscriber is added to your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List Unsubscriber</div>
  <div>Triggers when a subscriber submits a unsubscribe request.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Subscriber</div>
  <div>Creates a new Subscriber or Updates an existing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscriber</div>
  <div>Removes a subscriber from your list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Autorespond Series</div>
  <div>Adds a subscriber to an autoresponder series.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Autorespond Series</div>
  <div>Removes email address from series</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>Sends a campaign to one recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Mail</div>
  <div>Sends an email to one recipient</div>
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
          <title>Global IntelliSystems</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
