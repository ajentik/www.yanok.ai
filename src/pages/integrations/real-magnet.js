import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Real Magnet"
      description="Real Magnet is a leading marketing automation platform that helps businesses attract, engage and deliver better email, marketing, social and mobile campaigns."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/real-magnet.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Real Magnet Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(19, 40, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Real Magnet is a leading marketing automation platform that helps businesses attract, engage and deliver better email, marketing, social and mobile campaigns.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lists</div>
  <div>Triggers when a new list item gets created in your Real Magnet account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient</div>
  <div>Triggers when a new recipient gets created in your Real Magnet account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscribes</div>
  <div>Triggers when a new unsubscribe event occurs in your Real Magnet account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient</div>
  <div>This action can be used to add a new recipient into your Real Magnet account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Recipient</div>
  <div>You can use this action to unsubscribe a recipient from your Real Magnet account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Existing Record</div>
  <div>This action can be used to update an existing record in Real Magnet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscription</div>
  <div>This action can be used to subscribe or unsubscribe recipient to the group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Recipient</div>
  <div>This action can be used to create new or update an existing record in Real Magnet.</div>
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
          <title>Real Magnet</title>
          <meta name="description" content="Real Magnet is a leading marketing automation platform that helps businesses attract, engage and deliver better email, marketing, social and mobile campaigns." />
        </>
      ),
    },
  };
}
