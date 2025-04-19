import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WordPress"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wordpress.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WordPress Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 117, 155, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WordPress is web software you can use to create a beautiful website or blog. Nearly 20% of the top 10 million websites and over 60 million people have chosen WordPress to power the place on the web they call "home".</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Media</div>
  <div>Triggers when a new media is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Post</div>
  <div>Triggers when a post is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Upload Media</div>
  <div>Upload a new media file, which can be used as featured media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Post</div>
  <div>Creates a new post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Post</div>
  <div>Updates a post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Post</div>
  <div>Finds a post.</div>
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
          <title>WordPress</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
