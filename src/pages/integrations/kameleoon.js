import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kameleoon"
      description="Kameleoon's powerful and easy-to-use A/B testing, full stack, and AI-powered personalization solutions help marketers, product owners, and developers maximize customer engagement and conversion - all from a single platform."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kameleoon.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kameleoon Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(153, 153, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kameleoon\'s powerful and easy-to-use A/B testing, full stack, and AI-powered personalization solutions help marketers, product owners, and developers maximize customer engagement and conversion - all from a single platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Experiment Updated</div>
  <div>Triggers when any experiment (A/B test) status has been updated in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feature Flag Inactive</div>
  <div>Triggers when Feature Flags are ready to remove from your code base.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feature Flag Updated</div>
  <div>Triggers when a new Feature Flag is created, paused, activated or stopped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Kameleoon Script Updated</div>
  <div>Triggers when the Kameleoon application script (kameleoon.js) has been updated in production.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Site Created</div>
  <div>Triggers when a new site has been added to your Kameleoon account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activate Experiment</div>
  <div>Activates an experiment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rollout Feature Flag</div>
  <div>Activates and rollout a Feature Flag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Experiment</div>
  <div>Pauses the Experiment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Feature Flag</div>
  <div>Rollback and pauses a Feature Flag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resume Experiment</div>
  <div>Resumes a paused experiment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resume Feature Flag</div>
  <div>Resumes and rollout a Feature Flag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rollback Feature Flag</div>
  <div>Rollback and disables a Feature Flag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Experiment</div>
  <div>Stops an Experiment.</div>
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
          <title>Kameleoon</title>
          <meta name="description" content="Kameleoon's powerful and easy-to-use A/B testing, full stack, and AI-powered personalization solutions help marketers, product owners, and developers maximize customer engagement and conversion - all from a single platform." />
        </>
      ),
    },
  };
}
