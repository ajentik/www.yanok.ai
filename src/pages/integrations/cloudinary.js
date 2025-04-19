import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cloudinary"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cloudinary.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cloudinary Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(27, 97, 151, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cloudinary makes it easy to upload, store, manage, manipulate and deliver images and videos efficiently and effectively.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Uploaded Resource</div>
  <div>Triggers when a new resource is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tagged Resource</div>
  <div>Triggers when a new resource is uploaded and is tagged with a given tag.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Transform Resource</div>
  <div>Creates a Cloudinary URL that can be used to transform, manipulate, and share the resource.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Resource</div>
  <div>Uploads a new resource to your Cloudinary account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Resource (Advanced)</div>
  <div>Uploads a new resource to your Cloudinary account. This advanced action includes additional upload parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Usage Report</div>
  <div>Creates a report on the status of your Cloudinary account usage details, including storage, bandwidth, requests, number of resources, and add-on usage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload new image</div>
  <div>Upload new image</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload new image</div>
  <div>Upload new image</div>
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
          <title>Cloudinary</title>
        </>
      ),
    },
  };
}
