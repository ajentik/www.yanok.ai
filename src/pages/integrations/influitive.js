import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Influitive"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/influitive.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Influitive Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Influitive is an app that helps you motivate and mobilize your most valued customers and advocates. Give your advocates challenges so they can help your business. Track their progress, and reward them for their efforts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Community Topic Posted</div>
  <div>Triggers when a new topic has been posted in Discussions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Logged</div>
  <div>Triggers when an event is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Joined</div>
  <div>Triggers when a new Advocate joins your AdvocateHub.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Redeemed</div>
  <div>Triggers when a reward is redeemed in your AdvocateHub.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Referral Submitted</div>
  <div>Triggers when a Referral is submitted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Advance Referral</div>
  <div>Advance the milestone of a Referral in your AdvocateHub</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Member</div>
  <div>Create a member in your AdvocateHub</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Custom Event</div>
  <div>Logs a custom event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send an Invite to a Member</div>
  <div>Send an invite to a member who is in your AdvocateHub and has not been previously invited</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Member From Emails</div>
  <div>Unsubscribe a member of your AdvocateHub from emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Member by UUID or ID</div>
  <div>Retrieve information of a Member using their UUID or ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Referral</div>
  <div>Retrieve information on a referral.</div>
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
          <title>Influitive</title>
        </>
      ),
    },
  };
}
