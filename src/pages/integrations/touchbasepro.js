import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TouchBasePro"
      description="TouchBasePro is a email marketing tool to help you create beautiful email campaigns that will transform your brand."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/touchbasepro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TouchBasePro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(248, 175, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TouchBasePro is a email marketing tool to help you create beautiful email campaigns that will transform your brand.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when new subscriber is added to specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribed Subscriber</div>
  <div>Triggers when new subscriber is removed from specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscriber</div>
  <div>Triggers when subscriber is updated in specified list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber</div>
  <div>Adds new email subscriber to selected list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Subscriber</div>
  <div>Returns subscriber details for specified subscriber email address in provided subscriber list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Smart Email</div>
  <div>Sends smart transactional email based on existing template</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Subscriber</div>
  <div>Changes the status of specified active subscriber to an unsubscribed who will no longer receive campaigns sent to list that subscriber belongs to</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber</div>
  <div>Updates any aspect of an existing subscriber, such as email address, name, and custom field data (if provided)</div>
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
          <title>TouchBasePro</title>
          <meta name="description" content="TouchBasePro is a email marketing tool to help you create beautiful email campaigns that will transform your brand." />
        </>
      ),
    },
  };
}
