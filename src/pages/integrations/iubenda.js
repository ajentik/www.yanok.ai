import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="iubenda"
      description={`With the iubenda Consent Solution you can record and manage GDPR consent and privacy preferences for each of your users, integrating your consent collection forms, your legal documents and includes a user-friendly dashboard for reviewing consent records of your activities.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iubenda.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        iubenda Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(28, 198, 145, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">With the iubenda Consent Solution you can record and manage GDPR consent and privacy preferences for each of your users, integrating your consent collection forms, your legal documents and includes a user-friendly dashboard for reviewing consent records of your activities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Consent</div>
  <div>This action will create a new consent in the iubenda Consent Solution. The new consent automatically creates a new subject, available in the relative section of the dashboard. Each consent action contains all the information necessary to uniquely identify that specific consent, the subject who performed it, the preferences expressed with that consent, the legal notices the user has accepted, the proof (e.g. the form the user was presented with). If you\'re trying to edit the preferences of an existing subject, use the "Update a subject" action instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Preferences of a Subject</div>
  <div>Update the preferences of a given subject in iubenda Consent Solution. Any change in preferences requires a new consent, therefore this action will create a new consent for the existing subject.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Subject</div>
  <div>Use this action whenever you need to update a subject in the iubenda Consent Solution (e.g. change of the email address of the user). If you wish to update the preferences of a subject, you\'ll need to use the "Update preferences" action. Leave blank the fields you don\'t want to update.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify a Subject</div>
  <div>Use this action to update a subject when verified in iubenda Consent Solution, for instance via the double opt-in method. This action requires the subject has already been created.</div>
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
          <title>iubenda</title>
          <meta name="description" content={`With the iubenda Consent Solution you can record and manage GDPR consent and privacy preferences for each of your users, integrating your consent collection forms, your legal documents and includes a user-friendly dashboard for reviewing consent records of your activities.`} />
        </>
      ),
    },
  };
}
