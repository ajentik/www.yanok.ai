import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Darwin CX"
      description="DarwinCX is an end-to-end SaaS customer data platform for magazine publishers and membership organizations."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/darwin-cx-ca115721.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Darwin CX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 62, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DarwinCX is an end-to-end SaaS customer data platform for magazine publishers and membership organizations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Subscription</div>
  <div>Triggers when a user subscribes to a newsletter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Unsubscription</div>
  <div>Triggers when a user unsubscribes to a newsletter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Activated</div>
  <div>Triggers when user\'s expiry date for a product is updated to one in the future.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deactivated</div>
  <div>Triggers when user\'s subscription for a specific product expires.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Create a product on the DarwinCX platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe User</div>
  <div>Subscribes a user in Darwin.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsuscribe User</div>
  <div>Unsubscribes a user in Darwin.</div>
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
          <title>Darwin CX</title>
          <meta name="description" content="DarwinCX is an end-to-end SaaS customer data platform for magazine publishers and membership organizations." />
        </>
      ),
    },
  };
}
