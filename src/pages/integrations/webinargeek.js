import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WebinarGeek"
      description={`WebinarGeek is easy-to-use webinar software with marketing tools and analytics.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/webinargeek.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WebinarGeek Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 165, 196, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WebinarGeek is easy-to-use webinar software with marketing tools and analytics.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assessment Passed</div>
  <div>Triggers when a viewer passes the assessment for a webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribed From Webinar</div>
  <div>Triggers when someone unsubscribes from a webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a payment is completed successfully for your webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when someone subscribers to a webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Replay Watched</div>
  <div>Triggers when someone starts watching a replay.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Watched</div>
  <div>Triggers when someone starts watching a live, automated or on demand webinar.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to a Single Webinar</div>
  <div>Registers someone for your webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to a Series of Webinars</div>
  <div>Register someone to all webinars in the webinar series. If one of the webinars in the series has multiple broadcasts, the contact will be subscribed to the first upcoming one.</div>
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
          <title>WebinarGeek</title>
          <meta name="description" content={`WebinarGeek is easy-to-use webinar software with marketing tools and analytics.`} />
        </>
      ),
    },
  };
}
