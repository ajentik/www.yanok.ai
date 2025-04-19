import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Adobe Creative Cloud Libraries"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/creative-cloud-libraries.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Adobe Creative Cloud Libraries Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 38, 38, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Adobe Creative Cloud Libraries makes the core design assets for your brand or personal projects available to you anywhere. Easily collect and organize images, colors, text styles, and other elements created in various Creative Cloud desktop and mobile apps. Then reuse and modify these assets across projects, devices, other Creative Cloud apps, and teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Collaborator Is Added</div>
  <div>Triggers when a new collaborator is added to a library.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Library Is Created</div>
  <div>Triggers when a new library is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Element in Library</div>
  <div>Triggers when a new element is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Existing Library Is Updated</div>
  <div>Triggers when a library is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Existing Element Is Updated</div>
  <div>Triggers when an element is updated in a library.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Upload Element</div>
  <div>Upload an element (&lt;10Mb).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check Status of Upload Element Job</div>
  <div>Check status of upload element job.</div>
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
          <title>Adobe Creative Cloud Libraries</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
