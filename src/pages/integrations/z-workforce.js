import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Z Workforce"
      description="Mobile field service. With a single tool companies can improve their performance of teams in the field, fulfill checklists and generate indicators on sales, products, services, customers, quality of service and even monitor competitor actions"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/z-workforce.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Z Workforce Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 95, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mobile field service. With a single tool companies can improve their performance of teams in the field, fulfill checklists and generate indicators on sales, products, services, customers, quality of service and even monitor competitor actions</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Field Person</div>
  <div>Recipe to create or update an app user profile (field person) in Z Workforce company account. Remember that profiles names, category, and subcategory fields can only be updated directly by API, not by Zapier recipes. The same is valid for configuring and updating the position of app users in the Z Workforce hierarchical tree.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Customer</div>
  <div>Recipe to create or update an app customer in the Z Workforce company account. Remember that category and subcategory fields can only be updated by APIs and Zapier recipes. You need to create them manually in the Z Workforce Panel first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Visits Results</div>
  <div>Get all information about completed visits by field team using Z Workforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Visits</div>
  <div>Recipie to to schedule visits in Z Workforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Specific Visit Result</div>
  <div>If you are looking for a specific result, get from here. You will need to know the Visit ID to generate by Z Workforce. This ID is called "xxxx" in the Results Visits request.</div>
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
          <title>Z Workforce</title>
          <meta name="description" content="Mobile field service. With a single tool companies can improve their performance of teams in the field, fulfill checklists and generate indicators on sales, products, services, customers, quality of service and even monitor competitor actions" />
        </>
      ),
    },
  };
}
