import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Index.co"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/index.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Index.co Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(28, 107, 245, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Index is a platform for startups, corporate brands and investors. We harness data on hundreds of thousands of companies to fuel growth and innovation around the globe.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Article in List</div>
  <div>Triggers when a new article is added to a company in a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company in List</div>
  <div>Triggers when a new company is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Funding Round in List</div>
  <div>Triggers when a new funding round is added to a company in a list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Company to List</div>
  <div>Adds a new company to a selected list by their URL.</div>
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
          <title>Index.co</title>
        </>
      ),
    },
  };
}
