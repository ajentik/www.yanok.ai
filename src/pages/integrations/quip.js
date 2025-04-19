import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Quip"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quip.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Quip Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 180, 233, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Quip is a modern productivity suite that enables you and your team to collaborate on any device. It works across iPhone, iPad, Android phones and tablets, and the desktop web. Quip has a simple and elegant interface that combines documents and messages into a single chat-like “thread” of updates, making collaboration immediate and easy. You can share documents, tables, checklists, and more so multiple people can edit and discuss together in a single, shared workspace.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder is added directly to a specific folder (but not its subfolders).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Item to List</div>
  <div>This action will add a new item to a Quip list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Row to Spreadsheet</div>
  <div>This action will add a row to a Quip spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a new document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Send a message to a Quip thread.</div>
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
          <title>Quip</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
