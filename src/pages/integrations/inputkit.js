import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="InputKit"
      description={`InputKit is a customer feedback software that helps B2B and B2C companies around the world streamline their customer satisfaction follow-up process. InputKit offers multiple tools to help businesses grow: Customer Feedback Surveys, Net Promoter Score, Online Reviews, Cross-Sales and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/inputkit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        InputKit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 102, 167, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">InputKit is a customer feedback software that helps B2B and B2C companies around the world streamline their customer satisfaction follow-up process. InputKit offers multiple tools to help businesses grow: Customer Feedback Surveys, Net Promoter Score, Online Reviews, Cross-Sales and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Cross-Sell Form</div>
  <div>Triggers when a customer completes a cross-sell form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Form</div>
  <div>Triggers when a customer completes a form.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send a Sequence by Email</div>
  <div>Sends a sequence by email to a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Search for customer by ID or Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find organization customers</div>
  <div>Search for customers for an organization (Name or ID)</div>
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
          <title>InputKit</title>
          <meta name="description" content={`InputKit is a customer feedback software that helps B2B and B2C companies around the world streamline their customer satisfaction follow-up process. InputKit offers multiple tools to help businesses grow: Customer Feedback Surveys, Net Promoter Score, Online Reviews, Cross-Sales and more.`} />
        </>
      ),
    },
  };
}
