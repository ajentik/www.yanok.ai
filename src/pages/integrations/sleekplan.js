import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sleekplan"
      description="Sleekplan is a customer feedback management tool that can easily be embedded in any web application. Use the widget to track suggestions, feedback, and bugs and discuss them with your customers. Plus, it' s easy to share a roadmap and keep a changelog."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sleekplan.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sleekplan Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 179, 164, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sleekplan is a customer feedback management tool that can easily be embedded in any web application. Use the widget to track suggestions, feedback, and bugs and discuss them with your customers. Plus, it\' s easy to share a roadmap and keep a changelog.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Comment</div>
  <div>Triggers when a comment is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Feedback</div>
  <div>Triggers when a feedback post is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Triggers when a user is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Changelog Subscriber</div>
  <div>Triggers when a user subscribes to the changelog.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Changelog Update</div>
  <div>Triggers when a new changelog update is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feedback</div>
  <div>Triggers when a new feedback post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feedback Subscription</div>
  <div>Triggers when a user subscribe to a feedback post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Satisfaction Survey</div>
  <div>Triggers when a user submits a satisfaction survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Comment</div>
  <div>Triggers when a is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Feedback</div>
  <div>Triggers when a feedback post is updated (Status changed, category changed, ...).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when a user is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feedback Vote</div>
  <div>Triggers when a user upvote or downvote a feedback post.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Changelog Update</div>
  <div>Creates a new Changelog Update</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Feedback</div>
  <div>Creates a Feedback Post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Feedback</div>
  <div>Updates a Feedback Post</div>
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
          <title>Sleekplan</title>
          <meta name="description" content="Sleekplan is a customer feedback management tool that can easily be embedded in any web application. Use the widget to track suggestions, feedback, and bugs and discuss them with your customers. Plus, it' s easy to share a roadmap and keep a changelog." />
        </>
      ),
    },
  };
}
