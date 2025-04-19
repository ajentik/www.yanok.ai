import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Twist"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/twist.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Twist Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 111, 234, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Twist keeps your conversations on-topic and in one place. For teams who want to make work calmer, more organized, and more productive.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment Posted in Thread</div>
  <div>Triggers when a new comment is added in a thread.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted in Conversation</div>
  <div>Triggers when a new message is added anywhere inside a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Thread Added to Channel</div>
  <div>Triggers when a new thread is added to a channel.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Post Comment</div>
  <div>Post a comment to a thread you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Message</div>
  <div>Post a message to a conversation you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Thread</div>
  <div>Post a thread to a channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Comment by Id</div>
  <div>Finds a comment by matching against the id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message by Id</div>
  <div>Finds a message by matching against the id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Thread</div>
  <div>Finds a thread inside a team by matching against a text query.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Thread by Id</div>
  <div>Finds a thread by matching against the id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Id</div>
  <div>Finds a user by matching against their id.</div>
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
          <title>Twist</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
