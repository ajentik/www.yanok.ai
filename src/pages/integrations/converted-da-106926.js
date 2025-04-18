import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Badger Maps"
      description="Badger Maps is a sales productivity and planning app for outside salespeople."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/converted-da-106926.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Badger Maps Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 86, 72, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Badger Maps is a sales productivity and planning app for outside salespeople.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when you or a user you manage creates an Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Check-In</div>
  <div>Triggers when you or a user you manage checks-in at an Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Updated</div>
  <div>Triggers when you or a user you manage updates an Account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Check-In</div>
  <div>Creates a new Check-in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Updates an existing account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Find an existing Account in Badger by Account\'s Badger ID, External ID (ex: ID in your CRM), or other fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Email or ID</div>
  <div>Find an existing Badger User by User\'s email address or internal ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Find or Create Account</div>
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
          <title>Badger Maps</title>
          <meta name="description" content="Badger Maps is a sales productivity and planning app for outside salespeople." />
        </>
      ),
    },
  };
}
