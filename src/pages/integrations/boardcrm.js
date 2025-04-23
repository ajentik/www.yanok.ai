import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BoardCRM"
      description={`Fresh and user-friendly CRM system of next-generation for effective small and medium-sized businesses: deal stats, sales pipeline, customer base (leads), form builder for collecting leads.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boardcrm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BoardCRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 47, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Fresh and user-friendly CRM system of next-generation for effective small and medium-sized businesses: deal stats, sales pipeline, customer base (leads), form builder for collecting leads.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Deal</div>
  <div>Triggers when a new comment is added to a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Deal</div>
  <div>Triggers when a new tag is added to a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expired Deal Deadline</div>
  <div>Triggers when a deal deadline is expired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lost Deal</div>
  <div>Triggers when a deal is failed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Deal Deadline</div>
  <div>Triggers when a deal deadline is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Successful Deal Deadline</div>
  <div>Triggers when a deal deadline is successful.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Triggers when a deal is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal Status</div>
  <div>Triggers when a deal status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Won Deal</div>
  <div>Triggers when a deal is successful.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Adds a Comment to a Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag</div>
  <div>Adds a Tag to a Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Deal Deadline</div>
  <div>Sets Deal Deadline</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Deal Status</div>
  <div>Changes a Deal Status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates a Deal Data</div>
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
          <title>BoardCRM</title>
          <meta name="description" content={`Fresh and user-friendly CRM system of next-generation for effective small and medium-sized businesses: deal stats, sales pipeline, customer base (leads), form builder for collecting leads.`} />
        </>
      ),
    },
  };
}
