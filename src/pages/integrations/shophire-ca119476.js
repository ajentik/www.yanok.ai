import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ShopHire"
      description={`ShopHire is a recruitment marketing and applicant tracking plugin for Shopify stores to promote their employer brand, post jobs and manage their hiring process.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shophire-ca119476.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ShopHire Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(155, 198, 161, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ShopHire is a recruitment marketing and applicant tracking plugin for Shopify stores to promote their employer brand, post jobs and manage their hiring process.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Application</div>
  <div>Triggers when a new application is submitted by a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Comment</div>
  <div>Triggers when a comment is added to a candidate\'s record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Opened</div>
  <div>Triggers when a new job is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Candidate Status</div>
  <div>Triggers when a candidate moves to a new status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Job to Closed</div>
  <div>Triggers when a job is moved to a closed status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Candidate</div>
  <div>Add\'s a new comment to a candidate\'s record in ShopHire</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Candidate Status</div>
  <div>Updates a candidate’s status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job Status</div>
  <div>Updates a job’s status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Finds a candidate by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Finds an opened or closed job by in your account by title.</div>
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
          <title>ShopHire</title>
          <meta name="description" content={`ShopHire is a recruitment marketing and applicant tracking plugin for Shopify stores to promote their employer brand, post jobs and manage their hiring process.`} />
        </>
      ),
    },
  };
}
