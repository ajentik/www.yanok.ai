import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ServicePRO"
      description="ServicePRO is a powerful Collaborative Workflow and Service Management System that delivers Return on Investment. Requires 14.2.16.50 or above version of ServicePRO."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/servicepro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ServicePRO Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 172, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ServicePRO is a powerful Collaborative Workflow and Service Management System that delivers Return on Investment. Requires 14.2.16.50 or above version of ServicePRO.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Memo in Service Request</div>
  <div>Add memos to the request in ServicePRO</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Request Status</div>
  <div>Change the status of request in ServicePRO</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Request</div>
  <div>Search request using id, please check API user guide for more details (</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User</div>
  <div>Search user by email address, please check API user guide for more details (</div>
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
          <title>ServicePRO</title>
          <meta name="description" content="ServicePRO is a powerful Collaborative Workflow and Service Management System that delivers Return on Investment. Requires 14.2.16.50 or above version of ServicePRO." />
        </>
      ),
    },
  };
}
