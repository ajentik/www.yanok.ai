import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="freee"
      description="freee provides cloud-based accounting & HR software for SMBs in Japan to automate and simplify back-office tasks."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freee.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        freee Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(79, 118, 175, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">freee provides cloud-based accounting & HR software for SMBs in Japan to automate and simplify back-office tasks.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Income</div>
  <div>Triggers when there are new settled income.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsettled Deal</div>
  <div>Triggers when an unsettled deal exceeds its due date.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Partner</div>
  <div>Creates a new partner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Section</div>
  <div>Creates a new Section.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Segment1</div>
  <div>Creates a new Segment1.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Segment2</div>
  <div>Creates a new Segment2.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Segment3</div>
  <div>Creates a new Segment3.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new Tag.</div>
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
          <title>freee</title>
          <meta name="description" content="freee provides cloud-based accounting & HR software for SMBs in Japan to automate and simplify back-office tasks." />
        </>
      ),
    },
  };
}
