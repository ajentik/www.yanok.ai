import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pelcro"
      description="Pelcro is a subscription and membership management platform"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pelcro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pelcro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 174, 161, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pelcro is a subscription and membership management platform</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a user registers via the Pelcro Platform. This means that a customer record exists in Pelcro and has a unique email address, password, and customer ID associated to it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a user is updated or edited via the Pelcro Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Created</div>
  <div>Triggers when a newsletter is created on the Pelcro Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Updated</div>
  <div>Triggers when a newsletter is updated on the Pelcro Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Created</div>
  <div>Triggers when a new subscription occurs via the Pelcro Platform.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>The create_customer action is to create a customer on the Pelcro Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Newsletter</div>
  <div>The create_newsletter action is to create a newsletter on the Pelcro Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>The create_subscription action is to create a subscription on the Pelcro Platform</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Newsletter</div>
  <div>The update_newsletter action is to update a newsletter on the Pelcro Platform</div>
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
          <title>Pelcro</title>
          <meta name="description" content="Pelcro is a subscription and membership management platform" />
        </>
      ),
    },
  };
}
