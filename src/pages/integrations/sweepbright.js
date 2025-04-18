import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SweepBright"
      description="SweepBright lets real estate professionals organize and promote listings, match them with leads, and close the deal—all from their phone."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sweepbright.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SweepBright Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 168, 230, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SweepBright lets real estate professionals organize and promote listings, match them with leads, and close the deal—all from their phone.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Non-Exclusive Agreement</div>
  <div>Triggers when a Non-Exclusive Agreement document is requested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Created or Updated</div>
  <div>Triggers when a is created and/or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Interaction Registered for Lead</div>
  <div>Triggers when a new interaction is registered for a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Feedback Added to Interaction</div>
  <div>Triggers when feedback is added to an interaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when a lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Visit Scheduled</div>
  <div>Triggers when a new visit has been scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Valuation</div>
  <div>Triggers when a valuation document is requested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Exclusive Agreement</div>
  <div>Triggers when an Exclusive Agreement document is requested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Property Sheet</div>
  <div>Triggers when a Property Sheet document is requested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Accepted</div>
  <div>Triggers when an Offer is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Archived</div>
  <div>Triggers when an Offer is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Cancelled</div>
  <div>Triggers when an Offer is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Changed</div>
  <div>Triggers when an Offer is changed in any way.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Created</div>
  <div>Triggers when an Offer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Refused</div>
  <div>Triggers when an Offer is refused.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Restored</div>
  <div>Triggers when an Offer is restored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer Updated</div>
  <div>Triggers when an Offer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Property Folder</div>
  <div>Triggers when a Property folder document is requested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Status Changed</div>
  <div>Triggers when property status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Requested: Lease or Purchase Agreement</div>
  <div>Triggers when a Lease or Purchase Agreement document is requested.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Offer</div>
  <div>Accepts an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Offer</div>
  <div>Archives an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Offer</div>
  <div>Cancels an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in SweepBright.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead in SweepBright.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Offer</div>
  <div>Creates a new offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Property</div>
  <div>Creates a new property in SweepBright.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Contact to Property</div>
  <div>Links a contact to property as buyer or seller.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refuse Offer</div>
  <div>Refuses an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Restore Offer</div>
  <div>Restores an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Offer</div>
  <div>Updates an existing offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds existing or creates a new contact in SweepBright.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Property</div>
  <div>Find an existing property in your SweepBright company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Offer</div>
  <div>Gets an offer by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Or Create Contact</div>
  <div>Finds existing or creates a new contact in SweepBright.</div>
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
          <title>SweepBright</title>
          <meta name="description" content="SweepBright lets real estate professionals organize and promote listings, match them with leads, and close the deal—all from their phone." />
        </>
      ),
    },
  };
}
