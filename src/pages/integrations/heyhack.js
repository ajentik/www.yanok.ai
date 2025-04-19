import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Heyhack"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/heyhack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Heyhack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 120, 221, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Heyhack automatically scans web applications for common vulnerabilities such as broken access control, cross-site scripting, and SQL injection.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Application</div>
  <div>Triggers when a new application in Heyhack has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Finding</div>
  <div>Triggers when a new vulnerability has been found by Heyhack.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Test Profile</div>
  <div>Triggers when a new test profile has been created in your Heyhack account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Start Penetration Test</div>
  <div>Starts an automated penetration test of the web application with the selected test profile in Heyhack.</div>
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
          <title>Heyhack</title>
        </>
      ),
    },
  };
}
