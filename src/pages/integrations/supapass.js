import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SupaPass"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/supapass.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SupaPass Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 84, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Easily create a website & mobile app for all your content, community & paywall, with no-code.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Triggers when a Right To Be Forgotten Request removes a Contact from your SupaPass Dashboard. This deletes that Contact\'s data in your connected apps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Triggered when a Right To Be Forgotten Request removes a User from your SupaPass Dashboard. This deletes that User\'s data in your dashboard.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">End Subscription</div>
  <div>Triggers when a user\'s Subscription to one of your SupaPass products has expired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when someone completes your SupaPass contact form on the website.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Content</div>
  <div>Triggers when a new Content item is published in your SupaPass website or mobile app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a user subscribes to one of your SupaPass products.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new User registers in your SupaPass powered website or apps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when a User\'s data is updated in your SupaPass Dashboard.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>SupaPass</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
