import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Custify"
      description="Custify is a customer success platform that helps you better meet customers' needs, reducing churn and increasing lifetime value."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/custify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Custify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 108, 187, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Custify is a customer success platform that helps you better meet customers\' needs, reducing churn and increasing lifetime value.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Company Enters Segment</div>
  <div>Triggers when a company enters the defined segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Leaves Segment</div>
  <div>Triggers when company leaves the defined segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Enters Segment</div>
  <div>Triggers when a person enters the defined segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Leaves Segment</div>
  <div>Triggers when a person leaves the defined segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Playbook Step</div>
  <div>Triggers when a person enters the selected playbook step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Playbook Step</div>
  <div>Triggers when a company enters the selected playbook step.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Event</div>
  <div>Send a new event for an existing person and/or, matched on user_id or email for people and company_id for companies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send NPS</div>
  <div>Send a new NPS for an existing person matched on user_id or email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Create a person entity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update a company based on company ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Update a person based on email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds a company by searching by company name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a person by searching for email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Finds a company by searching by company name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create People</div>
  <div>Finds a person by searching for email.</div>
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
          <title>Custify</title>
          <meta name="description" content="Custify is a customer success platform that helps you better meet customers' needs, reducing churn and increasing lifetime value." />
        </>
      ),
    },
  };
}
