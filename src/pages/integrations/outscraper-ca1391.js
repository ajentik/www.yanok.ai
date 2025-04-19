import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Outscraper"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/outscraper-ca1391.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Outscraper Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 64, 157, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Outscraper is a service that allows you to scraper the data and reviews from Google Maps in real-time. Use simple queries and extract any amount of local businesses into JSON.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">On Task Finished</div>
  <div>Triggers when a task is finished.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Emails & Contacts</div>
  <div>Allows finding email addresses, social links, and phones from domains.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Places on Google Maps</div>
  <div>Search for places on Google Maps be queries (category + city/zip + country), links, google or places IDs</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Google Search</div>
  <div>Returns search results (SERP) from Google based on a given search query (or many queries).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Google Search News</div>
  <div>Returns search results from Google News based on a given search query (or many queries).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Requests Archive</div>
  <div>Allows you to fetch responses from search requests created with async API endpoints.</div>
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
          <title>Outscraper</title>
        </>
      ),
    },
  };
}
