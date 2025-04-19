import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Formitize"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/formitize.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Formitize Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(10, 163, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Formitize is an all around customizable solution for moving from paper based forms to electronic based solutions. The wide variety of uses include from dispatching jobs, to house inspections, sales and even call-quality assurance.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">On Form Submitted</div>
  <div>Triggers when a form has been submitted on Formitize.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">On Create Job</div>
  <div>This trigger occurs when a job is dispatched from the Formitize portal</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Create\'s a job in Formitize.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Notification</div>
  <div>Creates a notification.</div>
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
          <title>Formitize</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
