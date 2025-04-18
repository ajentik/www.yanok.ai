import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Proximity"
      description="Create a seamless experience with integrated reservations, meeting room management, building access, Wi-Fi control and guest management."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/proximity.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Proximity Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 72, 124, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create a seamless experience with integrated reservations, meeting room management, building access, Wi-Fi control and guest management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Door Locked</div>
  <div>Triggers when a door is locked at your space.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Door Unlocked</div>
  <div>Triggers when a door is unlocked at your space.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Cancelled</div>
  <div>Triggers when a membership at your space is set to cancel at the end of its billing period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Changed</div>
  <div>Triggers when a membership changes at your space.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Caught Up on Payments</div>
  <div>Triggers when a member is caught up on payments at your space after they were previously behind.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Behind on Payments</div>
  <div>Triggers when a member is behind on payments at your space (their first failed payment in the billing cycle).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Created</div>
  <div>Triggers when a reservation is created for a resource at your space.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Ended</div>
  <div>Triggers when a reservation at your space ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Started</div>
  <div>Triggers when a reservation at your space begins.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Proximity</title>
          <meta name="description" content="Create a seamless experience with integrated reservations, meeting room management, building access, Wi-Fi control and guest management." />
        </>
      ),
    },
  };
}
