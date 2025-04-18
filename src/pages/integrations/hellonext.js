import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="hellonext"
      description="Gather feedback from your users in one place and analyze the next thing to build. Listen not only to your guts but also to your user voices."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hellonext.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        hellonext Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 85, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Gather feedback from your users in one place and analyze the next thing to build. Listen not only to your guts but also to your user voices.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>New Comment in the Organization Post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Trigger when a new post is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post in Private Board</div>
  <div>Triggers when a new post is created in a private board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post in Public Board</div>
  <div>Triggers when a new post is created in any of the public buckets</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Vote in Post</div>
  <div>Triggers when a new vote is made to a post in organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Approved</div>
  <div>Triggers when a post is approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Status Change</div>
  <div>Triggers when a post in the organization changes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Status Change in Private Board</div>
  <div>Triggers when a post\'s status is changed in a private board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Status Change in Public Board</div>
  <div>Triggers when the status of a post in public bucket changed</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Post</div>
  <div>Create a new post in hellonext</div>
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
          <title>hellonext</title>
          <meta name="description" content="Gather feedback from your users in one place and analyze the next thing to build. Listen not only to your guts but also to your user voices." />
        </>
      ),
    },
  };
}
