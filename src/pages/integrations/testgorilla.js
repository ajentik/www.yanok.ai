import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TestGorilla"
      description={`TestGorilla provides fast, unbiased, affordable screen testing for job candidates.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/testgorilla.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TestGorilla Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(70, 169, 151, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TestGorilla provides fast, unbiased, affordable screen testing for job candidates.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Assessment Status Complete</div>
  <div>Triggers when a candidate completes an assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Assessment Status in Progress</div>
  <div>Triggers when a candidate starts an assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Assessments</div>
  <div>Triggers when an assessment is created/cloned.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invite Candidate</div>
  <div>Invite Candidate for Assessment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reinvite Candidate</div>
  <div>Invite/ Reinvite candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Assessment</div>
  <div>get all the assessments created by owner</div>
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
          <title>TestGorilla</title>
          <meta name="description" content={`TestGorilla provides fast, unbiased, affordable screen testing for job candidates.`} />
        </>
      ),
    },
  };
}
