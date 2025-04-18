import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="inwink"
      description="inwink is an event intelligence platform that helps event organizers to manage the complete event life-cycle and addresses the needs of all stakeholders : manage event data, build event website, deliver amazing attendee experience, enable efficient collaboration with partners and maximize event ROI."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/inwink.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        inwink Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(242, 94, 44, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">inwink is an event intelligence platform that helps event organizers to manage the complete event life-cycle and addresses the needs of all stakeholders : manage event data, build event website, deliver amazing attendee experience, enable efficient collaboration with partners and maximize event ROI.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Person Added</div>
  <div>Triggers when a person is added in inwink person list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Company Added</div>
  <div>Triggers when a company is added in inwink company list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Company Updated</div>
  <div>Triggers when a company is updated in inwink company list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Member Added</div>
  <div>Triggers when a person is added in inwink member list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Added</div>
  <div>Triggers when a new order is created in inwink</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Attended to Session</div>
  <div>Triggers when a person attended to a session</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Attended</div>
  <div>Triggers when a person attend the event (Has Attended is checked)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Registered</div>
  <div>Triggers when a new person registered the event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Registered to Session</div>
  <div>Triggers when a person registered to a session</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search by Email</div>
  <div>Search if a person exist, using the email adresse</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Survey Answered</div>
  <div>Triggers when an answer is added to a survey</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Member Updated</div>
  <div>Triggers when a member is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an order is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Updated</div>
  <div>Triggers when a person is updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Community Company</div>
  <div>Create a new company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Create a new Member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Person</div>
  <div>Register a new person to an event manager with inwink</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Community Company</div>
  <div>Update en existing community company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Update an existing member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Update a Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Membership Level by Id</div>
  <div>Search a membership level with a specific id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Person Field With Single Value</div>
  <div>Search a person by field. If there is many entity with the same value, an error will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Single Email</div>
  <div>Search a person by email. If there is many person with the same email, an error will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Person if search not found</div>
  <div>Search a person by field. If there is many entity with the same value, an error will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Person if search not found</div>
  <div>Search a person by email. If there is many person with the same email, an error will be returned.</div>
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
          <title>inwink</title>
          <meta name="description" content="inwink is an event intelligence platform that helps event organizers to manage the complete event life-cycle and addresses the needs of all stakeholders : manage event data, build event website, deliver amazing attendee experience, enable efficient collaboration with partners and maximize event ROI." />
        </>
      ),
    },
  };
}
