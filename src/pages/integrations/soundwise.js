import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Soundwise"
      description={`Soundwise is a platform for selling audio courses, audiobooks, premium podcasts and other audio programs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/soundwise.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Soundwise Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(247, 107, 28, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Soundwise is a platform for selling audio courses, audiobooks, premium podcasts and other audio programs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Listener</div>
  <div>Triggers when a new listener signs up for a soundcast of yours.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribed Listener</div>
  <div>Triggers when a listener unsubscribed from a soundcast of yours.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Enroll/Update Listener in Soundcast</div>
  <div>Adds a listener\'s email address to a soundcast\'s invitee list, and sends an email to the listener with instructions to access the soundcast. If the email address is associated with an existing listener account on Soundwise, the listener will be automatically subscribed to the said soundcast. If the email address doesn\'t have a Soundwise account yet, the listener will be subscribed to the soundcast as soon as they create an account on Soundwise using the same email address. If the soundcast subscription is renewed periodically, the listener\'s subscription will be updated when their next subscription period starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Listener From Soundcast</div>
  <div>Remove a listener\'s access to a soundcast.</div>
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
          <title>Soundwise</title>
          <meta name="description" content={`Soundwise is a platform for selling audio courses, audiobooks, premium podcasts and other audio programs.`} />
        </>
      ),
    },
  };
}
