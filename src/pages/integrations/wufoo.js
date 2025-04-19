import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Wufoo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wufoo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Wufoo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(230, 103, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Wufoo is an easy way to create and manage HTML forms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Entry (poll)</div>
  <div>Triggers when someone fills out your form. This is a slow version wherein we check periodically for new entries.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Field</div>
  <div>Triggers when a new field is added to a form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form</div>
  <div>Triggers when you build a new form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Entry (webhook)</div>
  <div>Triggers when someone fills out your form instantly using webhooks (but you will need to create the webhooks manually).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Entry</div>
  <div>Triggers when someone fills out your form.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Entry (Legacy)</div>
  <div>Creates a new entry in Wufoo for a form and data you select (except not files).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Entry</div>
  <div>Creates a new entry in Wufoo for a form and data you select.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Submission</div>
  <div>Find a form submission by a field and its value.</div>
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
          <title>Wufoo</title>
        </>
      ),
    },
  };
}
