import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Notion"
      description="A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/notion.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Notion Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A new tool that blends your everyday work apps into one. It\'s the all-in-one workspace for you and your team.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Database Item</div>
  <div>Triggers when a new item is created in a database.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Database Item</div>
  <div>Creates an item in a database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Page</div>
  <div>Creates a Page inside a parent page</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Database Item</div>
  <div>Updates a database item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Database Item</div>
  <div>Searches for an item in a database by property.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Page (By Title)</div>
  <div>Searches for a page by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Database Item</div>
  <div>Searches for a Database Item matching the provided query, or creates one if it does not exist.</div>
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
          <title>Notion</title>
          <meta name="description" content="A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team." />
        </>
      ),
    },
  };
}
