import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Teyuto"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teyuto.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Teyuto Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(6, 127, 203, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Teyuto is a service that allows you to create a full custom video ondemand platform to distribute and monetize videos.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Abandoned Cart</div>
  <div>Triggers when a user abandons the cart without purchasing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Began to Play Video</div>
  <div>Trigger when a user plays a video for the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Subscription</div>
  <div>Triggers when user subscription is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Charge</div>
  <div>Triggers when a new charge is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when there is a new subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Playback Completed</div>
  <div>Triggers when a user views the video completely</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create User inside your channel</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manage Group</div>
  <div>Add or Remove User from a Group or a list of Groups</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manage Subscription</div>
  <div>Create or cancel access to premium contents</div>
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
          <title>Teyuto</title>
        </>
      ),
    },
  };
}
