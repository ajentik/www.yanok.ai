import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CustomerHub"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/customerhub.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CustomerHub Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 173, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sell your knowledge like a pro, in a jiffy. Publish your online course or membership site in 30 minutes or less using our powerful and easy platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Active</div>
  <div>Triggers when a user has been set to active.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Audio Listened</div>
  <div>Triggers when a user listens to an audio file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new user has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deleted</div>
  <div>Triggers when a user is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User File Downloaded</div>
  <div>Triggers when a user downloads a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Inactive</div>
  <div>Triggers when a user has been set to inactive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Login</div>
  <div>Triggers when a user has logged in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Page Completed</div>
  <div>Triggers when a user completes a page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Product Access Granted</div>
  <div>Triggers when a user has been given access to a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Product Access Removed</div>
  <div>Triggers when product access is removed from a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Product Completed</div>
  <div>Triggers when a user completes a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user has been updated in CustomerHub.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Video Watched</div>
  <div>Triggers when a user watches a video.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update User</div>
  <div>Creates or Updates User in CustomerHub. If Email exists, will update.</div>
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
          <title>CustomerHub</title>
        </>
      ),
    },
  };
}
