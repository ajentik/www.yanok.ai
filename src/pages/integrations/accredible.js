import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Accredible Certificates"
      description="Easily create and manage digital certificates & open badges for your events or courses. Let your alumni market your organisation."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/accredible.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Accredible Certificates Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 173, 156, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Easily create and manage digital certificates & open badges for your events or courses. Let your alumni market your organisation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Credential Published</div>
  <div>Triggers when a new credential is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Credential</div>
  <div>Triggers when a new credential is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Credential</div>
  <div>Creates a new certificate or badge.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Evidence - Transcript</div>
  <div>Creates a Transcript Evidence Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Credential</div>
  <div>Deleting an existing credential.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Credential</div>
  <div>Update an existing credential.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Credentials</div>
  <div>Finds existing credentials.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Groups</div>
  <div>Find an existing Group.</div>
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
          <title>Accredible Certificates</title>
          <meta name="description" content="Easily create and manage digital certificates & open badges for your events or courses. Let your alumni market your organisation." />
        </>
      ),
    },
  };
}
