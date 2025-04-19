import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bark"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bark.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bark Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(45, 122, 241, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bark is a world-leading services marketplace with over 5m customers in 6 countries across the globe.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bark</div>
  <div>Triggers when a new Bark (lead) is submitted by a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchased Bark</div>
  <div>Triggers when you purchase a Bark.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Review</div>
  <div>Triggers when you receive a new review on your seller profile.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Bark</div>
  <div>Purchase an active Bark and get the customer\'s contact details. We\'ll email the customer to let them know you\'re interested in their business.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Note on Bark</div>
  <div>Set a note on Bark you\'ve purchased, to keep track of changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Quote on Bark</div>
  <div>Set a quote on a Bark that you\'ve purchased, and let the buyer know.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Skip Bark</div>
  <div>Mark a Bark as Not Interested, so that you do not see this Bark in your dashboard or in search results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Bark\'s Status</div>
  <div>Change the status of a Bark you\'ve purchased, to mark it as live, archived or hired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Bark</div>
  <div>Retrieve the latest details on a Bark by its ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Your Credit Balance</div>
  <div>Returns the number of credits you have available</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Purchased Bark</div>
  <div>Retrieve latest details on a Bark that you have purchased, including customer contact details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Barks</div>
  <div>Search for active Barks, optionally filtering by category, location and request age.</div>
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
          <title>Bark</title>
        </>
      ),
    },
  };
}
