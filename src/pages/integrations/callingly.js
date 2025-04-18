import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Callingly"
      description="Callingly is a call automation platform that gets salespeople on the phone with incoming online leads."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/callingly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Callingly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 169, 223, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Callingly is a call automation platform that gets salespeople on the phone with incoming online leads.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated or Tagged</div>
  <div>Triggers when a lead has been tagged or its status updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Completed</div>
  <div>Triggers when a call has been made to a Lead and the call completes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Lead</div>
  <div>Creates or updates a Lead, calls your Team and puts the first to accept through to the Lead\'s phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Call</div>
  <div>Creates or updates a Lead, schedules a call from your Team to the Lead at the specified time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update or Tag Lead</div>
  <div>Updates or tags a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds an existing lead.</div>
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
          <title>Callingly</title>
          <meta name="description" content="Callingly is a call automation platform that gets salespeople on the phone with incoming online leads." />
        </>
      ),
    },
  };
}
