import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Attio"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/attio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Attio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(80, 89, 103, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Attio is the CRM of the future: data-driven, completely customizable and intuitively collaborative.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Entry Attribute Changed</div>
  <div>Triggers when an Attribute in an Entry changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Status Changed</div>
  <div>Triggers when an Entry\'s Status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Entry</div>
  <div>Triggers when an Entry is added to a Collection.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or create a Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Person and Company</div>
  <div>Link a Person and a Company together.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Entry</div>
  <div>Find or Create an Entry in a Collection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Find or create a Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Storage Location</div>
  <div>Connects a folder from a file provider (eg. Dropbox) to a Record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Entry Attributes</div>
  <div>Updates the Attributes of an Entry in any of your collections.</div>
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
          <title>Attio</title>
        </>
      ),
    },
  };
}
