import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Luma"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/luma.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Luma Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 75, 134, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Luma is an event management app that gives you the tools to host delightful Zoom events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Community Member Created</div>
  <div>Triggers when a new member joins, applies, or is invited to your community.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Created</div>
  <div>Triggers when a new event is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Guest Updated</div>
  <div>Triggers when a guest registers for your event, joins the event or updates their registration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audience Member Updated</div>
  <div>Triggers when someone follows you or joins your membership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Member Removed</div>
  <div>Triggers when a community member has been removed or blocked in one of your communities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Community Member Updated</div>
  <div>Triggers when a new member joins, applies, or is invited to your community.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Audience Member</div>
  <div>Adds an audience member.</div>
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
          <title>Luma</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
