import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Acute"
      description="Acute is a customer feedback management tool that helps businesses better understand their users needs, prioritize feedback, and keep customers in the loop."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/acute.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Acute Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(68, 0, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Acute is a customer feedback management tool that helps businesses better understand their users needs, prioritize feedback, and keep customers in the loop.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment has been added to a feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation Added to a Feedback Post</div>
  <div>Triggers when a new conversation has been added to a feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feedback</div>
  <div>Triggers when there is a new feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feedback Status Change</div>
  <div>Triggers when a new status has been assigned to a feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Feedback Post</div>
  <div>Triggers when a new tag has been added to a feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Vote</div>
  <div>Triggers when a new upvote has been added to a feedback post.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Feedback Status</div>
  <div>Changes a feedback post\'s status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Feedback</div>
  <div>Searches for one or more feedback posts</div>
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
          <title>Acute</title>
          <meta name="description" content="Acute is a customer feedback management tool that helps businesses better understand their users needs, prioritize feedback, and keep customers in the loop." />
        </>
      ),
    },
  };
}
