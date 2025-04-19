import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AWeber"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aweber.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AWeber Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(16, 115, 189, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AWeber provides professional email marketing software and services. AWeber\'s easy signup forms and autoresponders make it easy for you to stay in touch with your customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Field</div>
  <div>Triggers when a new custom field is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a new list is added to an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added to a list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Email</div>
  <div>Unsubscribes an email address from a list of your choosing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscriber</div>
  <div>Creates a new subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber</div>
  <div>Update a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscriber</div>
  <div>Find a subscriber by email or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a List</div>
  <div>Find a list by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscriber</div>
  <div>Finds or creates a specific find subscriber.</div>
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
          <title>AWeber</title>
        </>
      ),
    },
  };
}
