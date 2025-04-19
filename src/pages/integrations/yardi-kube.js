import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Yardi Kube"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/yardi-kube.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Yardi Kube Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Yardi Kube is an all-in-one coworking management platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity Is Created in Yardi Kube</div>
  <div>Triggers when an activity is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Is Updated in Yardi Kube</div>
  <div>Triggers when an activity is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Is Archived in Yardi Kube</div>
  <div>Triggers when a booking is archived in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Is Created in Yardi Kube</div>
  <div>Triggers when a booking is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Is Updated in Yardi Kube</div>
  <div>Triggers when a booking is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Is Archived in Yardi Kube</div>
  <div>Triggers when a company is archived in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Is Created in Yardi Kube</div>
  <div>Triggers when a company is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Is Updated in Yardi Kube</div>
  <div>Triggers when a company is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Is Created in Yardi Kube</div>
  <div>Triggers when an event is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Is Updated in Yardi Kube</div>
  <div>Triggers when an event is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Archived in Yardi Kube</div>
  <div>Triggers when a lead is archived in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Created in Yardi Kube</div>
  <div>Triggers when a new lead is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Updated in Yardi Kube</div>
  <div>Triggers when a lead is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Is Archived in Yardi Kube</div>
  <div>Triggers when a member is archived in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Is Created in Yardi Kube</div>
  <div>Triggers when a member is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Is Updated in Yardi Kube</div>
  <div>Triggers when a member is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Is Created in Yardi Kube</div>
  <div>Triggers when a note is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Is Updated in Yardi Kube</div>
  <div>Triggers when a note is updated in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tour Is Archived in Yardi Kube</div>
  <div>Triggers when a tour is archived in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tour Is Created in Yardi Kube</div>
  <div>Triggers when a tour is created in Yardi Kube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tour Is Updated in Yardi Kube</div>
  <div>Triggers when a tour is updated in Yardi Kube.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive Company</div>
  <div>Archive a company in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Lead</div>
  <div>Archives a lead in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Member</div>
  <div>Archives a member in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Tour</div>
  <div>Archive a tour in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Create an activity in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Create a booking in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a company in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Create an event in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a lead in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a note in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tour</div>
  <div>Create a tour in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Booking</div>
  <div>Delete a booking in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a member in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Update an activity in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Booking</div>
  <div>Update a booking in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update a company in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Update an event in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a lead in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a member in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Update note in Yardi Kube</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tour</div>
  <div>Update a tour in Yardi Kube</div>
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
          <title>Yardi Kube</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
