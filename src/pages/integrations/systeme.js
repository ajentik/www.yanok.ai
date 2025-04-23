import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Systeme.io"
      description={`Systeme.io allows you to build sales funnels, send emails and automate your entire business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/systeme.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Systeme.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 160, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Systeme.io allows you to build sales funnels, send emails and automate your entire business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Campaign</div>
  <div>Triggers when a contact completes a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Optin</div>
  <div>Triggers when a visitor opts-in on your page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a new sale is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webinar Registration</div>
  <div>Triggers when a new visitor registers for a webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Added to Contact</div>
  <div>Triggers when a tag is added to contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Contact, Including Adding Tags</div>
  <div>Creates or updates a contact, including adding tags</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Contact and Grant Access to Course</div>
  <div>Creates or updates a contact and grant access to course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag</div>
  <div>Removes tag from a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Access to Course</div>
  <div>Revoke access to course for particular contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Campaign</div>
  <div>Subscribes a contact to campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe From Campaign</div>
  <div>Unsubscribes a contact from campaign</div>
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
          <title>Systeme.io</title>
          <meta name="description" content={`Systeme.io allows you to build sales funnels, send emails and automate your entire business.`} />
        </>
      ),
    },
  };
}
