import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Optix"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/optix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Optix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(175, 35, 88, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Optix is a platform for on-demand work and meeting spaces.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assignment Canceled</div>
  <div>Triggers when a resource assignment is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assignment Changed</div>
  <div>Triggers when a resource assignment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Assignment</div>
  <div>Triggers when there is a new resource assignment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Plan Subscription Canceled</div>
  <div>Triggers when a user or team plan subscription is canceled or ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Issue</div>
  <div>Triggers when a user reports a new issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added to an organization. It has 1 hour delay, and it won’t be triggered if a lead becomes an active member within that period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Canceled</div>
  <div>Triggers when a member booking has been cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Changed</div>
  <div>Triggers when a member booking has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when there is a new member booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Check-In</div>
  <div>A member checks into a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is added to an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Support Request</div>
  <div>Triggers when a user asks admins a question.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Plan Subscription</div>
  <div>Triggers when a user or team is subscribed to a plan. And when a new user is added to an individual team plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Member</div>
  <div>Triggers when a user is added to a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Payment</div>
  <div>Triggers when a member pays an invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Plan Subscription Changed</div>
  <div>Triggers when a user or team plan is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Plan Subscription Ending Soon</div>
  <div>Triggers when a user or team plan subscription is about to end.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product Sale</div>
  <div>Triggers when a new product sale is made</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Member Deleted</div>
  <div>Triggers when a user is removed from a team.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Optix</div>
  <div>Adds a new user to Optix</div>
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
          <title>Optix</title>
        </>
      ),
    },
  };
}
