import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Feedly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/feedly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Feedly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 178, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The best way to follow your favorite blogs, news sites, YouTube shows, podcasts, tumblr blogs, magazines, eBay listings, Hulu shows and more. feedly delivers all your favorite news in one place—and it is blazing fast.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when you add a new note to an article.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Article in Folder</div>
  <div>Triggers when a new article is published in a Feedly folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Article in Feed</div>
  <div>Triggers when a new article is published in a feed (RSS, web alert, Twitter etc).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Priority Article</div>
  <div>Triggers when an article is prioritized.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Article Saved for Later</div>
  <div>Triggers when new article is saved in "Read Later".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Article in Board</div>
  <div>Triggers when an article is added to a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Highlight</div>
  <div>Triggers when you add a new highlight to an article.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Popular Article in Folder</div>
  <div>Triggers when a new popular article is published in a Feedly folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Web Alert Article</div>
  <div>Triggers when a new article is found in a web alert</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Article to Board</div>
  <div>Add an article to a board from a URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Article</div>
  <div>Save a new article in a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Feed</div>
  <div>Adds a new feed subscription to Feedly.</div>
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
          <title>Feedly</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
