import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GymFlow"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gymflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GymFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 67, 110, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Gymflow is an intuitive all-in-one business management platform for gyms and studios.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Membership</div>
  <div>Triggers when a users membership changes to a cancelled status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event RSVP Updates</div>
  <div>Triggers when a user RSVP status changes to Booked, Cancelled or Attended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expired Membership</div>
  <div>Triggers when a users membership expires</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Purchased</div>
  <div>Triggers when a user purchases a membership for either the first time or any subsequent time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created in Gymflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Session Pack Purchased</div>
  <div>Triggers when a user purchases a Session Pack for the first time and any subsequent times.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Lead</div>
  <div>Adds a lead in GymFlow with a lead status of "New Lead".</div>
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
          <title>GymFlow</title>
        </>
      ),
    },
  };
}
