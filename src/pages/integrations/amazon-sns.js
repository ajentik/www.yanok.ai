import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Amazon SNS"
      description="Amazon Simple Notification Service is a flexible, and fast messaging service which is fully managed. SNS is a simple and cost-effective method to message both distributed services and human recipients."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/amazon-sns.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Amazon SNS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(218, 168, 53, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Amazon Simple Notification Service is a flexible, and fast messaging service which is fully managed. SNS is a simple and cost-effective method to message both distributed services and human recipients.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New JSON Message</div>
  <div>Triggers when a new JSON message is sent on a topic and parses the message body as JSON. Automatically manages the subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is sent on a topic. Automatically manages the subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when you add a new subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Topic</div>
  <div>Triggers when you add a new topic.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create JSON Message</div>
  <div>Create a new JSON message using data from the source trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Create a new message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Topic</div>
  <div>Create a new topic.</div>
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
          <title>Amazon SNS</title>
          <meta name="description" content="Amazon Simple Notification Service is a flexible, and fast messaging service which is fully managed. SNS is a simple and cost-effective method to message both distributed services and human recipients." />
        </>
      ),
    },
  };
}
