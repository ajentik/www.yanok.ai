import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pipeless Recommendations"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipeless.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pipeless Recommendations Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 97, 239, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Power real-time personalized recommendations and activity feeds using a simple API.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Create a Pipeless Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Events (With Line Item Support)</div>
  <div>Create up to 10 events in one API call. If there are more than 10 events provided, the excess events will be truncated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity Actions Feed</div>
  <div>Fetch the activity feed for a user (or any other object type). This activity feed format will return acted upon entities as the main result. Ex. one item per post, article, product, etc. Each single item has associated actions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity Feed</div>
  <div>Fetch the activity feed for a user (or any other object type). This activity feed format will return events in sequential descending order - there will be one activity item for each found action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Activity on Object</div>
  <div>Gets recent activity on any object</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Recommended Content (For User)</div>
  <div>For a given user (or any object type), get a list of recommended content, based on their behavior/tastes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Recommended Users to Follow (For User)</div>
  <div>For a given user (or any object type), get a list of recommended users for the target user to follow, based on their behavior/tastes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Related Content</div>
  <div>Gets related content objects based on a specific piece of content of any type.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Related Tags</div>
  <div>Gets related tags for a given tag (or any other object type, ex. category).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Related Users</div>
  <div>Get related users based on a target user (or other type).</div>
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
          <title>Pipeless Recommendations</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
