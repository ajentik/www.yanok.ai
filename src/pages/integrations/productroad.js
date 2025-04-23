import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Productroad"
      description={`Productroad is a tool to collect and manage feedback from users and vote for features.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/productroad.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Productroad Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 101, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Productroad is a tool to collect and manage feedback from users and vote for features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new feedback post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Upvote</div>
  <div>Triggers when a post is upvoted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Status Changed</div>
  <div>Triggers when status of post changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Post Status</div>
  <div>Change status of a post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Post</div>
  <div>Create a new feedback post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Post From Customer</div>
  <div>Create post on behalf of customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Post</div>
  <div>Find a Feedback Post</div>
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
          <title>Productroad</title>
          <meta name="description" content={`Productroad is a tool to collect and manage feedback from users and vote for features.`} />
        </>
      ),
    },
  };
}
