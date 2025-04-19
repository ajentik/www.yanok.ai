import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Learn Amp"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/learnamp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Learn Amp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 41, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Learn Amp is a People Development Platform. Engage with learning, connect with others in your business and track your performance.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Channel</div>
  <div>Triggers when a new channel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment</div>
  <div>Triggers when a new enrollment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item</div>
  <div>Triggers when a new item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Learnlist</div>
  <div>Triggers when a new learnlist is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Team Member</div>
  <div>Creates a Team Member in the Team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll User</div>
  <div>Enrols a user to an event session</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Team</div>
  <div>Creates a team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user in LearnAmp</div>
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
          <title>Learn Amp</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
