import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="100Hires"
      description="100Hires is a recruitment software that includes talent sourcing, and applicant tracking to accelerate your company's hiring process."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/100hires.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        100Hires Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">100Hires is a recruitment software that includes talent sourcing, and applicant tracking to accelerate your company\'s hiring process.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Published</div>
  <div>Triggers when job has been published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate</div>
  <div>Triggers when a new candidate is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate in Stage</div>
  <div>Triggers when a new candidate enters the chosen stage.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Candidate to Job Opening/Talent Pool</div>
  <div>Assigns a candidate to a job opening or talent pool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Candidate</div>
  <div>Creates a candidate.</div>
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
          <title>100Hires</title>
          <meta name="description" content="100Hires is a recruitment software that includes talent sourcing, and applicant tracking to accelerate your company's hiring process." />
        </>
      ),
    },
  };
}
