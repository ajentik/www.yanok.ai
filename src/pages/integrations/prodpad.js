import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProdPad"
      description={`ProdPad is a tool that helps you achieve better products through better product management.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/prodpad.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProdPad Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(53, 155, 180, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ProdPad is a tool that helps you achieve better products through better product management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">List Idea Feedback</div>
  <div>Lists the feedback associated to a specific idea.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Companies</div>
  <div>List the Companies in ProdPad</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Contacts</div>
  <div>Return a list of Contacts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Feedback</div>
  <div>Return a list of feedback. The feedback is ordered by the most recent first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Ideas</div>
  <div>List Ideas and filter on various parameters such as workflow stage, tags, products, personas and external IDs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Personas</div>
  <div>List the personas in an account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Products</div>
  <div>List all the products in the account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Tags</div>
  <div>List all the tags available in the account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List User Stories</div>
  <div>Returns a list of user stories with newest first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pushed Idea</div>
  <div>Triggers when an idea is pushed to Zapier from with ProdPad</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pushed User Story</div>
  <div>Triggers when a user story is pushed to Zapier from with ProdPad</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a company in the feedback module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a Contact for feedback</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Feedback</div>
  <div>Create new feedback</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Idea</div>
  <div>Create a New Idea</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update existing company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update an existing Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Feedback</div>
  <div>Update an existing piece of feedback</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Idea Stage</div>
  <div>Update the stage of an idea in ProdPad</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find an existing company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Feedback</div>
  <div>Find a feedback based on external_id or url.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Idea</div>
  <div>Find an an existing idea.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find an existing company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Feedback</div>
  <div>Find a feedback based on external_id or url.</div>
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
          <title>ProdPad</title>
          <meta name="description" content={`ProdPad is a tool that helps you achieve better products through better product management.`} />
        </>
      ),
    },
  };
}
