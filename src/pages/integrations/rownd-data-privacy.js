import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rownd Data Privacy"
      description="Rownd is a data privacy platform that gives end-users and consumers the ability to redact their data."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rownd-data-privacy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rownd Data Privacy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(27, 2, 95, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rownd is a data privacy platform that gives end-users and consumers the ability to redact their data.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Visibility or Data Update</div>
  <div>Triggers when a new end-user is created or an end-user\'s information is updated for turned off.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Data From Rownd Record</div>
  <div>Creates or updates a Rownd record. Create a new Rownd account at</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Rownd User Data</div>
  <div>Creates a Rownd account or updates an existing record. If you do not pass a Rownd user into the user-id field, Rownd will create a new Rownd user and return a UUID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Rownd Personal Data</div>
  <div>Find a Rownd user-id via email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Rownd user records</div>
  <div>Find a Rownd user-id via email.</div>
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
          <title>Rownd Data Privacy</title>
          <meta name="description" content="Rownd is a data privacy platform that gives end-users and consumers the ability to redact their data." />
        </>
      ),
    },
  };
}
