import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OneNote"
      description={`Microsoft OneNote is a note-taking app that makes it easy to capture and save ideas, images, audio recordings, and anything else you need to remember.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onenote.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OneNote Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(126, 56, 120, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Microsoft OneNote is a note-taking app that makes it easy to capture and save ideas, images, audio recordings, and anything else you need to remember.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Note in Section</div>
  <div>Triggers when a new note is created in a notebook/section.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Append Note</div>
  <div>Appends content to the end of a note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Image Note</div>
  <div>Creates a note with an embedded image (must have a public URL to that image).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a new note in the "Quick Notes" section of your default notebook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note in Section</div>
  <div>Creates a new note in a specific Notebook/Section</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Page/Note From Url Link</div>
  <div>Given a URL, we\'ll download it and place it in your OneNote account!</div>
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
          <title>OneNote</title>
          <meta name="description" content={`Microsoft OneNote is a note-taking app that makes it easy to capture and save ideas, images, audio recordings, and anything else you need to remember.`} />
        </>
      ),
    },
  };
}
