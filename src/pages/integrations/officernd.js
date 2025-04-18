import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OfficeRnD"
      description="OfficeRnD is a workspace management platform helping Coworking Spaces and Business Centers automate operations and improve members experience. The platform acts like a central hub that connects to and manages all systems already in place, saving space operators time and allowing them to focus only on the highest leverage activities."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/officernd.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OfficeRnD Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 62, 75, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OfficeRnD is a workspace management platform helping Coworking Spaces and Business Centers automate operations and improve members experience. The platform acts like a central hub that connects to and manages all systems already in place, saving space operators time and allowing them to focus only on the highest leverage activities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contract</div>
  <div>Triggers when a new contract is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Membership</div>
  <div>Triggers when a new membership is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Status Updated</div>
  <div>Triggers when member\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new post is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a new booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create One-Off Fee</div>
  <div>Creates a new one-off fee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a new member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Membership</div>
  <div>Creates a new membership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates an opportunity for a new member. This action allows creating a new company as well.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Post</div>
  <div>Creates a new post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Booking</div>
  <div>Updates a booking by specified ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Booking</div>
  <div>Find booking by id or reference</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Find member by id, name, or email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location</div>
  <div>Find location by id, name or city</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find company by id, name, or email</div>
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
          <title>OfficeRnD</title>
          <meta name="description" content="OfficeRnD is a workspace management platform helping Coworking Spaces and Business Centers automate operations and improve members experience. The platform acts like a central hub that connects to and manages all systems already in place, saving space operators time and allowing them to focus only on the highest leverage activities." />
        </>
      ),
    },
  };
}
