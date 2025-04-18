import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="KARTE"
      description="KARTE changes that by providing a seamless CX across industries, platforms and services."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/karte.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        KARTE Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(42, 171, 159, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">KARTE changes that by providing a seamless CX across industries, platforms and services.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Datahub/Jobflow/End</div>
  <div>Triggers when jobflow ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Datahub/Jobflow/Start</div>
  <div>Triggers when jobflow starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Analyzed Customer Behaviors</div>
  <div>Triggers when analyzed customer behaviors</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Talk/Assignee/Assign</div>
  <div>Triggers when assignee is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Talk/Message/SendFromOperator</div>
  <div>Triggers when sendFromOperator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Talk/Message/SendFromUser</div>
  <div>Triggers when sendFromUser.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">/V2/Track/Event/Write</div>
  <div>Send event to KARTE</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Action/ActionTable/Records/Delete</div>
  <div>Delete records</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Action/ActionTable/Records/Upsert</div>
  <div>Set record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Action/Campaign/ToggleEnabled</div>
  <div>Toggle campaign\'s enabled status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Operation/Status/Get</div>
  <div>Get api operation status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Track/Event/Get</div>
  <div>Get events by user_id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Track/Event/WriteAndExecAction</div>
  <div>Send event to KARTE and exec serverside-action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Track/RefTable/Row/Delete</div>
  <div>Delete refTable row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Track/RefTable/Row/Upsert</div>
  <div>Upsert refTable row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">/V2beta/Track/User/Get</div>
  <div>Get user statistics.</div>
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
          <title>KARTE</title>
          <meta name="description" content="KARTE changes that by providing a seamless CX across industries, platforms and services." />
        </>
      ),
    },
  };
}
