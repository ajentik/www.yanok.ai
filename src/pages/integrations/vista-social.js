import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vista Social"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vista-social.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vista Social Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 99, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vista Social is an all-in-one social media management platform for brands and agencies</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Post Failed to Publish.</div>
  <div>Triggers when a post fails to publish.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Draft Is Created.</div>
  <div>Triggers when a new draft post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post Is Scheduled.</div>
  <div>Triggers when new post is scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post Is Published.</div>
  <div>Triggers when a new post is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Has Been Rejected.</div>
  <div>Triggers when a post was rejected by reviewer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Needs to Be Reviewed.</div>
  <div>Triggers when a scheduled post needs to be reviewed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Post</div>
  <div>Schedules a New Post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Profile and Schedule Post</div>
  <div>Finds a Profile</div>
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
          <title>Vista Social</title>
        </>
      ),
    },
  };
}
