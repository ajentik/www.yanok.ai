import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ApptiveGrid"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/apptivegrid.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ApptiveGrid Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(21, 101, 192, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ApptiveGrid enables anyone to create digital products and workflows. ApptiveGrid is a visual spreadsheet and database hybrid, api driven and highly integratable.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Entry</div>
  <div>Triggers when a new entry is available.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Updated</div>
  <div>Triggers when an entry was updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Appears in View</div>
  <div>Triggers when a entry appears in a grid view.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Entry</div>
  <div>Creates a new Entry in a Grid</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Form</div>
  <div>Creates a link to a shared form to edit an entity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Load Entry</div>
  <div>Loads an existing entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Load GridView</div>
  <div>Loads a specific GridView</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Entry</div>
  <div>Updates an existing Entry</div>
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
          <title>ApptiveGrid</title>
        </>
      ),
    },
  };
}
