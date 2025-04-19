import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vision6"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vision6.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vision6 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(230, 78, 36, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Grow your business with powerful email and SMS marketing by using Vision6. Trusted by thousands of small to large businesses, agencies, government and financial institutions, and nonprofit organizations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Reactivated</div>
  <div>Triggers when a contact was reactivated in a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Deactivated</div>
  <div>Triggers when a contact was deactivated from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Has Subscribed</div>
  <div>Triggers when a contact has subscribed to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Unsubscribed</div>
  <div>Triggers when a contact has unsubscribed from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Added</div>
  <div>Triggers when a new contact is added to a specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Updated</div>
  <div>Triggers when a contact is updated in a specified list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Contact</div>
  <div>Into a List you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe a Contact</div>
  <div>Subscribe a contact into your list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Contact</div>
  <div>From the List you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact</div>
  <div>Into a List you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deactivate a Contact</div>
  <div>From the List you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reactivate a Contact</div>
  <div>From the List you choose.</div>
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
          <title>Vision6</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
