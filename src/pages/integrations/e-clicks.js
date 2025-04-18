import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="e-clicks"
      description="E-clicks is a funnel builder tool to create lead and sales funnels and send emails"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/e-clicks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        e-clicks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 175, 80, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">E-clicks is a funnel builder tool to create lead and sales funnels and send emails</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleting a Relation</div>
  <div>Triggers when a relation is deleted, the data of deleted relation will be sent here.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submit</div>
  <div>Triggers when a form is submitted, few selected form data will be added to a zap and trigger \'Adding a new Relation\' trigger as well.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Adding a New Group</div>
  <div>Triggers when a new group added in ecickspro.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Adding a New Relation</div>
  <div>Triggers when a new relation added in ecickspro.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add to Group</div>
  <div>Add relation to group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email to Relations</div>
  <div>It will send email to a relation or relations selecting a group</div>
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
          <title>e-clicks</title>
          <meta name="description" content="E-clicks is a funnel builder tool to create lead and sales funnels and send emails" />
        </>
      ),
    },
  };
}
