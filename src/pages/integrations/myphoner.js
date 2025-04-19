import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Myphoner"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/myphoner.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Myphoner Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 70, 86, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Myphoner is a cold calling tool used for lead management and lead tracking, with the focus of creating a superior workflow for the sales agent.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archived Lead</div>
  <div>Triggers when a lead is archived (marked \'archive\').</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Back</div>
  <div>Triggers when a lead is marked for \'call back\'.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lost Lead</div>
  <div>Triggers when a lead is lost (marked \'loser\').</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Winner</div>
  <div>Triggers when a lead is won.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Lead as Loser</div>
  <div>Marks a given lead as a loser.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Lead as Winner</div>
  <div>Marks a given lead as a winner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Lead for Call Back</div>
  <div>Marks a given lead for call back, optionally at a specific time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing lead in myphoner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Lookup a Lead in myphoner based on a specific field with a matching value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Lead</div>
  <div>Lookup a Lead in myphoner based on free text search.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
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
          <title>Myphoner</title>
        </>
      ),
    },
  };
}
