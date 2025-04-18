import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="My Web Audit"
      description="My Web Audit is an audit and reporting tool to help agencies generate more leads and close more deals."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/my-web-audit-da105289.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        My Web Audit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(81, 172, 214, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">My Web Audit is an audit and reporting tool to help agencies generate more leads and close more deals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Task</div>
  <div>Triggers when a new To-Do task is added to your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audit Email Read</div>
  <div>Triggers when the user reads the email the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audit Email Sent</div>
  <div>Triggers when an email has been sent for the audit the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audit Report Read</div>
  <div>Triggers when the user views the report the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audit Submission</div>
  <div>Triggers when a new audit generated including the company profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Audit Widget Submission</div>
  <div>Triggers when a user submits the audit widget form on your website.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Run Audit</div>
  <div>Runs a new audit.</div>
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
          <title>My Web Audit</title>
          <meta name="description" content="My Web Audit is an audit and reporting tool to help agencies generate more leads and close more deals." />
        </>
      ),
    },
  };
}
