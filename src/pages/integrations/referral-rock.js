import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Referral Rock"
      description="Referral Rock helps businesses to design, track and manage referral programs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/referral-rock.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Referral Rock Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 136, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Referral Rock helps businesses to design, track and manage referral programs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member signs up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Referral</div>
  <div>Triggers when a new referral is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reward</div>
  <div>Triggers when a new reward is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Member</div>
  <div>Triggers when a member is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Referral</div>
  <div>Triggers when a referral is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Reward</div>
  <div>Triggers when a reward is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Member</div>
  <div>Add a new member to a referral program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Potential Invite</div>
  <div>Adds a new potential invite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Referral</div>
  <div>Adds a new referral from a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Referral Action</div>
  <div>Creates a new Referral Action to be used for processing new recurring rewards.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Referral</div>
  <div>Update a referral.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Email</div>
  <div>Add email to unsubscribe list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Find a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Program</div>
  <div>Find a program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Referral</div>
  <div>Find a Referral by Referral ID, Email Address or External ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Add Referral</div>
  <div>Find or Add Referral</div>
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
          <title>Referral Rock</title>
          <meta name="description" content="Referral Rock helps businesses to design, track and manage referral programs." />
        </>
      ),
    },
  };
}
