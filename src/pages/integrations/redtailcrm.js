import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Redtail CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/redtailcrm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Redtail CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(136, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Redtail CRM is cost-effective, easy to use, cloud based solution for today’s financial professional. Packed with powerful features for activity management, office automation, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity Created</div>
  <div>Triggers when a new activity is created in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Deleted</div>
  <div>Triggers when an activity is deleted in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Updated</div>
  <div>Triggers when an activity is updated in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Deleted</div>
  <div>Triggers when a new contact is deleted in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when an existing contact is updated in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Created</div>
  <div>Triggers when a new opportunity is created in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Deleted</div>
  <div>Triggers when an opportunity is deleted in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Updated</div>
  <div>Triggers when an opportunity is updated in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Step Completed</div>
  <div>Triggers when a Workflow Step is completed in your database .</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Step Task Completed</div>
  <div>Triggers when a Workflow Step Task is completed in your database.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new opportunity in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Updates and existing activity in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates an existing opportunity in your database.</div>
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
          <title>Redtail CRM</title>
        </>
      ),
    },
  };
}
