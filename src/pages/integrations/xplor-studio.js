import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Xplor Studio"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/xplor-studio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Xplor Studio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 78, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Xplor Studio is a studio management platform with all the tools to make life easier, discover new revenue streams, and build unique fitness experiences from anywhere.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Created</div>
  <div>Triggers when a appointment booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Updated</div>
  <div>Triggers when a appointment booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Created</div>
  <div>Triggers when a class booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Updated</div>
  <div>Triggers when a class booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Membership Assigned</div>
  <div>Triggers when a member membership is assigned/purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Membership Cancelled</div>
  <div>Triggers when a member membership is manually cancelled by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Membership Ended</div>
  <div>Triggers when a member membership ends due to the expiration date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Created</div>
  <div>Triggers when a new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Updated</div>
  <div>Triggers when a member is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Package Assigned</div>
  <div>Triggers when a member package is assigned/purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Package Finished</div>
  <div>Triggers when a package finishes due to all the credits being used up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Product Assigned</div>
  <div>Triggers when a member product is assigned/purchased.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a Member in Xplor Studio</div>
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
          <title>Xplor Studio</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
