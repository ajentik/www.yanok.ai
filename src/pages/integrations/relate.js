import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Relate"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/relate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Relate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(24, 144, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Relate is a simple collaborative sales and CRM software.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created. Return contact data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Deleted</div>
  <div>Triggers when a contact is deleted. Return contact data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated. Return contact data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Assignee Updated</div>
  <div>Triggers when a deal assignee is updated. Return deal data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Created</div>
  <div>Triggers when a new deal is created. Return deal data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Deleted</div>
  <div>Triggers when a deal is deleted. Return deal data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Status Updated</div>
  <div>Triggers when a deal status is updated. Return deal data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Updated</div>
  <div>Triggers when a deal is updated. Return deal data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organization Assignee Updated</div>
  <div>Triggers when the assignee of the organization is updated. Return organization data with the last assignee of the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a new lead is created. Return lead data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Deleted</div>
  <div>Triggers when a lead is deleted. Return lead data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organization Status Updated</div>
  <div>Triggers when the status of the organization is updated. Return organization data with the last status of the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when an exist lead is updated. Return lead data with custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Created</div>
  <div>Triggers when a new note is created. Return note data with custom fields of related lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Deleted</div>
  <div>Triggers when a note is deleted. Return note data with custom fields of related lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Updated</div>
  <div>Triggers when a note is updated. Return note data with custom fields of related lead.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Generate Lead & Contact</div>
  <div>Generate a new lead(organization) with contact</div>
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
          <title>Relate</title>
        </>
      ),
    },
  };
}
