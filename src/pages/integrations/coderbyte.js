import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coderbyte"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coderbyte.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coderbyte Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 135, 86, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coderbyte is the #1 coding assessment platform for qualifying engineering talent in your pipeline.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Completed Assessment</div>
  <div>Triggers when a candidate submits their assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Joined Assessment</div>
  <div>Triggers when a candidate joins an assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Reviewed</div>
  <div>Triggers when a candidate is reviewed by an admin.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invite Candidate</div>
  <div>This action invites a candidate to take an assessment on Coderbyte.</div>
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
          <title>Coderbyte</title>
        </>
      ),
    },
  };
}
